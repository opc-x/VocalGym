import { getGemini } from "../config/gemini";

export class AiService {
  /**
   * Generates explanation and pronunciation tips.
   */
  async generateExplanation(word: string, questionText: string, expectedAnswer: string, type: string) {
    const ai = getGemini();
    let prompt = "";

    if (type === "card") {
      prompt = `
      You are an expert English phonetics tutor and language coach specializing in the Callan Method (high-speed verbal repetition).
      Provide a concise explanation for the English vocabulary word: "${word}".
      
      Output exact JSON format matching this schema:
      {
        "spellingBreakdown": "Syllable breakdown or accent guide with phonetics context",
        "pronunciationTips": "Extremely direct visual/kinetic tips for pronunciation, e.g. 'Keep the tongue low', 'Jaw relaxed, drop 1 inch'",
        "commonMistakes": "Key errors or accent traps that native speakers face",
        "grammarPoints": "Brief structural or grammatical usage point"
      }
      
      Keep explanations highly conversational, direct, and actionable for high-speed repeating practice. Avoid markdown wrapping.
      `;
    } else {
      prompt = `
      You are an expert English phonetics tutor and language coach specializing in the Callan Method (high-speed verbal repetition).
      Analyze this dialogue question-answer pair:
      Question: "${questionText}"
      Expected Answer: "${expectedAnswer}"
      
      Provide a concise explanation of key structures, phonetic linking sounds (liaisons), and stress.
      
      Output exact JSON format matching this schema:
      {
        "sentenceStress": "Highlight the core words that should be stressed or capitalized in spoken rhythm",
        "linkingSounds": "Phonetic liaisons or linking tips (e.g. 'difference_between' connects smoothly)",
        "grammarTips": "A short and direct grammar rule highlight",
        "pronunciationTips": "Actionable visual/kinetic tongue/jaw positions for speaking this rapidly"
      }
      
      Avoid markdown wrapping around JSON. Keep descriptions of tongue/jaw positions extremely graphic (e.g. 'Drop jaw slightly on /æ/').
      `;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const textOutput = response.text || "{}";
    return JSON.parse(textOutput.trim());
  }

  /**
   * Analyzes live speech transcript for "Look-and-Speak".
   */
  async analyzeScenic(transcript: string, sceneTitle: string, levelNeeded: string, keywords: string[]) {
    const ai = getGemini();

    const prompt = `
    You are an expert English phonetics tutor, Callan Method specialist, and oral examiner grading English speaking reflexes.
    A student has described this visual scene: "${sceneTitle}" (Expected target proficiency: ${levelNeeded}).
    The keywords associated with the scene are: ${keywords ? keywords.join(', ') : 'none'}.
    The live speech transcript of their verbal response under high-speed reaction time limits is:
    "${transcript || '(silence)'}"

    Requirements:
    1. Grade their response on a scale of 10 to 100 based on grammatical fluency, speed, coherence, and lexical relevance to the scene. Give realistic scores (usually 40 to 95 depending on depth).
    2. Suggest a CEFR level matching this spoken depth (A1, A2, B1, B2, C1, C2).
    3. Provide highly constructive feedback on their coherence with the scene details and their lexical depth.
    4. Spot any grammatical mistakes and offer a superior, natural English upgrade.
    5. Provide 3 native-sounding, natural advanced alternative phrases (using rich idioms, verbs, or collocations) they can immediately repeat to sound more native in this scene.
    6. Mention 1 specific pronunciation liaison / phonetic link (connecting words) among the scene keywords (e.g. "Airport departure contains airport_departure liaison, blend /t/ directly into /d/").

    Please output in exact JSON format:
    {
      "score": 85,
      "cefrLevelReached": "B2",
      "coherencyText": "A warm, direct statement evaluating their descriptive focus. E.g., 'You beautifully captured the barista's action, but try to describe the background window view...'",
      "keyGrammarSuggestion": "A helpful grammar or phrasing suggestion, e.g., 'Instead of \"I ordering breakfast\", say \"I'm order-ing...\"'",
      "advancedAlternativePhrases": ["alternative phrase 1", "alternative phrase 2", "alternative phrase 3"],
      "pronunciationTricks": "1 direct pharyngeal/tongue linkage trick for speed"
    }

    Do not wrap in markdown or backticks. Return the pure JSON.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const textOutput = response.text || "{}";
    return JSON.parse(textOutput.trim());
  }
}

export const aiService = new AiService();
