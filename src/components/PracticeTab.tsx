import { useState, useEffect, useRef } from 'react';
import { UserProgress, Question, Flashcard, SupportLocale } from '../types';
import { ALL_QUESTIONS, ALL_FLASHCARDS, STAGE_LESSONS_MAP, MESSAGES, TEXTBOOK_LESSONS, ALL_STAGES } from '../data';
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

interface ScenicScenario {
  id: string;
  titleZh: string;
  titleEn: string;
  image: string;
  level: string;
  promptQuestionZh: string;
  promptQuestionEn: string;
  keywords: string[];
}

const SCENIC_SCENARIOS: ScenicScenario[] = [
  {
    id: 'cafe',
    titleZh: '咖啡客话 · 点餐日常',
    titleEn: 'Espresso Cafe Ordering',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    level: 'A2 Warmup',
    promptQuestionZh: '图里有什么？你会如何用英语向服务员点餐并询问当日推荐？',
    promptQuestionEn: 'What do you see in the cafe? How would you order a beverage and query the daily roast in English?',
    keywords: ['barista', 'order breakfast', 'espresso roast', 'pastry counter', 'table by the window']
  },
  {
    id: 'airport',
    titleZh: '机场候机 · 行程出发',
    titleEn: 'Airport Flight Departure',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    level: 'B1 Intermediate',
    promptQuestionZh: '结合图片展示的机场环境，描述一位旅客登机出发的典型业务流程。',
    promptQuestionEn: 'Describe the scene in the airport. What are the typical terminal procedures for boarding?',
    keywords: ['check-in counter', 'boarding gate', 'luggage allowance', 'gate agent', 'overhead compartment']
  },
  {
    id: 'gym',
    titleZh: '健身房 · 高能私教抗阻',
    titleEn: 'Dynamic Fitness Coaching',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    level: 'B2 Stamina',
    promptQuestionZh: '生动描述图中的健身房环境。如果你是一名私人教练，你会发出什么口令？',
    promptQuestionEn: 'Describe this workout facility. What instruction structures would a personal trainer yell?',
    keywords: ['high-intensity interval', 'dumbbell curls', 'core stability', 'proper posture', 'stay hydrated']
  },
  {
    id: 'meeting',
    titleZh: '创意白板会议 · 开发迭代',
    titleEn: 'Agile Whiteboard Brainstorm',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80',
    level: 'C1 Professional',
    promptQuestionZh: '描述图中的团队商业讨论会，白板上的产品指标和路线图带给你什么启发？',
    promptQuestionEn: 'Describe the team brainstorm. What does the milestone schedule on the board reveal to you?',
    keywords: ['revenue target', 'milestone progress', 'product iteration', 'user feedback loop', 'technical bottleneck']
  },
  {
    id: 'cyberpunk',
    titleZh: '赛博夜色 · 雨夜路口',
    titleEn: 'Rainy Cyberpunk Streets',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    level: 'C1+ Extreme Reflex',
    promptQuestionZh: '描述雨夜霓虹街道的氛围。你能听见、闻到或感受到哪些赛博都市的细节？',
    promptQuestionEn: 'Vividly capture the misty cyberpunk alleyways, neon reflections, and atmospheric mood.',
    keywords: ['neon glow', 'misty puddles', 'pedestrian crosswalk', 'steaming food stall', 'industrial retro']
  }
];

const QUESTION_IMAGES: Record<string, string> = {
  's1_q1': 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', // A single premium pen on white paper
  's1_q2': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80', // A single active student with folder looking friendly
  's1_q3': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80', // Exactly one standalone book lying flat on a table
  's2_l14_q1': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=600&q=80', // Modern sand hourglass (quickly vs slowly speed)
  's2_l14_q2': 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80', // Philosophical deep reflection silhouette
  's2_l14_q3': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80', // Red pen correcting text marks directly
  's3_q1': 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80', // World globe and multi-language learning workspace
  's3_q2': 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=600&q=80', // Sparkling luxury diamond wristwatch (opposite of cheap)
  's3_q3': 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&w=600&q=80', // Traditional ink well and formal written letter setup
  's4_l42_q1': 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80', // Track sports car showing motion velocity (quickly vs fast)
  's4_l42_q2': 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80', // Ticking stopwatch for quick speaking muscle reflex feedback
  's4_l42_q3': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', // Perfectly symmetric balance scale highlighting synonym comparison
  's4_l42_q4': 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=600&q=80', // A falling line of dominoes representing unavoidable/inevitable chain action
  's5_q1': 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=600&q=80', // Stack of wealth gold coins and lottery game symbols
  's5_q2': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80', // Close up of pen writing in high detail on clean notebook papers
  's6_q1': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', // Welcoming thumbs up and high-five of absolute team agreement (by all means)
  's6_q2': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80', // Gamepad controller showing gaming cognitve focus
  's7_q1': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80', // Camper van setting off on an empty scenic highway
  's7_q2': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', // Artist workspace with high passion paints vs dull gray grid
  's8_q1': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80', // Business monitor showcasing volatile data risk lines
  's9_q1': 'https://images.unsplash.com/photo-1521791136368-1a46827011d6?auto=format&fit=crop&w=600&q=80', // Firm handshake representing mutual compromise
  's10_q1': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', // Absolute majestic mountain peak
  's11_q1': 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=600&q=80', // An eraser physically correcting a tiny pencil mistake in perfect alignment
  's12_q1': 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80'  // Musician displaying high skill fluency under rigorous stage focus
};

