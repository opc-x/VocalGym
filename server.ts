import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use(express.json());

// Initialize Gemini client lazily or handle gracefully
let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is is not declared in Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for smart explanation & pronunciation tips
app.post("/api/explain", async (req: express.Request, res: express.Response) => {
  try {
    const { word, questionText, expectedAnswer, type } = req.body;
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
    const parsedData = JSON.parse(textOutput.trim());
    res.json(parsedData);
  } catch (err: any) {
    console.error("Gemini Explain Error:", err);
    res.status(500).json({ error: err.message || "Failed to generate AI insights." });
  }
});

// Vite middleware for development
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

bootstrap();
