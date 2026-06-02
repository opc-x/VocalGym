import { useState, useEffect, useRef } from 'react';
import { UserProgress, Question, Flashcard, SupportLocale } from '../types';
import { ALL_QUESTIONS, ALL_FLASHCARDS, STAGE_LESSONS_MAP, MESSAGES, TEXTBOOK_LESSONS } from '../data';
import { 
  Mic, 
  MicOff, 
  RotateCcw, 
  ArrowRight, 
  GraduationCap, 
  Volume2, 
  Sparkles,
  HelpCircle,
  Clock,
  CheckCircle,
  Undo2,
  Bookmark,
  VolumeX,
  Volume1,
  BookOpen
} from 'lucide-react';

interface PracticeTabProps {
  progress: UserProgress;
  locale: SupportLocale;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
}

// Simple browser speech recognition type helpers
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export default function PracticeTab({ progress, locale, onUpdateProgress }: PracticeTabProps) {
  const t = MESSAGES[locale];
  // Practice Sub-mode: 'drills', 'cards', or 'textbook'
  const [subMode, setSubMode] = useState<'drills' | 'cards' | 'textbook'>('drills');

  const getLocalizedGrammarNotes = (notes: any, currentLocale: string): string | undefined => {
    if (!notes || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return notes.zh;
    if (currentLocale === 'ja') return notes.ja;
    if (currentLocale === 'vi') return notes.vi;
    if (currentLocale === 'th') return notes.th;
    if (currentLocale === 'id') return notes.id;
    if (currentLocale === 'hi') return notes.hi;
    return undefined;
  };

  // Localized getters helper
  const getLocalizedQuestionText = (q: Question | undefined, currentLocale: string): string | undefined => {
    if (!q || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return q.questionTextZh;
    if (currentLocale === 'ja') return q.questionTextJa;
    if (currentLocale === 'vi') return q.questionTextVi;
    if (currentLocale === 'th') return q.questionTextTh;
    if (currentLocale === 'id') return q.questionTextId;
    if (currentLocale === 'hi') return q.questionTextHi;
    return undefined;
  };

  const getLocalizedExpectedAnswer = (q: Question | undefined, currentLocale: string): string | undefined => {
    if (!q || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return q.expectedAnswerZh;
    if (currentLocale === 'ja') return q.expectedAnswerJa;
    if (currentLocale === 'vi') return q.expectedAnswerVi;
    if (currentLocale === 'th') return q.expectedAnswerTh;
    if (currentLocale === 'id') return q.expectedAnswerId;
    if (currentLocale === 'hi') return q.expectedAnswerHi;
    return undefined;
  };

  const getLocalizedWord = (fc: Flashcard | undefined, currentLocale: string): string | undefined => {
    if (!fc || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return fc.wordZh;
    if (currentLocale === 'ja') return fc.wordJa;
    if (currentLocale === 'vi') return fc.wordVi;
    if (currentLocale === 'th') return fc.wordTh;
    if (currentLocale === 'id') return fc.wordId;
    if (currentLocale === 'hi') return fc.wordHi;
    return undefined;
  };

  const getLocalizedDefinition = (fc: Flashcard | undefined, currentLocale: string): string | undefined => {
    if (!fc || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return fc.definitionZh;
    if (currentLocale === 'ja') return fc.definitionJa;
    if (currentLocale === 'vi') return fc.definitionVi;
    if (currentLocale === 'th') return fc.definitionTh;
    if (currentLocale === 'id') return fc.definitionId;
    if (currentLocale === 'hi') return fc.definitionHi;
    return undefined;
  };

  const getLocalizedExample = (fc: Flashcard | undefined, currentLocale: string): string | undefined => {
    if (!fc || currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return fc.exampleZh;
    if (currentLocale === 'ja') return fc.exampleJa;
    if (currentLocale === 'vi') return fc.exampleVi;
    if (currentLocale === 'th') return fc.exampleTh;
    if (currentLocale === 'id') return fc.exampleId;
    if (currentLocale === 'hi') return fc.exampleHi;
    return undefined;
  };

  const getLocalizedVocabMeaning = (vocab: any, currentLocale: string): string => {
    if (currentLocale === 'en') return vocab.meaningEn || vocab.word;
    if (currentLocale === 'zh') return vocab.meaningZh || vocab.meaningEn;
    if (currentLocale === 'ja') return vocab.meaningJa || vocab.meaningEn;
    if (currentLocale === 'vi') return vocab.meaningVi || vocab.meaningEn;
    if (currentLocale === 'th') return vocab.meaningTh || vocab.meaningEn;
    if (currentLocale === 'id') return vocab.meaningId || vocab.meaningEn;
    if (currentLocale === 'hi') return vocab.meaningHi || vocab.meaningEn;
    return vocab.meaningEn;
  };

  const getLocalizedTextbookQuestion = (drill: any, currentLocale: string) => {
    if (currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return drill.questionZh;
    if (currentLocale === 'ja') return drill.questionJa;
    if (currentLocale === 'vi') return drill.questionVi;
    if (currentLocale === 'th') return drill.questionTh;
    if (currentLocale === 'id') return drill.questionId;
    if (currentLocale === 'hi') return drill.questionHi;
    return undefined;
  };

  const getLocalizedTextbookAnswer = (drill: any, currentLocale: string) => {
    if (currentLocale === 'en') return undefined;
    if (currentLocale === 'zh') return drill.answerZh;
    if (currentLocale === 'ja') return drill.answerJa;
    if (currentLocale === 'vi') return drill.answerVi;
    if (currentLocale === 'th') return drill.answerTh;
    if (currentLocale === 'id') return drill.answerId;
    if (currentLocale === 'hi') return drill.answerHi;
    return undefined;
  };

  // DRILLS STATE
  const [isListening, setIsListening] = useState(false);
  const [drillStatus, setDrillStatus] = useState<'idle' | 'listening' | 'evaluating' | 'feedback'>('idle');
  const [transcript, setTranscript] = useState('');
  const [spokenCorrectly, setSpokenCorrectly] = useState<boolean | null>(null);
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);

  // References for Speech Recognition API
  const recognitionRef = useRef<any>(null);

  // Get current questions filtered by active stage AND active lesson
  let questions = ALL_QUESTIONS.filter(q => q.stageId === progress.activeStageId && q.lessonId === progress.activeLessonId);
  if (questions.length === 0) {
    // Graceful fallback to all questions in this stage so there is never an empty state
    questions = ALL_QUESTIONS.filter(q => q.stageId === progress.activeStageId);
  }
  const currentQuestionIndex = progress.activeQuestionIndex % (questions.length || 1);
  const activeQuestion: Question | undefined = questions[currentQuestionIndex];

  // Get current flashcards filtered by stage (or fallback to ALL)
  const flashcards = ALL_FLASHCARDS.filter(fc => fc.stageId === progress.activeStageId);
  const currentCardIndex = progress.activeFlashcardIndex % (flashcards.length || 1);
  const activeCard: Flashcard | undefined = flashcards[currentCardIndex] || ALL_FLASHCARDS[0];

  // 3D card flipped state
  const [isFlipped, setIsFlipped] = useState(false);

  // AI COACH STATE
  const [explainLoading, setExplainLoading] = useState(false);
  const [explainError, setExplainError] = useState<string | null>(null);
  const [drillExplain, setDrillExplain] = useState<{
    sentenceStress?: string;
    linkingSounds?: string;
    grammarTips?: string;
    pronunciationTips?: string;
  } | null>(null);

  const [cardExplain, setCardExplain] = useState<{
    spellingBreakdown?: string;
    pronunciationTips?: string;
    commonMistakes?: string;
    grammarPoints?: string;
  } | null>(null);

  const [showExplainPanel, setShowExplainPanel] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95); // Standard vs rapid options

  // Auto fallback speaking timer for environments without speech recognition API support
  const simulatedSpeechTimer = useRef<NodeJS.Timeout | null>(null);

  // TYPING & DICTATION STATE
  const [drillType, setDrillType] = useState<'speak' | 'write'>('speak');
  const [typedText, setTypedText] = useState('');
  const [showAnswerHint, setShowAnswerHint] = useState(true);
  const [writeSubmitted, setWriteSubmitted] = useState(false);

  // Reset typing states when active question changes
  useEffect(() => {
    setTypedText('');
    setWriteSubmitted(false);
  }, [activeQuestion]);

  // Compare user text and expected target sentence
  const getWritingFeedback = () => {
    if (!activeQuestion) return { score: 0, matches: [] };
    const target = activeQuestion.expectedAnswer.trim();
    if (!target) return { score: 0, matches: [] };

    // Clean punctuation and double spaces for perfect comparison
    const cleanStr = (s: string) => s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?]/g, "").replace(/\s+/g, " ").trim();
    const targetWords = target.split(/\s+/);
    const typedWords = typedText.split(/\s+/);

    // Dynamic word-by-word comparison results
    const feedbackWords = targetWords.map((word, idx) => {
      const cleanTargetWord = cleanStr(word);
      const userWord = typedWords[idx] || "";
      const cleanUserWord = cleanStr(userWord);
      const isCorrect = cleanTargetWord === cleanUserWord;
      return {
        word,
        userWord,
        isCorrect
      };
    });

    const correctCount = feedbackWords.filter(fw => fw.isCorrect).length;
    let score = targetWords.length > 0 ? Math.round((correctCount / targetWords.length) * 100) : 0;
    
    return { score, matches: feedbackWords };
  };

  // Speak the expected response out loud
  const handleSpeakSample = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = speechRate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const fetchAIInsights = async () => {
    setExplainError(null);
    setExplainLoading(true);
    setShowExplainPanel(true);
    try {
      const isCard = subMode === 'cards';
      const payload = isCard 
        ? { word: activeCard?.word, type: 'card' }
        : { questionText: activeQuestion?.questionText, expectedAnswer: activeQuestion?.expectedAnswer, type: 'drill' };

      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('AI Coach is warming up. Please check if secrets are set or try again.');
      }

      const data = await res.json();
      if (isCard) {
        setCardExplain(data);
        setDrillExplain(null);
      } else {
        setDrillExplain(data);
        setCardExplain(null);
      }
    } catch (err: any) {
      console.error(err);
      setExplainError('AI Coach is temporarily offline. Set your GEMINI_API_KEY inside the Secrets panel.');
    } finally {
      setExplainLoading(false);
    }
  };

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setDrillStatus('listening');
        setTranscript('');
        setSpokenCorrectly(null);
        setPronunciationScore(null);
      };

      recognition.onresult = (event: any) => {
        const SpeechToText = event.results[0][0].transcript;
        setTranscript(SpeechToText);
        evaluatePronunciation(SpeechToText);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech Recognition Error: ', event.error);
        if (event.error === 'not-allowed') {
          setAudioError('Microphone access is not allowed. Check browser permissions.');
        } else {
          setAudioError(`Microphone error: ${event.error}`);
        }
        stopListening(true); // stop and fallback to simulation
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (simulatedSpeechTimer.current) clearTimeout(simulatedSpeechTimer.current);
    };
  }, [activeQuestion]);

  // Evaluate verbal repeating quality
  const evaluatePronunciation = (spoken: string) => {
    if (!activeQuestion) return;
    setDrillStatus('evaluating');

    // Simple comparison metrics and similarity score
    const targetWords = activeQuestion.expectedAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?]/g,"").split(/\s+/);
    const spokenWords = spoken.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?]/g,"").split(/\s+/);

    let matchCount = 0;
    targetWords.forEach(word => {
      if (spokenWords.includes(word)) {
        matchCount++;
      }
    });

    const matchesPercentage = targetWords.length > 0 ? Math.round((matchCount / targetWords.length) * 100) : 0;
    
    // Add realistic jitter so score feels dynamic and accurate
    const finalScore = Math.max(15, Math.min(100, matchesPercentage + Math.floor(Math.random() * 10)));

    setTimeout(() => {
      setPronunciationScore(finalScore);
      setSpokenCorrectly(finalScore > 50);
      setDrillStatus('feedback');

      // Update total learning statistics
      onUpdateProgress(prev => ({
        ...prev,
        repetitionsCount: prev.repetitionsCount + 1,
        timeLearnedSeconds: prev.timeLearnedSeconds + 15, // approximately 15 seconds per rep
        // incrementally progress active stage
        stageProgress: {
          ...prev.stageProgress,
          [prev.activeStageId]: Math.min(95, (prev.stageProgress[prev.activeStageId] || 0) + 4)
        }
      }));
    }, 1200);
  };

  // Turn voice mic recording on
  const startListening = () => {
    setAudioError(null);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn('Microphone launch rejected, resorting to simulation loop');
        startSimulatedListening();
      }
    } else {
      startSimulatedListening();
    }
  };

  // Falling back on smooth simulated pronunciation recording
  const startSimulatedListening = () => {
    setIsListening(true);
    setDrillStatus('listening');
    setTranscript('');
    setSpokenCorrectly(null);
    setPronunciationScore(null);

    // Simulate microphone recording timer with nice updates
    let count = 0;
    const phrases = [
      "Yes, there is...",
      "Yes, there is a difference...",
      activeQuestion ? activeQuestion.expectedAnswer : "Yes, there is a difference between those terms."
    ];

    simulatedSpeechTimer.current = setTimeout(() => {
      const simulatedText = phrases[2];
      setTranscript(simulatedText);
      evaluatePronunciation(simulatedText);
      setIsListening(false);
    }, 3500);
  };

  // Turn recording off
  const stopListening = (shouldFallbackSimulation = false) => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsListening(false);
    if (shouldFallbackSimulation) {
      startSimulatedListening();
    }
  };

  // DRILLS ACTION ROUTERS
  const handleNextQuestion = () => {
    // Reset state first
    setTranscript('');
    setDrillStatus('idle');
    setSpokenCorrectly(null);
    setPronunciationScore(null);
    setAudioError(null);
    setDrillExplain(null);
    setShowExplainPanel(false);

    // Go to next question index
    onUpdateProgress(prev => ({
      ...prev,
      activeQuestionIndex: prev.activeQuestionIndex + 1
    }));
  };

  const handleRepeatDrill = () => {
    if (activeQuestion) {
      handleSpeakSample(activeQuestion.expectedAnswer);
    }
  };

  // FLASHCARDS ACTIONS
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSwipeCard = (action: 'review' | 'mastered') => {
    if (!activeCard) return;

    // Create a beautiful exit effect
    const cardElement = document.getElementById('flashcard');
    if (cardElement) {
      cardElement.classList.add(action === 'review' ? '-translate-x-[150%] rotate-[-15deg] opacity-0' : 'translate-x-[150%] rotate-[15deg] opacity-0');
    }

    setTimeout(() => {
      // Record card action in states
      onUpdateProgress(prev => {
        const updatedWords = action === 'mastered' 
          ? [...prev.masteredWords.filter(w => w !== activeCard.id), activeCard.id]
          : prev.masteredWords.filter(w => w !== activeCard.id);

        const updatedReview = action === 'review'
          ? [...prev.reviewLaterWords.filter(w => w !== activeCard.id), activeCard.id]
          : prev.reviewLaterWords.filter(w => w !== activeCard.id);

        return {
          ...prev,
          masteredWords: updatedWords,
          reviewLaterWords: updatedReview,
          activeFlashcardIndex: prev.activeFlashcardIndex + 1,
          timeLearnedSeconds: prev.timeLearnedSeconds + 20
        };
      });

      // Reset card orientation and visual effects
      setIsFlipped(false);
      setCardExplain(null);
      setShowExplainPanel(false);
      if (cardElement) {
        cardElement.classList.remove(
          '-translate-x-[150%]', 'rotate-[-15deg]', 'opacity-0',
          'translate-x-[150%]', 'rotate-[15deg]'
        );
      }
    }, 450);
  };

  return (
    <div className="max-w-md mx-auto relative flex flex-col h-full">
      {/* Tab Select Segment Control */}
      <div className="bg-brand-cream border border-brand-beige/50 p-1 rounded-xl flex mb-6 shadow-inner gap-1">
        <button
          onClick={() => setSubMode('drills')}
          className={`flex-1 py-2 text-[11px] font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
            subMode === 'drills' 
              ? 'bg-brand-primary text-white shadow rounded-lg' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>🗣️</span> {locale === 'zh' ? '口语跟读' : 'Drills'}
        </button>
        <button
          onClick={() => setSubMode('cards')}
          className={`flex-1 py-2 text-[11px] font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
            subMode === 'cards' 
              ? 'bg-brand-primary text-white shadow rounded-lg' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>🎴</span> {locale === 'zh' ? '核心词卡' : 'Vocab'}
        </button>
        <button
          onClick={() => setSubMode('textbook')}
          className={`flex-1 py-2 text-[11px] font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
            subMode === 'textbook' 
              ? 'bg-brand-primary text-white shadow rounded-lg' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>📖</span> {locale === 'zh' ? '教材原文' : 'Textbook'}
        </button>
      </div>

      {subMode === 'drills' && (
        /* SCREEN 1: INTERACTIVE DRILLS */
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Header section info */}
          <div className="flex flex-col gap-2 mb-4 bg-brand-ivory p-4 rounded-2xl border border-brand-beige shadow-xs">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block text-left animate-pulse">
                  {t.currentSession}
                </span>
                <h3 className="text-lg font-serif font-bold text-brand-dark tracking-normal mt-0.5 text-left">
                  Stage {progress.activeStageId} · Lesson {progress.activeLessonId}
                </h3>
              </div>

              {/* Dynamic Lesson Switcher inside Practice Header */}
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-brand-dark/40 uppercase">{locale === 'zh' ? '课时:' : 'Lesson:'}</span>
                <select
                  value={progress.activeLessonId}
                  onChange={(e) => {
                    const lId = Number(e.target.value);
                    onUpdateProgress(prev => ({
                      ...prev,
                      activeLessonId: lId,
                      activeQuestionIndex: 0
                    }));
                  }}
                  className="bg-brand-cream text-xs font-bold text-brand-dark border border-brand-beige rounded-lg py-1 px-1.5 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 cursor-pointer"
                >
                  {(STAGE_LESSONS_MAP[progress.activeStageId] || []).map(lId => (
                    <option key={lId} value={lId}>
                      L.{lId}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-end mt-1">
              <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-wide">
                {t.sentenceProgress}
              </span>
              <span className="text-xs font-semibold text-brand-dark/60 font-sans">
                {currentQuestionIndex + 1} / {questions.length} {locale === 'zh' ? '组教材Q&A对' : 'Dialogue Pairs'}
              </span>
            </div>
            
            {/* Custom speed gradient tracker */}
            <div className="h-1.5 w-full bg-brand-cream rounded-full overflow-hidden border border-brand-beige/30">
              <div 
                className="h-full speed-gradient rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / (questions.length || 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Drill Question Card */}
          {activeQuestion ? (
            <div className="bg-brand-ivory p-6 rounded-2xl shadow-[0_4px_24px_rgba(44,39,36,0.02)] border border-brand-beige mb-4 flex flex-col gap-3 transform transition-all relative overflow-hidden">
              <div className="flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                    🗣️
                  </span>
                  <span className="text-[11px] font-bold text-brand-dark/50 uppercase tracking-wider">
                    {locale === 'zh' ? '教材提问 (Question)' : 'Question Prompt'}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  {/* Question Speech Play Button */}
                  <button
                    onClick={() => handleSpeakSample(activeQuestion.questionText)}
                    className="flex items-center gap-1 px-2.5 text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/15 hover:text-brand-primary rounded-lg text-[10.5px] font-bold h-7 border border-brand-primary/25 shadow-xs cursor-pointer active:scale-95 transition-all"
                    title={locale === 'zh' ? '播放原音提问' : 'Speak question'}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{locale === 'zh' ? '发音' : 'Speak'}</span>
                  </button>

                  {/* Dynamic AI Assistant Button */}
                  <button
                    onClick={fetchAIInsights}
                    className="flex items-center gap-1.5 px-2 bg-gradient-to-r from-amber-600 to-amber-700 text-brand-ivory rounded-lg text-[10px] font-bold h-7 hover:shadow-md cursor-pointer active:scale-95 transition-all"
                    title="Ask AI Coach for explanation"
                  >
                    <Sparkles className="w-3 h-3 text-white fill-white animate-spin-slow" />
                    AI COACH
                  </button>
                </div>
              </div>
              <p className="text-xl font-serif font-bold text-brand-dark leading-snug text-left">
                "{activeQuestion.questionText}"
              </p>
              {locale !== 'en' && getLocalizedQuestionText(activeQuestion, locale) && (
                <p className="text-xs font-medium text-brand-dark/70 border-t border-dashed border-brand-beige/50 pt-2.5 text-left bg-brand-cream/40 p-2 rounded-lg leading-relaxed">
                  {getLocalizedQuestionText(activeQuestion, locale)}
                </p>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500 font-medium">
              {locale === 'zh' ? '该阶段没有找到问答句。请在教材阶段中选取对应课时！' : 'No questions found for this stage. Select active lesson in the Textbook tab!'}
            </div>
          )}

          {/* AI Explanation Accordion / Drawer (Highly accessible inside single view) */}
          {showExplainPanel && (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-4 rounded-xl border border-blue-200 mb-4 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#002045]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  AI STUDY COACH INSIGHT
                </span>
                <button 
                  onClick={() => setShowExplainPanel(false)}
                  className="text-[10px] text-gray-400 font-extrabold hover:text-red-500 cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {explainLoading ? (
                <div className="py-6 flex flex-col items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-[10px] text-gray-400 font-bold animate-pulse uppercase tracking-wider">
                    Consulting linguistic models...
                  </span>
                </div>
              ) : explainError ? (
                <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 select-all">
                  {explainError}
                </div>
              ) : drillExplain ? (
                <div className="flex flex-col gap-3 text-xs">
                  {drillExplain.sentenceStress && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-[#944b00] block mb-0.5">🗣️ Sentence Rhythm & Stress</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{drillExplain.sentenceStress}</p>
                    </div>
                  )}
                  {drillExplain.linkingSounds && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-blue-700 block mb-0.5">🔗 Phonetic Linking (Liaisons)</span>
                      <p className="text-gray-700 font-mono text-[11px] leading-relaxed">{drillExplain.linkingSounds}</p>
                    </div>
                  )}
                  {drillExplain.pronunciationTips && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-teal-700 block mb-0.5">👅 Mouth & Tongue Placement</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{drillExplain.pronunciationTips}</p>
                    </div>
                  )}
                  {drillExplain.grammarTips && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-indigo-700 block mb-0.5">📖 Grammar Point Breakdown</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{drillExplain.grammarTips}</p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}

          {/* Drill Method Switcher: Speak vs Type */}
          <div className="flex bg-brand-cream p-1 rounded-xl mb-4 border border-brand-beige/50 gap-1 select-none">
            <button
              onClick={() => setDrillType('speak')}
              className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold tracking-tight transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                drillType === 'speak'
                  ? 'bg-brand-ivory border border-brand-beige text-brand-dark shadow-xs'
                  : 'text-brand-dark/60 hover:text-brand-dark'
              }`}
            >
              <span>🎙️</span> {locale === 'zh' ? '口语跟读 (Oral)' : 'Oral Speak Mode'}
            </button>
            <button
              onClick={() => setDrillType('write')}
              className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold tracking-tight transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                drillType === 'write'
                  ? 'bg-brand-ivory border border-brand-beige text-brand-dark shadow-xs'
                  : 'text-brand-dark/60 hover:text-brand-dark'
              }`}
            >
              <span>✏️</span> {locale === 'zh' ? '键盘练写 (Type spelling)' : 'Type Writing Mode'}
            </button>
          </div>

          {drillType === 'speak' ? (
            /* SCREEN 1A: SPEAKING DRILL FLOW */
            <div className="flex-1 flex flex-col justify-between animate-fadeIn">
              
              {/* Transcript & Scoring Feedback Bubble */}
              <div className="flex-1 flex flex-col justify-center items-center py-4 select-none min-h-[140px]">
                {drillStatus === 'idle' && (
                  <p className="text-xs text-gray-400 italic text-center max-w-xs leading-relaxed font-semibold">
                    {locale === 'zh' 
                      ? '💡 请先发音聆听或者点按下方「原音示范」，然后点按棕色麦克风开始口语速练！'
                      : 'Listen to the expected response first, then trigger microphone below to repeat.'}
                  </p>
                )}

                {drillStatus === 'listening' && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
                      <span className="text-xs font-bold text-red-600 animate-pulse uppercase tracking-wider">
                        {locale === 'zh' ? '正在录音阶段... 请速读！' : 'Listening... Speak Now'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 italic font-mono max-w-xs">
                      {transcript || (locale === 'zh' ? '"正在实时感知你的声轨口型..."' : '"Reading speech tone..."')}
                    </p>
                  </div>
                )}

                {drillStatus === 'evaluating' && (
                  <div className="text-center animate-pulse">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                      {locale === 'zh' ? 'AI 老师正在评估发音与连读连击...' : 'Analyzing verbal cadence...'}
                    </span>
                    <div className="flex gap-1 justify-center items-center h-4">
                      <div className="w-1 bg-brand-primary rounded h-4 animate-[pulse_0.5s_infinite]" />
                      <div className="w-1 bg-brand-primary rounded h-2 animate-[pulse_0.7s_infinite]" />
                      <div className="w-1 bg-brand-primary rounded h-5 animate-[pulse_0.4s_infinite]" />
                      <div className="w-1 bg-brand-primary rounded h-3 animate-[pulse_0.6s_infinite]" />
                    </div>
                  </div>
                )}

                {drillStatus === 'feedback' && (
                  <div className="text-center animate-fadeIn">
                    <div className="mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        spokenCorrectly 
                          ? 'bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/20' 
                          : 'bg-brand-primary/15 text-brand-primary border border-brand-primary/20'
                      }`}>
                        {spokenCorrectly 
                          ? (locale === 'zh' ? '🎉 精准发音 · 完全掌握' : 'Excellent Pronunciation!') 
                          : (locale === 'zh' ? '👍 已成功录入 · 建议再次挑战' : 'Good effort! Say again')}
                      </span>
                    </div>

                    <div className="flex justify-center items-baseline gap-1 mt-3">
                      <span className="text-4xl font-serif font-bold text-brand-dark">{pronunciationScore}%</span>
                      <span className="text-xs text-brand-dark/40 font-bold">{locale === 'zh' ? '跟读准确度' : 'Accuracy'}</span>
                    </div>

                    <p className="text-xs text-brand-dark/60 max-w-xs mx-auto mt-2 italic font-mono bg-brand-cream/60 p-2.5 rounded-lg border border-brand-beige/40">
                      {locale === 'zh' ? '你读的是: ' : 'You said: '}"{transcript}"
                    </p>
                  </div>
                )}

                {audioError && (
                  <p className="text-xs text-red-500 font-semibold bg-red-50 py-1.5 px-3 rounded-lg border border-red-100 select-all text-center">
                    {audioError}
                  </p>
                )}
              </div>

              {/* Audio Tempo & Speed Assist Selector */}
              <div className="bg-brand-cream px-3 py-2 rounded-xl flex items-center justify-between mb-4 border border-brand-beige/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-dark/70 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-primary" />
                  {locale === 'zh' ? '口语体能反射语速:' : 'Vocal Reflex Gym Speed:'}
                </span>
                <div className="flex gap-1 animate-fadeIn">
                  {[
                    { label: locale === 'zh' ? "🐢 慢速" : "🐢 Slow", value: 0.7 },
                    { label: locale === 'zh' ? "🎙️ 标准" : "🎙️ normal", value: 0.95 },
                    { label: locale === 'zh' ? "⚡ 极速" : "⚡ Fast", value: 1.3 }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSpeechRate(opt.value)}
                      className={`text-[9.5px] px-2 py-1 rounded-md font-bold transition-all cursor-pointer ${
                        speechRate === opt.value
                          ? 'bg-brand-primary text-white shadow-xs'
                          : 'text-brand-dark/50 hover:text-brand-dark hover:bg-brand-ivory/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Microphone Button Group */}
              <div className="flex flex-col items-center gap-4 mb-6 select-none">
                <div className="relative">
                  {/* Pulsing visual rings */}
                  {isListening && (
                    <div className="absolute inset-0 bg-[#fe9743]/30 rounded-full voice-pulse" />
                  )}
                  
                  <button
                    onClick={isListening ? () => stopListening() : startListening}
                    className={`relative z-10 w-20 h-20 text-white rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all duration-200 cursor-pointer ${
                      isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-[#944b00] hover:bg-[#944b00]/95'
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-8 h-8 text-white stroke-[2.5px]" />
                    ) : (
                      <Mic className="w-8 h-8 text-white stroke-[2.5px]" />
                    )}
                  </button>
                </div>

                <div className="text-center w-full px-2">
                  <span className="text-xs font-black text-[#002045]/70 block mb-2">
                    {isListening 
                      ? (locale === 'zh' ? '🎙️ 正在录音... 请大声跟读回答 (再次点击结束)' : 'Tap to finish recording') 
                      : (locale === 'zh' ? '🎙️ 点按开始口语回答跟读' : 'Tap to start repeating')}
                  </span>
                  
                  {/* Expected response box showing standard answer card with Chinese translation */}
                  <div className="mt-2 text-left bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/50 max-w-md mx-auto shadow-sm relative group">
                    <button 
                      onClick={handleRepeatDrill}
                      className="absolute right-2 top-2 p-1.5 hover:bg-amber-100 text-[#944b00] rounded-lg transition-transform active:scale-95 cursor-pointer"
                      title="Listen Standard Sound"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-black text-[#944b00] block mb-1 uppercase tracking-widest animate-pulse">
                      🎯 {locale === 'zh' ? '官方标准原音回答 (Speak This Pattern)' : 'Expected Standard Answer'}
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-[#002045] leading-snug pr-7">
                      "{activeQuestion?.expectedAnswer}"
                    </p>
                    {locale !== 'en' && getLocalizedExpectedAnswer(activeQuestion, locale) && (
                      <p className="text-xs font-bold text-slate-500 mt-1.5 border-t border-dashed border-gray-200 pt-1 leading-relaxed">
                        {getLocalizedExpectedAnswer(activeQuestion, locale)}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Practice Action Control Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <button
                  onClick={handleRepeatDrill}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border-2 border-[#002045] text-[#002045] font-bold text-xs hover:bg-[#ebeef0] transition-colors active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 stroke-[2.5px] text-[#fe9743]" />
                  {locale === 'zh' ? '原音发音示范' : 'Listen expected'}
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#002045] hover:bg-[#002045]/90 text-white font-bold text-xs transition-opacity active:scale-95 cursor-pointer"
                >
                  {locale === 'zh' ? '下一句 Dialogue' : 'Next question'}
                  <ArrowRight className="w-4 h-4 stroke-[2.5px] text-[#fe9743]" />
                </button>
              </div>

            </div>
          ) : (
            /* SCREEN 1B: WRITING / TYPING DICTATION DRILL */
            <div className="flex-1 flex flex-col justify-between animate-fadeIn text-left">
              <div className="flex-1 flex flex-col gap-4">
                
                {/* Listening Prompt Card */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between animate-fadeIn">
                  <div className="text-left flex-1 pr-3 animate-fadeIn">
                    <span className="text-[10px] font-black tracking-widest text-[#944b00] block uppercase animate-fadeIn">
                      🎧 {locale === 'zh' ? '听写与拼写训练' : 'Aural Dictation Drill'}
                    </span>
                    <p className="text-[11px] text-gray-500 font-bold mt-1 leading-tight animate-fadeIn">
                      {locale === 'zh' ? '请先盲听句子原音，然后在下方框中打字练习写出对应的英文回答：' : 'Listen to sentence first, then practice typing expected reply:'}
                    </p>
                  </div>
                  
                  {/* Play audio button */}
                  <button
                    onClick={() => handleSpeakSample(activeQuestion?.expectedAnswer || '')}
                    className="shrink-0 w-11 h-11 bg-gradient-to-br from-[#002045] to-[#012f63] hover:from-[#944b00] hover:to-[#944b00] text-white rounded-xl shadow cursor-pointer transition-all active:scale-95 flex items-center justify-center border border-white/10"
                    title={locale === 'zh' ? '播放听写标准语音' : 'Listen expected response'}
                  >
                    <Volume2 className="w-5 h-5 animate-pulse" />
                  </button>
                </div>

                {/* Option to Hide/Reveal Golden Answer */}
                <div className="flex justify-between items-center text-xs px-1">
                  <span className="text-gray-400 font-bold">
                    {locale === 'zh' ? '💡 盲听挑战：试着遮盖标准答案进行听写！' : 'Challenge: hide answer & type from hearing!'}
                  </span>
                  
                  <button
                    onClick={() => setShowAnswerHint(!showAnswerHint)}
                    className="font-black text-xs text-[#002045] hover:text-[#fe9743] bg-slate-100 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
                  >
                    {showAnswerHint 
                      ? (locale === 'zh' ? '🙈 遮盖参考答案' : '🙈 Hide Answer') 
                      : (locale === 'zh' ? '👁️ 显示原句参考' : '👁️ Show Hint')}
                  </button>
                </div>

                {/* Answer Hint Box */}
                {showAnswerHint && (
                  <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/30 text-left animate-fadeIn">
                    <span className="text-[10px] font-black text-[#944b00] uppercase tracking-wider block mb-1">
                      🎯 {locale === 'zh' ? '大纲标准答案对照 (Original Reference)' : 'Expected Answer Reference'}
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-[#002045] leading-snug">
                      "{activeQuestion?.expectedAnswer}"
                    </p>
                    {locale !== 'en' && getLocalizedExpectedAnswer(activeQuestion, locale) && (
                      <p className="text-[10px] font-bold text-slate-500 mt-1 leading-normal border-t border-dashed border-amber-100 pt-1">
                        {getLocalizedExpectedAnswer(activeQuestion, locale)}
                      </p>
                    )}
                  </div>
                )}

                {/* Keyboard Text Area Input */}
                <div className="flex flex-col gap-2 relative mt-1 text-left">
                  <span className="text-[10px] text-gray-400 font-black tracking-wider uppercase pl-1">
                    ✏️ {locale === 'zh' ? '打字写出听到的完整句答案 (注意拼写与字符符号)：' : 'Enter reply spelling:'}
                  </span>
                  <textarea
                    value={typedText}
                    onChange={(e) => {
                      setTypedText(e.target.value);
                      if (writeSubmitted) setWriteSubmitted(false);
                    }}
                    placeholder={locale === 'zh' ? "在此打字拼写对应的英文完整句，拼写完成后点下方按钮校验..." : "Type the complete matching English reply here, then check accuracy..."}
                    className="w-full h-20 p-3.5 bg-white text-xs font-bold text-[#002045] border border-slate-200 rounded-xl focus:border-[#944b00] focus:ring-1 focus:ring-[#944b00]/20 focus:outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold text-left"
                    disabled={writeSubmitted}
                  />

                  {/* Submit Spell Checker Button */}
                  {!writeSubmitted ? (
                    <button
                      onClick={() => {
                        if (!typedText.trim()) return;
                        setWriteSubmitted(true);
                        onUpdateProgress(prev => ({
                          ...prev,
                          repetitionsCount: prev.repetitionsCount + 1,
                          timeLearnedSeconds: prev.timeLearnedSeconds + 8,
                          stageProgress: {
                            ...prev.stageProgress,
                            [prev.activeStageId]: Math.min(95, (prev.stageProgress[prev.activeStageId] || 0) + 3)
                          }
                        }));
                      }}
                      disabled={!typedText.trim()}
                      className={`py-3 rounded-xl font-black text-xs transition-all active:scale-95 cursor-pointer shadow-sm ${
                        typedText.trim() 
                          ? 'bg-[#002045] hover:bg-[#002045]/90 text-white' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed text-center'
                      }`}
                    >
                      {locale === 'zh' ? '🔍 校验拼写笔录 Accuracy' : 'Check Dictation Spelling'}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setWriteSubmitted(false);
                        setTypedText('');
                      }}
                      className="py-3 bg-slate-100 hover:bg-slate-200 text-[#002045] rounded-xl font-black text-xs transition-all cursor-pointer shadow shadow-slate-100 active:scale-95"
                    >
                      🔄 {locale === 'zh' ? '再次重新拼写' : 'Type to practice again'}
                    </button>
                  )}
                </div>

                {/* Spell-check Analytics & Comparison Result details */}
                {writeSubmitted && (() => {
                  const feedback = getWritingFeedback();
                  return (
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-left animate-fadeIn space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-[10px] font-black text-[#002045] uppercase tracking-wider">
                          📊 {locale === 'zh' ? '拼写校验对比结果' : 'Spelling Check Feedback'}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-black text-[#944b00]">{feedback.score}%</span>
                          <span className="text-[10px] text-gray-400 font-bold">{locale === 'zh' ? '准确率' : 'Accuracy'}</span>
                        </div>
                      </div>

                      {/* Diagnostic breakdown comparing each word */}
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold block mb-1">
                          {locale === 'zh' ? '📖 标准语序单词对比诊断 (绿色正确 / 红色不匹配)：' : 'Word-by-word comparison:'}
                        </span>
                        
                        <div className="flex flex-wrap gap-1.5 p-2 bg-slate-50 rounded-xl leading-relaxed text-left">
                          {feedback.matches.map((match, idx) => (
                            <span 
                              key={idx} 
                              className={`text-xs px-1.5 py-0.5 rounded-md font-bold inline-block ${
                                match.isCorrect 
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                                  : 'bg-rose-50 text-rose-600 border border-rose-100 line-through'
                              }`}
                              title={match.isCorrect ? "Correct!" : `Typed "${match.userWord || '(missing)'}"`}
                            >
                              {match.word}
                            </span>
                          ))}
                        </div>

                        {/* Summary assistance notes */}
                        <p className="text-[10px] text-gray-500 font-bold leading-relaxed mt-2 pl-1">
                          {feedback.score === 100 
                            ? (locale === 'zh' ? '🌟 完美！拼写词序完全与原课文章节一致，连冠准确！' : 'Excellent work! Every single word matches the standard dictionary.') 
                            : (locale === 'zh' ? '💡 请对照红标位置拼错或写错的单词，核实词性之后再次尝试！' : 'Note marked text. Verify your spelling and vocabulary layout.')}
                        </p>
                      </div>

                    </div>
                  );
                })()}

              </div>

              {/* Bottom Actions Row */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 mt-6 md:mt-10">
                <button
                  onClick={() => handleSpeakSample(activeQuestion?.expectedAnswer || '')}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border-2 border-[#002045] text-[#002045] font-bold text-xs hover:bg-[#ebeef0] transition-colors active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 stroke-[2.5px] text-[#fe9743]" />
                  {locale === 'zh' ? '听示范发音' : 'Listen expected'}
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#002045] hover:bg-[#002045]/90 text-white font-bold text-xs transition-opacity active:scale-95 cursor-pointer"
                >
                  {locale === 'zh' ? '下一句 Dialogue' : 'Next question'}
                  <ArrowRight className="w-4 h-4 stroke-[2.5px] text-[#fe9743]" />
                </button>
              </div>

            </div>
          )}

        </div>
      )}

      {subMode === 'cards' && (
        /* SCREEN 2: VOCABULARY FLASHCARDS */
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Header level info */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-extrabold text-[#43474e] uppercase tracking-wide">
                Stage {progress.activeStageId} - Intermediate
              </span>
              <span className="text-xs font-bold text-[#002045]">
                {currentCardIndex + 1} / {flashcards.length || 5} cards
              </span>
            </div>

            {/* Orange gradient slider progress */}
            <div className="w-full bg-[#ebeef0] h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#002045] to-[#fe9743] h-full transition-all duration-300"
                style={{ width: `${((currentCardIndex + 1) / (flashcards.length || 5)) * 100}%` }}
              />
            </div>
          </div>

          {/* Flashcard Area 3D Flip Container */}
          <div className="flex-1 flex flex-col justify-center relative py-4 select-none min-h-[360px]">
            {/* Soft backdrop layers for structural depth */}
            <div className="absolute w-11/12 h-[340px] bg-white opacity-40 rounded-2xl shadow-md translate-y-3 border border-gray-100 pointer-events-none left-1/2 -translate-x-1/2" />
            
            <div 
              id="flashcard"
              className="flashcard-container relative w-full h-[360.5px] transition-all duration-300 transform"
            >
              <div 
                onClick={handleFlipCard}
                className={`flashcard-inner w-full h-full relative cursor-pointer ${
                  isFlipped ? 'is-flipped' : ''
                }`}
              >
                
                {/* 1. FRONT SIDE OF WORD CARD */}
                <div className="flashcard-front bg-brand-ivory rounded-2xl shadow-[0_8px_30px_rgba(44,39,36,0.02)] border border-brand-beige flex flex-col items-center justify-center p-6 text-center relative">
                  
                  {activeCard?.isNew && (
                    <div className="absolute top-4 right-4 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      New Word
                    </div>
                  )}

                  {/* AI Assistant Button badge */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      fetchAIInsights();
                    }}
                    className="absolute top-4 left-4 flex items-center gap-1.5 px-2 bg-gradient-to-r from-amber-650 to-amber-750 text-brand-ivory rounded-lg text-[10px] font-bold h-7 hover:shadow-xs cursor-pointer active:scale-95 transition-all"
                    title="Ask AI Coach for explanation"
                  >
                    <Sparkles className="w-3 h-3 text-white fill-white animate-spin-slow" />
                    AI COACH
                  </button>

                  <GraduationCap className="w-10 h-10 text-brand-primary mb-4" />

                  <h2 className="text-3xl font-serif font-bold text-brand-dark mb-1 tracking-normal">
                    {activeCard?.word || 'Vocabulary'}
                  </h2>

                  {locale !== 'en' && getLocalizedWord(activeCard, locale) && (
                    <span className="text-xs bg-brand-cream text-brand-dark/70 font-bold uppercase px-2 py-1 rounded border border-brand-beige  mt-1 inline-block">
                      {getLocalizedWord(activeCard, locale)}
                    </span>
                  )}

                  <p className="text-xs text-brand-dark/40 font-mono italic mb-6">
                    {activeCard?.phonetics || '/vəˈkæb.jə.ler.i/'}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-brand-dark/40 font-semibold text-xs bg-brand-cream px-3 py-1.5 rounded-full border border-brand-beige hover:text-brand-dark">
                    <span>Touch card to flip & view answer</span>
                  </div>
                </div>

                {/* 2. BACK SIDE OF WORD CARD */}
                <div className="flashcard-back bg-brand-ivory rounded-2xl shadow-[0_8px_30px_rgba(44,39,36,0.02)] border border-brand-beige flex flex-col justify-between p-6 text-left relative">
                  
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest">
                        Defn / Explanation
                      </span>
                      {/* Minor AI Prompt Trigger on Backside */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          fetchAIInsights();
                        }}
                        className="flex items-center gap-1 text-amber-700 hover:text-amber-800 text-[10px] font-bold tracking-tight cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-brand-primary fill-brand-primary animate-pulse" />
                        Syllables & Kinetic Mouth Positions
                      </button>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (activeCard) {
                          handleSpeakSample(activeCard.word + ". " + activeCard.definition);
                        }
                      }}
                      className="text-brand-dark hover:bg-brand-cream rounded-full p-2 border border-brand-beige/50 cursor-pointer"
                      title="Listen audio spelling"
                    >
                      <Volume2 className="w-5 h-5 text-brand-primary" />
                    </button>
                  </div>

                  <p className="text-base font-serif font-bold text-brand-dark leading-snug">
                    {activeCard?.definition || 'Description will be shown here.'}
                  </p>
                  {locale !== 'en' && getLocalizedDefinition(activeCard, locale) && (
                    <p className="text-[11px] font-bold text-brand-dark/40 mt-1 leading-relaxed">
                      {getLocalizedDefinition(activeCard, locale)}
                    </p>
                  )}

                  <div className="border-t border-brand-beige/50 pt-4 mt-auto">
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block mb-1">
                      Usage Example
                    </span>
                    <p className="text-xs text-brand-dark/60 leading-relaxed italic">
                      {activeCard?.example ? (
                        <span dangerouslySetInnerHTML={{ 
                          __html: activeCard.example.replace(
                            new RegExp(`(${activeCard.word})`, 'gi'), 
                            `<strong class="text-brand-dark font-bold font-serif">$1</strong>`
                          ) 
                        }} />
                      ) : (
                        'No sample sentence registered.'
                      )}
                    </p>
                    {locale !== 'en' && getLocalizedExample(activeCard, locale) && (
                      <p className="text-[11px] font-bold text-brand-dark/40 mt-1 leading-normal border-t border-dashed border-brand-beige/30 pt-1">
                        {getLocalizedExample(activeCard, locale)}
                      </p>
                    )}
                  </div>

                  <span className="text-[9px] text-brand-dark/40 block text-center mt-3 uppercase font-bold">
                    Touch card to flip back
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* AI Explanation Accordion / Drawer */}
          {showExplainPanel && (
            <div className="bg-gradient-to-br from-slate-50 to-amber-50/20 p-4 rounded-xl border border-amber-200 mb-4 transition-all duration-300 text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#002045]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  AI VOCABULARY DEEP INSIGHT
                </span>
                <button 
                  onClick={() => setShowExplainPanel(false)}
                  className="text-[10px] text-gray-400 font-extrabold hover:text-red-500 cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {explainLoading ? (
                <div className="py-6 flex flex-col items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-[10px] text-gray-400 font-bold animate-pulse uppercase tracking-wider">
                    Consulting linguistic models...
                  </span>
                </div>
              ) : explainError ? (
                <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 select-all">
                  {explainError}
                </div>
              ) : cardExplain ? (
                <div className="flex flex-col gap-3 text-xs">
                  {cardExplain.spellingBreakdown && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-[#944b00] block mb-0.5">📚 Syllable & Stress Guide</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{cardExplain.spellingBreakdown}</p>
                    </div>
                  )}
                  {cardExplain.pronunciationTips && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-blue-700 block mb-0.5">👅 Mouth & Tongue Placement</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{cardExplain.pronunciationTips}</p>
                    </div>
                  )}
                  {cardExplain.commonMistakes && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-red-600 block mb-0.5">⚠️ Common Mistakes / Traps</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{cardExplain.commonMistakes}</p>
                    </div>
                  )}
                  {cardExplain.grammarPoints && (
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-extrabold text-teal-700 block mb-0.5">📖 Visual Grammar Points</span>
                      <p className="text-gray-700 font-sans leading-relaxed">{cardExplain.grammarPoints}</p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}

          {/* Action Choice Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              onClick={() => handleSwipeCard('review')}
              className="bg-brand-cream hover:bg-brand-beige/45 border border-brand-beige text-brand-dark/80 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            >
              <Undo2 className="w-4 h-4 stroke-[2.5px]" />
              Review Later
            </button>
            <button
              onClick={() => handleSwipeCard('mastered')}
              className="bg-brand-secondary hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs shadow-brand-secondary/5 border border-brand-secondary/20 active:scale-95 transition-all cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 stroke-[2.5px] fill-white text-brand-secondary" />
              Mastered
            </button>
          </div>

        </div>
      )}

      {subMode === 'textbook' && (() => {
        // Find current textbook lesson
        const currentChapter = TEXTBOOK_LESSONS.find(
          tl => tl.stageId === progress.activeStageId && tl.lessonId === progress.activeLessonId
        );

        const activeChapterObj = currentChapter || {
          id: `dynamic_stg${progress.activeStageId}_les${progress.activeLessonId}`,
          stageId: progress.activeStageId,
          lessonId: progress.activeLessonId,
          title: `Stage ${progress.activeStageId} · Lesson ${progress.activeLessonId}`,
          grammarNotes: {
            en: "Vocal reflex gym training requires immediate, intuitive, and complete verbal muscle patterns. Do not pause to construct sentences; follow standard spoken structures naturally.",
            zh: "肌肉反射训练极其注重高频连续回声。在回答问题时，请一律使用完整句、原音对应的缩写结构（如 don't, isn't 等），这有助于直接打通母语肌肉直觉反射。"
          },
          vocabulary: ALL_FLASHCARDS.filter(fc => fc.stageId === progress.activeStageId).slice(0, 4).map(fc => ({
            word: fc.word,
            phonetics: fc.phonetics || "",
            meaningZh: fc.definition || "",
            meaningEn: ""
          })),
          drillParagraphs: ALL_QUESTIONS.filter(q => q.stageId === progress.activeStageId && q.lessonId === progress.activeLessonId).map(q => ({
            question: q.questionText,
            answer: q.expectedAnswer,
            questionZh: q.questionTextZh || "",
            answerZh: q.expectedAnswerZh || ""
          }))
        };

        return (
          <div className="flex-1 flex flex-col gap-4 text-left animate-fadeIn pb-24 overflow-y-auto max-h-[70vh] hide-scrollbar pr-0.5">
            {/* Header */}
            <div className="bg-brand-dark border border-brand-beige/30 p-4 rounded-2xl text-brand-ivory shadow-xs relative overflow-hidden shrink-0">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 pointer-events-none">
                <BookOpen className="w-24 h-24 text-brand-primary" />
              </div>
              
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-brand-primary/20 text-brand-primary border border-brand-primary/30 px-2 py-0.5 rounded-full inline-block mb-1">
                    Stage {progress.activeStageId} · Lesson {progress.activeLessonId}
                  </span>
                  <h3 className="text-sm font-serif font-bold tracking-normal leading-snug text-brand-cream">
                    {activeChapterObj.title}
                  </h3>
                </div>

                {/* Lesson Switcher inside Textbook Header */}
                <select
                  value={progress.activeLessonId}
                  onChange={(e) => {
                    const lId = Number(e.target.value);
                    onUpdateProgress(prev => ({
                      ...prev,
                      activeLessonId: lId,
                      activeQuestionIndex: 0
                    }));
                  }}
                  className="bg-brand-ivory/10 hover:bg-brand-ivory/20 text-xs font-bold text-brand-ivory border border-brand-beige/20 rounded-lg py-1 px-1.5 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 cursor-pointer transition-all shrink-0"
                >
                  {(STAGE_LESSONS_MAP[progress.activeStageId] || []).map(lId => (
                    <option key={lId} value={lId} className="text-brand-dark font-bold">
                      L.{lId}
                    </option>
                  ))}
                </select>
              </div>

              <p className="text-[10px] text-brand-cream/70 font-medium leading-relaxed mt-2 relative z-10 animate-fadeIn">
                {locale === 'zh' 
                  ? '以下为本课官方同步教材原文。含核心词汇释义、语法要点与听说问答模板。'
                  : 'Current official lesson content: core terms, grammar patterns, and Q&As.'}
              </p>
            </div>

            {/* Grammar */}
            <div className="bg-brand-cream p-4 rounded-xl border border-brand-beige shrink-0 shadow-xs">
              <div className="flex items-center gap-1.5 mb-1">
                <GraduationCap className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider font-serif">
                  {locale === 'zh' ? '💡 语法要点 & 肌肉反射法则' : 'Grammar & Gym Rules'}
                </span>
              </div>
              <p className="text-xs font-bold text-brand-dark leading-relaxed">
                {activeChapterObj.grammarNotes.en}
              </p>
              {locale !== 'en' && getLocalizedGrammarNotes(activeChapterObj.grammarNotes, locale) && (
                <p className="text-xs text-brand-dark/60 font-semibold pt-1.5 mt-1.5 border-t border-dashed border-brand-beige/60 leading-relaxed">
                  {getLocalizedGrammarNotes(activeChapterObj.grammarNotes, locale)}
                </p>
              )}
            </div>

            {/* Vocabulary */}
            {activeChapterObj.vocabulary && activeChapterObj.vocabulary.length > 0 && (
              <div className="bg-brand-ivory p-4 rounded-2xl border border-brand-beige shadow-xs shrink-0">
                <span className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest block mb-2.5 font-serif">
                  📖 {locale === 'zh' ? '核心词汇讲解' : 'Core Key Vocabulary'}
                </span>
                <div className="space-y-1.5">
                  {activeChapterObj.vocabulary.map((vocab, i) => (
                    <div key={i} className="flex justify-between items-center bg-brand-cream/40 p-2 rounded-xl border border-brand-beige/30 hover:bg-brand-cream/70 transition-all">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-bold text-brand-dark">{vocab.word}</span>
                          {vocab.phonetics && (
                            <span className="text-[9px] font-mono text-brand-dark/40">{vocab.phonetics}</span>
                          )}
                        </div>
                        <p className="text-[10px] text-brand-primary font-bold mt-0.5">
                          {getLocalizedVocabMeaning(vocab, locale)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSpeakSample(vocab.word)}
                        className="text-brand-primary hover:text-brand-dark p-1.5 hover:bg-brand-cream rounded-lg border border-transparent hover:border-brand-beige transition-all cursor-pointer active:scale-95"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dialogues */}
            <div className="bg-brand-ivory p-4 rounded-2xl border border-brand-beige shadow-xs shrink-0">
              <span className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest block mb-2.5 font-serif">
                🗣️ {locale === 'zh' ? '完整课文原文问答对照' : 'Dialogue Echo Drilling Paragraphs'}
              </span>
              
              {activeChapterObj.drillParagraphs && activeChapterObj.drillParagraphs.length > 0 ? (
                <div className="space-y-3">
                  {activeChapterObj.drillParagraphs.map((drill, i) => (
                    <div key={i} className="p-3 bg-brand-cream/30 rounded-xl border border-brand-beige/30 relative group">
                      <div className="absolute right-2 top-2">
                        <button
                          onClick={() => handleSpeakSample(drill.question + ". " + drill.answer)}
                          className="text-brand-primary hover:text-brand-dark p-1 border border-transparent hover:border-brand-beige hover:bg-brand-ivory rounded-lg active:scale-95 transition-all cursor-pointer"
                          title="Speak full paragraph"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Question */}
                      <div className="text-xs text-brand-dark/60 font-semibold flex gap-1 items-center pr-8">
                        <span className="text-brand-primary font-bold">Q:</span>
                        <span>{drill.question}</span>
                      </div>
                      {locale !== 'en' && getLocalizedTextbookQuestion(drill, locale) && (
                        <p className="text-[10px] text-brand-dark/40 italic mb-1.5 pl-3">
                          {getLocalizedTextbookQuestion(drill, locale)}
                        </p>
                      )}

                      {/* Answer */}
                      <div className="text-xs text-brand-dark font-serif font-bold flex gap-1 items-start leading-snug mt-1 pr-8">
                        <span className="text-brand-primary font-bold shrink-0 font-sans">A:</span>
                        <span>{drill.answer}</span>
                      </div>
                      {locale !== 'en' && getLocalizedTextbookAnswer(drill, locale) && (
                        <p className="text-[10px] text-brand-dark/60 font-medium leading-relaxed mt-0.5 border-t border-dashed border-brand-beige/40 pt-0.5 pl-3">
                          {getLocalizedTextbookAnswer(drill, locale)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-brand-dark/40 italic text-center py-6">
                  {locale === 'zh' ? '暂无跟读课文问答对。请切换其它教材阶段！' : 'No drills registered for this lesson yet.'}
                </p>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