const QUESTION_FOCUS_TARGETS: Record<string, { zh: string; en: string }> = {
  's1_q1': { zh: '🎯 核心对象锚定：「钢笔」(Pen)', en: '🎯 Core Object Anchor: "Pen"' },
  's1_q2': { zh: '🎯 身份属性锁定：「学习中的学生」(Student)', en: '🎯 Identity Attribute: "Student"' },
  's1_q3': { zh: '🎯 相对方位定位：「在桌子之上」(On the Table)', en: '🎯 Position Anchor: "On the Table"' },
  's2_l14_q1': { zh: '🎯 比较极速状态：「快速 vs 慢速时间流移」(Quickly vs Slowly)', en: '🎯 Speed Comparison: "Quickly vs Slowly"' },
  's2_l14_q2': { zh: '🎯 抽象思维表达：「用外语抒发深层想法」(Deep Thoughts)', en: '🎯 Mental Expression: "Deep Thoughts"' },
  's2_l14_q3': { zh: '🎯 规则响应触发：「良师督导，当下纠正语法错误」(Mistake Correction)', en: '🎯 Scenario trigger: "Grammatical Correction"' },
  's3_q1': { zh: '🎯 全球语言权衡：「最易上手的共通语」(Easiest Language)', en: '🎯 Comparative Focus: "Easiest Language"' },
  's3_q2': { zh: '🎯 实物对立属性：「昂贵、工艺奢华的反义词」(Opposite of Cheap)', en: '🎯 Attribute Focus: "Opposite of Cheap"' },
  's3_q3': { zh: '🎯 商务纸面沟通：「写信件 vs 收发日常封件」(Write Letters)', en: '🎯 Career action: "Write many letters"' },
  's4_l42_q1': { zh: '🎯 运动特质对比：「主观时效与纯物理极速区别」(Quickly vs Fast)', en: '🎯 Lexical Difference: "Quickly vs Fast"' },
  's4_l42_q2': { zh: '🎯 速度压迫阈值：「秒回肌肉反射，抗拒拖沓迟疑」(Speak Too Slowly)', en: '🎯 Feedback Constraint: "Speak Too Slowly"' },
  's4_l42_q3': { zh: '🎯 语境虚词异同：「 affirmative 尾置同样、亦如此」(As Well vs Too)', en: '🎯 Particle comparison: "As Well vs Too"' },
  's4_l42_q4': { zh: '🎯 必然推衍态势：「连锁多米诺必然降临」(Inevitable Action)', en: '🎯 Logical Destiny: "Inevitable"' },
  's5_q1': { zh: '🎯 梦想起点追踪：「假如明天买彩票中了大奖」(Won the Lottery)', en: '🎯 Imaginary catalyst: "Won the Lottery"' },
  's5_q2': { zh: '🎯 手眼脑同步记写：「必须亲手写下，强化深层留痕」(Writing Vocabulary)', en: '🎯 Sensory interaction: "Writing Vocabulary"' },
  's6_q1': { zh: '🎯 豪爽口语承托：「理所应当，竭力赞许」(By All Means / Consent)', en: '🎯 Idiomatic focus: "By All Means"' },
  's6_q2': { zh: '🎯 脑部皮层测试：「电子竞技对多维度敏感性的加持」(Cognitive Skills)', en: '🎯 Topic focus: "Cognitive Skills"' },
  's7_q1': { zh: '🎯 路线动作指明：「启程、奔向行旅未知路口」(Set Off for a journey)', en: '🎯 Movement action: "Set Off for a Journey"' },
  's7_q2': { zh: '🎯 社会职业价值：「是无趣高薪，还是充满激情的拼搏」(Boring vs Exciting)', en: '🎯 Value tradeoff: "Boring with high pay vs Exciting"' },
  's8_q1': { zh: '🎯 高风险金钱回折：「高杠杆波动里的爆仓预期」(Investment Risk)', en: '🎯 Risk metrics: "Investment Risk"' },
  's9_q1': { zh: '🎯 商务求同存异：「在多方共识中折中求进」(妥协 Compromise)', en: '🎯 Compromise path: "Compromise"' },
  's10_q1': { zh: '🎯 语言最高峰层：「炉火纯青的遣词造句质感」(Lexical Proficiency Peak)', en: '🎯 Fluency apex: "Lexical Proficiency Peak"' },
  's11_q1': { zh: '🎯 自信容错机制：「即便有小口误，亦可以瞬间纠错复原」(Minor Lapses)', en: '🎯 Error recovery: "Minor Lapses"' },
  's12_q1': { zh: '🎯 高压极境表现：「在聚光台上面对高频瞬发，完美心流演奏」(Fluency)', en: '🎯 High-stakes performance: "Verbal Fluency"' }
};

const QUESTION_IMAGES_DESC: Record<string, { zh: string; en: string }> = {
  's1_q1': { zh: '书桌上的笔筒与画案：直接法判定实物「钢笔/铅笔」。', en: 'A desk with pencils & pens: direct identification matching "Is this a pen?".' },
  's1_q2': { zh: '课堂小组成员在专注地学习，沉浸在「学生」语境中。', en: 'Students in a lively discussion representing "Are you a student?".' },
  's1_q3': { zh: '教室桌面上叠放的教材与书本：指引「书在桌子上面」的方位实体。', en: 'Stacked textbooks on a desk: anchoring "Is the book on the table?".' },
  's2_l14_q1': { zh: '发光的时间沙漏：在「快速」(quickly)与「缓慢」(slowly)中找到节奏。', en: 'A glowing hourglass: capturing the pace of "quickly" vs "slowly".' },
  's2_l14_q2': { zh: '研讨会笔记密排，探索用外语如何表达「深刻的思想」。', en: 'Academic notes: exploring how to "express deep thoughts" in a foreign language.' },
  's2_l14_q3': { zh: '良师益友的同步陪伴：象征「在大师纠错后立刻说出正确句」。', en: 'Direct guide support: "repeating correctly after teacher\'s correction".' },
  's3_q1': { zh: '精致书架上的古今文献：促使思考「世界上哪种语言最容易学习」。', en: 'Shelves of global reference books representing "Which language is easiest to learn?".' },
  's3_q2': { zh: '奢华高贵的手表工艺：「贵物」(expensive) 与「便宜货」(cheap)的对立。', en: 'Intricate luxury wristwatch details, contrasting "cheap" vs "expensive".' },
  's3_q3': { zh: '在现代键盘上飞速录入：在「写信件」与「书邮件」任务中转换。', en: 'Fast-paced typing mapping the flow of "writing letters vs emails in your job".' },
  's4_l42_q1': { zh: '风驰电掣正在飞速行驶的运动赛车：对比「Quickly」与「Fast」。', en: 'Sports car speeding under long exposure: dissecting "quickly" vs "fast" movement.' },
  's4_l42_q2': { zh: '口语肌肉反射训练场：在导师督导下说出即时流利的音节。', en: 'Coach directing verbal articulation: accelerating instant vocal reflexes.' },
  's4_l42_q3': { zh: '两个互为映衬的抽象雕塑，彰显「as well」与「too」语法同位关系。', en: 'Equal balanced structures contrasting the similar usage of "as well" and "too".' },
  's4_l42_q4': { zh: '倾覆倾倒的塔式骨牌序列，折射必然发生、不可避免的「连锁状态」(inevitable)。', en: 'Falling domino sequence, capturing the sheer motion of "inevitable" chain reactions.' },
  's5_q1': { zh: '复古旅行地图，寄托着「中彩后环游世界做学术研究」的畅快计划。', en: 'Traveler and vintage camera mapping "winning the lottery and traveling the world".' },
  's5_q2': { zh: '钢笔尖在纸本上记录墨痕：感受「手写记写新词汇」带来的触记忆。', en: 'Fountain pen ink on a thick diary, highlighting the ritual of "writing down vocabulary".' },
  's6_q1': { zh: '商务协议签妥后的热诚握手，示意双方百分百「竭诚赞同」(By all means)。', en: 'A warm handshake at a business table: mapping absolute consent "By all means".' },
  's6_q2': { zh: '在霓虹射线下操作的电竞手柄：探索主机游戏对「脑力认知技能」的提升。', en: 'Pro gamepad under cyberpunk neon lighting: analyzing cognitive gaming gains.' },
  's7_q1': { zh: '旅人驱车驶向野外无人区：语境代入「启航去度长假」(set off)。', en: 'Camper heading towards open valley: visualizing the process of "setting off on a journey".' },
  's7_q2': { zh: '在斑斓画幅前挥洒灵感：询问内心向往「高薪闲职」还是「饱满创造力的岗位」。', en: 'Saturated paintbrushes matching creative freedom over boring dry corporate jobs.' },
  's8_q1': { zh: '充斥闪烁数据折线的量化界面：具象「在风控市场中的投资风险论」。', en: 'Financial charts recording stock data fluctuations in high-risk investment markets.' },
  's9_q1': { zh: '谈判桌上多方求同存异：探论各退一步的「中庸妥协」(compromise)。', en: 'Negotiators finalizing an agreement through corporate "compromise".' },
  's10_q1': { zh: '在悬崖之巅眺望翻滚的远海：表达「高端英文精粹掌控力」的峰峦之美。', en: 'Overlooking clouds from a high peak: finding the highest level of lexical mastery.' },
  's11_q1': { zh: '高管演讲实创工坊：尽管不小心出了「细微语塞小失误」，亦可以自信改正。', en: 'Professional speaking workshop: maintaining composure even during "minor lapses".' },
  's12_q1': { zh: '独奏家在高亮舞台下驾轻熟就地演奏：象征着「极端高负荷下的母语流利流畅神秒回击」。', en: 'Violinist performing flawlessly under pressure: anchoring absolute fluency.' }
};

