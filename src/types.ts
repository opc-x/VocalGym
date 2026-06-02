export interface Question {
  id: string;
  stageId: number;
  lessonId: number;
  questionText: string;
  expectedAnswer: string;
  questionTextZh?: string;
  expectedAnswerZh?: string;
  questionTextJa?: string;
  expectedAnswerJa?: string;
  questionTextVi?: string;
  expectedAnswerVi?: string;
  questionTextTh?: string;
  expectedAnswerTh?: string;
  questionTextId?: string;
  expectedAnswerId?: string;
  questionTextHi?: string;
  expectedAnswerHi?: string;
}

export interface Flashcard {
  id: string;
  stageId: number;
  word: string;
  phonetics: string;
  definition: string;
  example: string;
  isNew?: boolean;
  wordZh?: string;
  definitionZh?: string;
  exampleZh?: string;
  wordJa?: string;
  definitionJa?: string;
  exampleJa?: string;
  wordVi?: string;
  definitionVi?: string;
  exampleVi?: string;
  wordTh?: string;
  definitionTh?: string;
  exampleTh?: string;
  wordId?: string;
  definitionId?: string;
  exampleId?: string;
  wordHi?: string;
  definitionHi?: string;
  exampleHi?: string;
}

export interface Stage {
  id: number;
  title: string;
  subtitle: string;
  progressPercent: number; // calculated or mocked from user progress
  locked: boolean;
  lessons: number[]; // lesson IDs inside this stage
  themeColor: string;
}

export interface UserStats {
  timeLearnedHours: number;
  totalRepetitions: number;
  dayStreak: number;
  weeklyActivity: number[]; // represents heights of bars (e.g. [50, 75, 100, 66, 33, 50, 25])
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name or emoji
  colorType: 'primary' | 'secondary' | 'locked';
  unlocked: boolean;
}

export interface UserProgress {
  activeStageId: number;
  activeLessonId: number;
  activeQuestionIndex: number;
  activeFlashcardIndex: number;
  completedStages: number[]; // Stage IDs that are 100% completed
  stageProgress: Record<number, number>; // Record of stageId -> progress percent
  masteredWords: string[]; // List of word IDs/words
  reviewLaterWords: string[]; // List of word IDs/words
  repetitionsCount: number;
  timeLearnedSeconds: number;
}

export interface TextbookLesson {
  id: string;
  stageId: number;
  lessonId: number;
  title: string;
  grammarNotes: {
    en: string;
    zh: string;
    ja?: string;
    vi?: string;
    th?: string;
    id?: string;
    hi?: string;
  };
  vocabulary: Array<{
    word: string;
    phonetics: string;
    meaningZh: string;
    meaningEn: string;
    meaningJa?: string;
    meaningVi?: string;
    meaningTh?: string;
    meaningId?: string;
    meaningHi?: string;
  }>;
  drillParagraphs: Array<{
    question: string;
    answer: string;
    questionZh: string;
    answerZh: string;
    questionJa?: string;
    answerJa?: string;
    questionVi?: string;
    answerVi?: string;
    questionTh?: string;
    answerTh?: string;
    questionId?: string;
    answerId?: string;
    questionHi?: string;
    answerHi?: string;
  }>;
}

export type SupportLocale = 'en' | 'zh' | 'ja' | 'vi' | 'th' | 'id' | 'hi';