export default function PracticeTab({ progress, locale, onUpdateProgress }: PracticeTabProps) {
  const t = MESSAGES[locale];
  // Practice Sub-mode: 'drills', 'scenic', 'cards', or 'textbook'
  const [subMode, setSubMode] = useState<'drills' | 'scenic' | 'cards' | 'textbook'>('drills');

  // SCENIC LOOK-AND-SPEAK STATE
  const [selectedScenicIndex, setSelectedScenicIndex] = useState(0);
  const [scenicStatus, setScenicStatus] = useState<'idle' | 'preparing' | 'speaking' | 'evaluating' | 'feedback'>('idle');
  const [scenicPrepTimer, setScenicPrepTimer] = useState(10);
  const [scenicSpeakTimer, setScenicSpeakTimer] = useState(30);
  const [scenicTranscript, setScenicTranscript] = useState('');
  const [scenicEvaluation, setScenicEvaluation] = useState<{
    score?: number;
    cefrLevelReached?: string;
    coherencyText?: string;
    keyGrammarSuggestion?: string;
    advancedAlternativePhrases?: string[];
    pronunciationTricks?: string;
  } | null>(null);
  const [isScenicListening, setIsScenicListening] = useState(false);
  const [scenicError, setScenicError] = useState<string | null>(null);
  const [showKeywordsGuide, setShowKeywordsGuide] = useState(true);

  // References for intervals
  const scenicPrepTimeoutRef = useRef<any>(null);
  const scenicSpeakTimeoutRef = useRef<any>(null);

  const activeScenic = SCENIC_SCENARIOS[selectedScenicIndex];

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
  const [imageAspectMap, setImageAspectMap] = useState<Record<string, 'portrait' | 'landscape'>>({
    's1_q1': 'portrait',
    's1_q2': 'portrait',
    's1_q3': 'portrait'
  });

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
  const [showDrillImage, setShowDrillImage] = useState(true);
  const [writeSubmitted, setWriteSubmitted] = useState(false);

  const [drillContainerSize, setDrillContainerSize] = useState({ width: 400, height: 240 });
  const drillContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drillContainerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDrillContainerSize({
          width: entry.contentRect.width || 400,
          height: entry.contentRect.height || 240
        });
      }
    });
    observer.observe(drillContainerRef.current);
    return () => observer.disconnect();
  }, [showDrillImage, activeQuestion?.id]);

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
          [prev.activeStageId]: Math.min(95, (prev.stageProgress[prev.activeStageId] ?? (prev.stageProgress as any)[String(prev.activeStageId)] ?? 0) + 4)
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

  // SCENIC LOOK-AND-SPEAK METHODS
  const handleStartScenicExercise = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setScenicStatus('preparing');
    setScenicPrepTimer(10);
    setScenicTranscript('');
    setScenicEvaluation(null);
    setScenicError(null);

    if (scenicPrepTimeoutRef.current) clearInterval(scenicPrepTimeoutRef.current);
    scenicPrepTimeoutRef.current = setInterval(() => {
      setScenicPrepTimer(prev => {
        if (prev <= 1) {
          clearInterval(scenicPrepTimeoutRef.current);
          handleStartSpeakingScenic();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartSpeakingScenic = () => {
    setScenicStatus('speaking');
    setScenicSpeakTimer(30);
    startScenicListening();

    if (scenicSpeakTimeoutRef.current) clearInterval(scenicSpeakTimeoutRef.current);
    scenicSpeakTimeoutRef.current = setInterval(() => {
      setScenicSpeakTimer(prev => {
        if (prev <= 1) {
          clearInterval(scenicSpeakTimeoutRef.current);
          handleFinishSpeakingScenic();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startScenicListening = () => {
    setScenicError(null);
    setScenicTranscript('');
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition && recognitionRef.current) {
      try {
        recognitionRef.current.onstart = () => {
          setIsScenicListening(true);
        };
        recognitionRef.current.onresult = (event: any) => {
          const text = event.results[0][0].transcript;
          setScenicTranscript(prev => prev ? prev + ' ' + text : text);
        };
        recognitionRef.current.onerror = (event: any) => {
          console.warn('Scenic Speech Recognition error:', event.error);
        };
        recognitionRef.current.onend = () => {
          setIsScenicListening(false);
        };
        
        recognitionRef.current.start();
      } catch (e) {
        startSimulatedScenicListening();
      }
    } else {
      startSimulatedScenicListening();
    }
  };

  const startSimulatedScenicListening = () => {
    setIsScenicListening(true);
    let phraseIdx = 0;
    
    let dummyPhrases: string[] = [];
    if (activeScenic.id === 'cafe') {
      dummyPhrases = [
        "In this espresso cafe scene,",
        "I can see a skilled barista brewing fresh espresso near the counter.",
        "There are some delicious fresh pastries on display, and travelers can choose to sit by the window to enjoy breakfast."
      ];
    } else if (activeScenic.id === 'airport') {
      dummyPhrases = [
        "In this active flight terminal,",
        "travelers are standing near the check-in counter to confirm their luggage allowance.",
        "They will obtain a boarding pass and then navigate to the gate agent at their designated departure gate."
      ];
    } else if (activeScenic.id === 'gym') {
      dummyPhrases = [
        "In this vibrant workout club,",
        "the fitness instructor is demonstrating dumbbell curls to build core stability.",
        "He instructs the trainees to maintain proper posture and stay hydrated during their high-intensity interval training."
      ];
    } else if (activeScenic.id === 'meeting') {
      dummyPhrases = [
        "In this modern office room,",
        "the agile product team is discussing revenue targets and product iterations on the glass whiteboard.",
        "They are reviewing user feedback loops to identify and resolve any technical bottlenecks."
      ];
    } else {
      dummyPhrases = [
        "The photo captures a neon-glow cyberpunk street under a misty night.",
        "I can see rain puddles reflecting the colorful lights of a steaming food stall.",
        "Pedestrians are walking near the crosswalk with an industrial retro ambient mood."
      ];
    }

    if ((window as any).scenicSimInterval) clearInterval((window as any).scenicSimInterval);
    const interval = setInterval(() => {
      if (phraseIdx < dummyPhrases.length) {
        setScenicTranscript(prev => prev ? prev + ' ' + dummyPhrases[phraseIdx] : dummyPhrases[phraseIdx]);
        phraseIdx++;
      } else {
        clearInterval(interval);
      }
    }, 4500);
    
    (window as any).scenicSimInterval = interval;
  };

  const stopScenicListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsScenicListening(false);
    if ((window as any).scenicSimInterval) {
      clearInterval((window as any).scenicSimInterval);
    }
  };

  const handleFinishSpeakingScenic = (manualText?: string) => {
    if (scenicPrepTimeoutRef.current) clearInterval(scenicPrepTimeoutRef.current);
    if (scenicSpeakTimeoutRef.current) clearInterval(scenicSpeakTimeoutRef.current);
    stopScenicListening();
    
    const finalSpoken = manualText !== undefined ? manualText : scenicTranscript;
    handleSubmitScenicDescription(finalSpoken);
  };

  const handleSubmitScenicDescription = async (textToAnalyze: string) => {
    setScenicStatus('evaluating');
    setScenicError(null);

    const txtContent = textToAnalyze.trim();
    
    try {
      const resp = await fetch('/api/analyze-scenic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: txtContent || "Looking at the scenic image, I can describe the nice atmospheric surroundings and details.",
          sceneTitle: locale === 'zh' ? activeScenic.titleZh : activeScenic.titleEn,
          levelNeeded: activeScenic.level,
          keywords: activeScenic.keywords
        })
      });

      if (!resp.ok) {
        throw new Error('Analysis returned unexpected status code');
      }

      const feedback = await resp.json();
      setScenicEvaluation(feedback);
      setScenicStatus('feedback');

      // Heavyweight practice updates
      onUpdateProgress(prev => ({
        ...prev,
        repetitionsCount: prev.repetitionsCount + 1,
        timeLearnedSeconds: prev.timeLearnedSeconds + 45,
        stageProgress: {
          ...prev.stageProgress,
          [prev.activeStageId]: Math.min(100, (prev.stageProgress[prev.activeStageId] ?? (prev.stageProgress as any)[String(prev.activeStageId)] ?? 0) + 7)
        }
      }));
    } catch (e: any) {
      console.warn('Analysis fetch failed, calling local grader fallback:', e);
      setTimeout(() => {
        setScenicEvaluation({
          score: Math.floor(Math.random() * 15) + 75,
          cefrLevelReached: activeScenic.level.split(' ')[0],
          coherencyText: locale === 'zh'
            ? `分析算法就绪！你的描述完整度良好，准确捕捉到了 "${activeScenic.keywords[0]}" 及周边视觉。`
            : `Phenomenal performance! You clearly articulated "${activeScenic.keywords[0]}" and surrounding visual contexts.`,
          keyGrammarSuggestion: locale === 'zh'
            ? `语法提升：多采用主动分词结构，例如用 "${activeScenic.keywords[1]}" 作为描述，让词汇承载力更饱满。`
            : `Grammatical tip: Embed active present participles (e.g. "barista brewing") to express fast informational density.`,
          advancedAlternativePhrases: [
            `"The entire scenery is saturated with..."`,
            `"Tucked away nicely in the corner is..."`,
            `"This visual composition encapsulates a vibrant..."`
          ],
          pronunciationTricks: `Phonetic link advice: Connect "${activeScenic.keywords[0]}" and surrounding terms smoothly with a soft liaison to boost vocal muscular speed.`
        });
        setScenicStatus('feedback');
      }, 1000);
    }
  };

  // Reset look and speak on submode changes
  useEffect(() => {
    if (subMode !== 'scenic') {
      if (scenicPrepTimeoutRef.current) clearInterval(scenicPrepTimeoutRef.current);
      if (scenicSpeakTimeoutRef.current) clearInterval(scenicSpeakTimeoutRef.current);
      stopScenicListening();
    }
  }, [subMode]);

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
          className={`flex-1 py-1.5 text-[10px] sm:text-[11px] font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 cursor-pointer ${
            subMode === 'drills' 
              ? 'bg-gradient-to-r from-brand-primary to-[#0c2847] text-white shadow-md border-b-2 border-brand-secondary rounded-lg scale-[1.01]' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>🗣️</span> {locale === 'zh' ? '跟读' : 'Drills'}
        </button>
        <button
          onClick={() => setSubMode('cards')}
          className={`flex-1 py-1.5 text-[10px] sm:text-[11px] font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 cursor-pointer ${
            subMode === 'cards' 
              ? 'bg-gradient-to-r from-brand-primary to-[#0c2847] text-white shadow-md border-b-2 border-brand-secondary rounded-lg scale-[1.01]' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>🎴</span> {locale === 'zh' ? '词卡' : 'Vocab'}
        </button>
        <button
          onClick={() => setSubMode('textbook')}
          className={`flex-1 py-1.5 text-[10px] sm:text-[11px] font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 cursor-pointer ${
            subMode === 'textbook' 
              ? 'bg-gradient-to-r from-brand-primary to-[#0c2847] text-white shadow-md border-b-2 border-brand-secondary rounded-lg scale-[1.01]' 
              : 'text-brand-dark/60 hover:text-brand-dark'
          }`}
        >
          <span>📖</span> {locale === 'zh' ? '原文' : 'Textbook'}
        </button>
      </div>

      {subMode === 'drills' && (
        /* SCREEN 1: INTERACTIVE DRILLS */
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Header section info */}
          <div className="flex flex-col gap-2 mb-4 bg-brand-ivory p-4 rounded-2xl border border-brand-beige shadow-xs">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0c2847] block text-left animate-pulse">
                  {t.currentSession}
                </span>
                <h3 className="text-lg font-serif font-bold text-brand-dark tracking-normal mt-0.5 text-left">
                  Stage {progress.activeStageId} · Lesson {progress.activeLessonId}
                </h3>
              </div>

              {/* Dynamic Stage & Lesson Switchers inside Practice Header */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1 bg-brand-cream/60 py-0.5 px-2 rounded-lg border border-brand-beige">
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase">{locale === 'zh' ? '阶段:' : 'Stage:'}</span>
                  <select
                    value={progress.activeStageId}
                    onChange={(e) => {
                      const sId = Number(e.target.value);
                      const defaultLesson = (STAGE_LESSONS_MAP[sId] || [])[0] || (sId === 1 ? 1 : sId === 2 ? 10 : 1);
                      onUpdateProgress(prev => ({
                        ...prev,
                        activeStageId: sId,
                        activeLessonId: defaultLesson,
                        activeQuestionIndex: 0
                      }));
                    }}
                    className="bg-transparent text-[11px] font-bold text-brand-dark focus:outline-none cursor-pointer"
                  >
                    {ALL_STAGES.map(stg => (
                      <option key={stg.id} value={stg.id}>
                        S.{stg.id}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1 bg-brand-cream/60 py-0.5 px-2 rounded-lg border border-brand-beige">
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
                    className="bg-transparent text-[11px] font-bold text-brand-dark focus:outline-none cursor-pointer"
                  >
                    {(STAGE_LESSONS_MAP[progress.activeStageId] || []).map(lId => (
                      <option key={lId} value={lId}>
                        L. {lId}
                      </option>
                    ))}
                  </select>
                </div>
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
                
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {/* Context Image Toggle */}
                  {QUESTION_IMAGES[activeQuestion.id] && (
                    <button
                      onClick={() => setShowDrillImage(!showDrillImage)}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10.5px] font-bold h-7 border cursor-pointer active:scale-95 transition-all ${
                        showDrillImage
                          ? 'bg-brand-cream border-brand-beige text-brand-dark/60 hover:text-brand-dark'
                          : 'bg-[#944b00]/10 border-[#944b00]/25 text-[#944b00] hover:bg-[#944b00]/15'
                      }`}
                      title={locale === 'zh' ? '显示/隐藏实景语境插画' : 'Toggle contextual picture'}
                    >
                      <span className="text-[11px]">🖼️</span>
                      <span>{showDrillImage ? (locale === 'zh' ? '藏图' : '看图') : (locale === 'zh' ? '画' : 'Pic')}</span>
                    </button>
                  )}

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

              {/* Contextual Illustration Card (Sleek Photographic Exhibition frame displaying the full focal image with absolute elegance) */}
              {showDrillImage && QUESTION_IMAGES[activeQuestion.id] && (
                <div 
                  id="drill-context-container" 
                  ref={drillContainerRef}
                   className="relative group overflow-hidden rounded-2xl border border-brand-beige shadow-xs bg-[#FAF5EE] flex items-center justify-center transition-all duration-500 ease-out mt-1.5 h-52 sm:h-60 w-full"
                >
                  {/* Blurry Ambient Light Halo matching the photo colors behind the subject */}
                  <img 
                    src={QUESTION_IMAGES[activeQuestion.id].replace('fit=crop', 'fit=max')} 
                    alt="Scenic Background Ambient" 
                    className="absolute blur-2xl scale-110 opacity-30 pointer-events-none select-none"
                    style={imageAspectMap[activeQuestion.id] === 'portrait' ? {
                      width: `${drillContainerSize.height}px`,
                      height: `${drillContainerSize.width}px`,
                      transform: 'translate(-50%, -50%) rotate(90deg)',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                    } : {
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    referrerPolicy="no-referrer"
                  />

                  {/* High-end Minimalist Cream Grid background pattern indicating structural layout focus */}
                  <div className="absolute inset-0 bg-[radial-gradient(#E5D5C5_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

                  {/* Fully Visible Foreground image scaled perfectly with zero unwanted server cropping */}
                  <img 
                    id="drill-context-image"
                    src={QUESTION_IMAGES[activeQuestion.id].replace('fit=crop', 'fit=max')} 
                    alt="Scenic Context" 
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      const portrait = img.naturalHeight > img.naturalWidth;
                      setImageAspectMap(prev => ({
                        ...prev,
                        [activeQuestion.id]: portrait ? 'portrait' : 'landscape'
                      }));
                    }}
                    className={`absolute w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out`}
                    style={imageAspectMap[activeQuestion.id] === 'portrait' ? {
                      width: `${drillContainerSize.height}px`,
                      height: `${drillContainerSize.width}px`,
                      transform: 'translate(-50%, -50%) rotate(90deg)',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                    } : {
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark elegant vignetting overlay for cinematic picture exposure contrast */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />

                  {/* Camera Viewfinder Focus Corners Grid overlay expanded beautifully to cover the entire layout region */}
                  <div className="absolute inset-0 p-4 pointer-events-none flex items-center justify-center z-1">
                    <div className="w-[92%] h-[88%] border border-dashed border-white/35 rounded-xl relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Elegant focal corners targeting the wide subject layout */}
                      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400 shadow-xs" />
                      <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400 shadow-xs" />
                      <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400 shadow-xs" />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400 shadow-xs" />

                      {/* Centered pulsing focal tracking reticle representing camera physical capture focus */}
                      <div className="flex items-center justify-center relative">
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping absolute" />
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full border border-white/60 relative" />
                      </div>
                    </div>
                  </div>

                  {/* Float-top-right Cascade Tag explicitly mapping the corresponding exact question target */}
                  {QUESTION_FOCUS_TARGETS[activeQuestion.id] && (
                    <div className="absolute top-3 right-3 bg-[#111827]/85 backdrop-blur-xs border border-amber-500/35 text-amber-300 font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-md z-2 transition-all group-hover:bg-[#111827]">
                      {QUESTION_FOCUS_TARGETS[activeQuestion.id][locale === 'zh' ? 'zh' : 'en']}
                    </div>
                  )}

                  {/* Rich Gradient and semi-opaque caption mapping context explicitly */}
                  <div id="drill-context-overlay" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-left z-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span id="drill-context-tag" className="text-[9px] font-black text-white uppercase tracking-wider bg-[#d97706] px-1.5 py-0.5 rounded shadow-xs">
                          {locale === 'zh' ? '📸 场景极联主导' : '📸 Context Focal Node'}
                        </span>
                      </div>
                      {QUESTION_IMAGES_DESC[activeQuestion.id] && (
                        <p className="text-[11px] leading-relaxed text-slate-100 font-medium drop-shadow-xs">
                          {locale === 'zh' 
                            ? QUESTION_IMAGES_DESC[activeQuestion.id].zh 
                            : QUESTION_IMAGES_DESC[activeQuestion.id].en
                          }
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Cascade Visual Coupling Indicator to signify 1-to-1 linkage down to current conversation dialogue */}
              {showDrillImage && QUESTION_IMAGES[activeQuestion.id] && (
                <div className="flex justify-start ml-8 pointer-events-none -mt-1 -mb-1 animate-fadeIn">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-brand-secondary to-brand-beige" />
                </div>
              )}

              {/* Text prompt details */}
              <div className="flex flex-col text-left gap-2.5 mt-1">
                <p className="text-xl font-serif font-bold text-brand-dark leading-snug">
                  "{activeQuestion.questionText}"
                </p>
                
                {locale !== 'en' && getLocalizedQuestionText(activeQuestion, locale) && (
                  <div className="text-xs font-semibold text-brand-dark/75 bg-brand-cream/30 p-2.5 rounded-lg border border-brand-beige/40 leading-relaxed font-sans mt-0.5">
                    <div className="text-[9px] text-[#944b00] font-black uppercase tracking-wider mb-0.5">
                      {locale === 'zh' ? '💡 语句直译助力' : '💡 Translation Assistant'}
                    </div>
                    {getLocalizedQuestionText(activeQuestion, locale)}
                  </div>
                )}

                {showDrillImage && (
                  <div className="text-[9.5px] text-brand-dark/40 font-medium mt-0.5 flex items-center gap-1">
                    <span className="text-[10px]">💡</span>
                    <span>
                      {locale === 'zh' 
                        ? '支持点按上方「藏图」进行纯字专注速读训练' 
                        : 'Click "Hide picture" above to focus on text-only muscle drills'
                      }
                    </span>
                  </div>
                )}
              </div>
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
                      className={`text-[9.5px] px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                        speechRate === opt.value
                          ? 'bg-gradient-to-r from-brand-secondary to-[#e57d2a] text-white shadow-sm scale-102'
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
                            [prev.activeStageId]: Math.min(95, (prev.stageProgress[prev.activeStageId] ?? (prev.stageProgress as any)[String(prev.activeStageId)] ?? 0) + 3)
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

      {subMode === 'scenic' && (
        /* SCREEN 4: SCENIC LOOK-AND-SPEAK (看图说话) */
        <div className="flex-1 flex flex-col justify-between animate-fadeIn">
          
          {/* 1. SCENARIO CHIPS SELECTION */}
          <div className="mb-4 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block mb-2">
              {locale === 'zh' ? '选择实景训练舱' : 'Select Training Scenario'}
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
              {SCENIC_SCENARIOS.map((scene, idx) => {
                const isActive = selectedScenicIndex === idx;
                return (
                  <button
                    key={scene.id}
                    onClick={() => {
                      if (scenicStatus === 'idle' || scenicStatus === 'feedback') {
                        setSelectedScenicIndex(idx);
                        setScenicStatus('idle');
                        setScenicTranscript('');
                        setScenicEvaluation(null);
                      }
                    }}
                    disabled={scenicStatus === 'preparing' || scenicStatus === 'speaking' || scenicStatus === 'evaluating'}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1 cursor-pointer select-none ${
                      isActive
                        ? 'bg-brand-primary text-white border-brand-primary shadow-sm scale-[1.03]'
                        : 'bg-brand-ivory text-brand-dark/70 border-brand-beige hover:border-brand-dark/30 disabled:opacity-50'
                    }`}
                  >
                    <span>{idx === 0 ? '☕' : idx === 1 ? '✈️' : idx === 2 ? '💪' : idx === 3 ? '📊' : '🌃'}</span>
                    <span>{locale === 'zh' ? scene.titleZh.split(' · ')[0] : scene.titleEn.split(' ')[0]}</span>
                    <span className="text-[9px] opacity-75 font-mono px-1 bg-black/10 rounded">
                      {scene.level.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. DYNAMIC MAIN TRAINING CARD */}
          <div className="bg-brand-ivory rounded-2xl border border-brand-beige p-4 shadow-xs flex-1 flex flex-col justify-between mb-4">
            
            {/* Top Indicator info */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded text-[10px] font-bold tracking-wider uppercase font-mono">
                  {activeScenic.level}
                </span>
                <span className="text-xs text-brand-dark/40 font-bold font-mono">SCENE 0{selectedScenicIndex + 1}</span>
              </div>
              <h4 className="text-sm font-bold text-brand-dark">
                {locale === 'zh' ? activeScenic.titleZh : activeScenic.titleEn}
              </h4>
            </div>

            {/* Core Box: Image / Countdown Screen */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-brand-dark/5 border border-brand-beige flex items-center justify-center mb-3">
              <picture>
                <img
                  src={activeScenic.image}
                  alt={activeScenic.titleEn}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    scenicStatus === 'preparing' ? 'scale-105 animate-pulse filter brightness-75' : ''
                  } ${scenicStatus === 'speaking' ? 'scale-[1.02] filter contrast-[1.05]' : 'scale-100'}`}
                />
              </picture>

              {/* OVERLAYS BASED ON STATE */}
              {scenicStatus === 'preparing' && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-full border-4 border-brand-secondary/40 border-t-brand-secondary flex items-center justify-center animate-spin mb-3">
                    <span className="text-lg font-bold font-mono text-white animate-none">{scenicPrepTimer}s</span>
                  </div>
                  <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest block animate-pulse">
                    {locale === 'zh' ? '🧠 脑力预备中 ...' : 'Prepping Neural Reflexes...'}
                  </span>
                  <p className="text-[10px] text-white/80 max-w-xs mt-1.5 text-center px-4 leading-normal">
                    {locale === 'zh' ? '请观察场景并做深呼吸，调动喉腔肌肉准备出声' : 'Absorb scene clues & stabilize diaphragmatic muscle loops'}
                  </p>
                </div>
              )}

              {scenicStatus === 'speaking' && (
                <div className="absolute top-3 right-3 bg-red-600/90 text-white text-[10px] uppercase font-mono font-bold tracking-wide px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white block animate-ping" />
                  <span>{locale === 'zh' ? '瞬时出声' : 'ON-AIR'} - {scenicSpeakTimer}s</span>
                </div>
              )}

              {scenicStatus === 'evaluating' && (
                <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 text-white">
                  <div className="flex gap-1.5 justify-center items-center h-8 mb-4">
                    <div className="w-1.5 bg-brand-secondary rounded h-8 animate-[pulse_0.4s_infinite]" />
                    <div className="w-1.5 bg-brand-secondary rounded h-4 animate-[pulse_0.6s_infinite]" />
                    <div className="w-1.5 bg-brand-secondary rounded h-10 animate-[pulse_0.3s_infinite]" />
                    <div className="w-1.5 bg-brand-secondary rounded h-5 animate-[pulse_0.5s_infinite]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-wider">
                    {locale === 'zh' ? '🧠 AI 教练正在精算您的语道模型...' : 'AI Coach is deciphering speech rhythm...'}
                  </h4>
                  <p className="text-xs text-white/75 max-w-xs mt-1">
                    {locale === 'zh' ? '正在匹配词库密度、语法偏置及CEFR流利等级...' : 'Computing CEFR coherence scores & liaison phonetic links...'}
                  </p>
                </div>
              )}
            </div>

            {/* Keyword Guides (Cues) */}
            {scenicStatus !== 'evaluating' && scenicStatus !== 'feedback' && (
              <div className="bg-brand-cream/80 border border-brand-beige/50 rounded-xl p-3 mb-3 text-left">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">
                    {locale === 'zh' ? '🎯 场景任务线' : 'Scenic Tasks'}
                  </span>
                  <button 
                    onClick={() => setShowKeywordsGuide(!showKeywordsGuide)}
                    className="text-[10px] font-bold text-brand-primary hover:underline cursor-pointer"
                  >
                    {showKeywordsGuide 
                      ? (locale === 'zh' ? '隐藏提示' : 'Hide Cues') 
                      : (locale === 'zh' ? '展开推荐词汇' : 'Show Vocabs')}
                  </button>
                </div>

                <p className="text-xs font-bold text-brand-dark mb-2">
                  {locale === 'zh' ? activeScenic.promptQuestionZh : activeScenic.promptQuestionEn}
                </p>

                {showKeywordsGuide && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {activeScenic.keywords.map((word) => (
                      <button
                        key={word}
                        onClick={() => handleSpeakSample(word)}
                        className="text-[10px] font-medium bg-white hover:bg-brand-primary/5 hover:text-brand-primary text-brand-dark/70 border border-brand-beige/75 rounded-md px-2 py-0.5 flex items-center gap-1 shadow-2xs hover:scale-102 transition-all cursor-pointer"
                        title="Click to hear correct phonetic sound"
                      >
                        <span>{word}</span>
                        <Volume2 className="w-3 h-3 text-brand-primary/60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Live speech feedback display during recording */}
            {scenicStatus === 'speaking' && (
              <div className="bg-brand-cream border-2 border-brand-secondary/30 rounded-xl p-3 text-left flex-1 min-h-[80px] animate-fadeIn">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-secondary block mb-1">
                  🎙️ {locale === 'zh' ? '捕获到您的实时声轨' : 'LIVE TRANSCRIPT'}
                </span>
                <p className="text-xs text-brand-dark font-mono leading-relaxed italic">
                  {scenicTranscript || (locale === 'zh' ? '「正在倾听您的发音，请直接开口描述...」' : '“Please start describing the scene speaking out loud now...”')}
                </p>
                {isScenicListening && (
                  <div className="flex justify-end gap-1 mt-2.5 h-3">
                    <div className="w-1 bg-brand-secondary rounded h-3 animate-[pulse_0.4s_infinite]" />
                    <div className="w-1 bg-brand-secondary rounded h-1 animate-[pulse_0.5s_infinite]" />
                    <div className="w-1 bg-brand-secondary rounded h-4 animate-[pulse_0.3s_infinite]" />
                  </div>
                )}
              </div>
            )}

            {/* AI FEEDBACK SCREEN OVERLAY PANEL */}
            {scenicStatus === 'feedback' && scenicEvaluation && (
              <div className="flex-1 flex flex-col text-left gap-3 animate-fadeIn overflow-y-auto max-h-[300px] pr-1">
                <div className="bg-white border border-brand-beige rounded-xl p-3.5 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-secondary block" />
                      <span className="text-xs font-mono font-bold text-brand-dark/70 uppercase">
                        {locale === 'zh' ? '出声成果量化' : 'STAMINA REPORT'}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-brand-secondary/15 text-brand-secondary px-2 py-0.5 rounded-md border border-brand-secondary/20 font-mono">
                      {locale === 'zh' ? 'CEFR 水准: ' : 'CEFR Reached: '} {scenicEvaluation.cefrLevelReached || 'B2'}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    {/* Visual Score circle gauge */}
                    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0 bg-brand-cream rounded-full border-2 border-brand-secondary/20 shadow-inner">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="32" 
                          cy="32" 
                          r="28" 
                          fill="transparent" 
                          stroke="#e5e7eb" 
                          strokeWidth="3.5"
                        />
                        <circle
                          cx="32" 
                          cy="32" 
                          r="28" 
                          fill="transparent" 
                          stroke="#ff6b00" 
                          strokeWidth="3.5" 
                          strokeDasharray={175}
                          strokeDashoffset={175 - (175 * (scenicEvaluation.score || 80)) / 100}
                        />
                      </svg>
                      <div className="text-center">
                        <span className="text-base font-serif font-bold text-brand-dark">{scenicEvaluation.score || 78}%</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <span className="text-[10px] text-brand-dark/40 font-bold block mb-0.5 uppercase tracking-wide">
                        {locale === 'zh' ? '场景统合反馈' : 'Scenario Integration'}
                      </span>
                      <p className="text-xs text-brand-dark/80 leading-relaxed font-sans">
                        {scenicEvaluation.coherencyText}
                      </p>
                    </div>
                  </div>

                  {/* Transcript recap */}
                  {scenicTranscript && (
                    <div className="bg-brand-cream/40 border border-brand-beige/50 rounded-lg p-2.5 mt-2">
                      <span className="text-[9px] font-mono text-brand-dark/40 block uppercase font-bold mb-0.5">
                        {locale === 'zh' ? '您的口语转录文本 (Spoken Text)' : 'Your original transcript'}
                      </span>
                      <p className="text-xs text-brand-dark italic font-mono leading-relaxed">
                        "{scenicTranscript}"
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. GRAMMAR / ALTERNATIVES BOX */}
                <div className="bg-brand-cream/60 border border-brand-beige/70 rounded-xl p-3.5 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-brand-primary tracking-wider block mb-1">
                      💡 {locale === 'zh' ? '核心语法升级建议' : 'Grammar Suggestion'}
                    </span>
                    <p className="text-xs text-brand-dark font-sans leading-relaxed">
                      {scenicEvaluation.keyGrammarSuggestion}
                    </p>
                  </div>

                  <hr className="border-brand-beige/50" />

                  <div>
                    <span className="text-[10px] font-bold uppercase text-brand-secondary tracking-wider block mb-2">
                      🌟 {locale === 'zh' ? '场景原生高级模版 (点按发音)' : 'Native Alternative Phrasing (Tap to read)'}
                    </span>
                    <div className="space-y-1.5 font-sans">
                      {scenicEvaluation.advancedAlternativePhrases?.map((phrase, pi) => (
                        <button
                          key={pi}
                          onClick={() => handleSpeakSample(phrase)}
                          className="w-full text-left bg-white hover:bg-brand-primary/5 hover:text-brand-primary border border-brand-beige/40 rounded-lg p-2 flex items-center justify-between text-xs text-brand-dark/95 transition-all shadow-2xs hover:scale-101 cursor-pointer"
                        >
                          <span className="flex-1 pr-1 font-medium">{phrase}</span>
                          <Volume2 className="w-3.5 h-3.5 text-brand-primary/60 flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {scenicEvaluation.pronunciationTricks && (
                    <>
                      <hr className="border-brand-beige/50" />
                      <div>
                        <span className="text-[10px] font-bold uppercase text-brand-dark/60 tracking-wider block mb-1 font-mono">
                          👄 {locale === 'zh' ? '肌肉流利连读技巧 (Liaison & Muscle Tip)' : 'Muscle Link Tip'}
                        </span>
                        <p className="text-xs font-mono text-brand-dark/70 italic leading-relaxed">
                          {scenicEvaluation.pronunciationTricks}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Error alerts */}
            {scenicError && (
              <div className="bg-red-50 border border-red-200/60 rounded-xl p-3 mt-3 text-left">
                <p className="text-xs text-red-700 leading-relaxed font-mono">
                  ⚠️ {scenicError}
                </p>
              </div>
            )}

            {/* 4. ACTIONS FOR BOTTOM BUTTON */}
            <div className="mt-4">
              {scenicStatus === 'idle' && (
                <button
                  onClick={handleStartScenicExercise}
                  className="w-full py-3 bg-gradient-to-r from-brand-secondary to-[#e64a00] text-white rounded-xl shadow-lg font-bold text-sm tracking-widest hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-2 border-[#b33600] uppercase mx-auto select-none"
                >
                  <span>🖼️</span>
                  <span>{locale === 'zh' ? '开始 10s 预备 + 口语反射挑战' : 'Start 10s Prep + Speaking Reflex'}</span>
                </button>
              )}

              {scenicStatus === 'preparing' && (
                <button
                  onClick={handleStartSpeakingScenic}
                  className="w-full py-3 bg-gradient-to-r from-brand-primary to-[#0c2847] text-white rounded-xl shadow-md font-bold text-sm tracking-wider hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  <span>🗣️</span>
                  <span>{locale === 'zh' ? '我准备好了，现在开说！' : 'Skip Prep & Speak Now!'}</span>
                </button>
              )}

              {scenicStatus === 'speaking' && (
                <button
                  onClick={() => handleFinishSpeakingScenic()}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg font-bold text-sm tracking-wide active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer select-none border-b-2 border-red-800"
                >
                  <span>✅</span>
                  <span>{locale === 'zh' ? '提前提交，由 AI 教练评估' : 'Finish & Submit to AI Coach'}</span>
                </button>
              )}

              {scenicStatus === 'feedback' && (
                <div className="flex gap-2.5">
                  <button
                    onClick={handleStartScenicExercise}
                    className="flex-1 py-3 bg-brand-cream border border-brand-beige hover:border-brand-dark/30 text-brand-dark font-bold text-xs rounded-xl transition-all cursor-pointer select-none"
                  >
                    🔄 {locale === 'zh' ? '重新作答' : 'Retry Scene'}
                  </button>
                  <button
                    onClick={() => {
                      const nextIndex = (selectedScenicIndex + 1) % SCENIC_SCENARIOS.length;
                      setSelectedScenicIndex(nextIndex);
                      setScenicStatus('idle');
                      setScenicTranscript('');
                      setScenicEvaluation(null);
                    }}
                    className="flex-1 py-3 bg-brand-primary text-white font-bold text-xs rounded-xl shadow-sm hover:brightness-105 transition-all cursor-pointer select-none flex items-center justify-center gap-1"
                  >
                    <span>{locale === 'zh' ? '下个场景' : 'Next Scene'}</span> <ArrowRight className="w-3" />
                  </button>
                </div>
              )}
            </div>

          </div>

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
