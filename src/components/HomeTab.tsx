import { ALL_STAGES, ALL_QUESTIONS, ALL_FLASHCARDS, STAGE_LESSONS_MAP, MESSAGES } from '../data';
import { Stage, UserProgress, SupportLocale } from '../types';
import { Check, Lock, PlayCircle, Zap, BookOpen, Volume2, Sparkles, GraduationCap, Dumbbell } from 'lucide-react';
import { useState } from 'react';

const cefrLevels: Record<number, { code: string; nameZh: string; nameEn: string; colorClass: string }> = {
  1: { code: 'A1', nameZh: '入门热身组 · Beginner', nameEn: 'Introductory Warmup', colorClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30' },
  2: { code: 'A1+', nameZh: '语法强化组 · Active Beginner', nameEn: 'Basic Active Reflexes', colorClass: 'bg-teal-500/10 text-teal-700 border-teal-500/30' },
  3: { code: 'A2', nameZh: '初级生存组 · Elementary', nameEn: 'Essential Survival Flow', colorClass: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30' },
  4: { code: 'A2+', nameZh: '连排抗阻组 · High Elementary', nameEn: 'Integrated Syntax Link', colorClass: 'bg-sky-500/10 text-sky-700 border-sky-500/30' },
  5: { code: 'B1', nameZh: '日常交流组 · Lower-Int', nameEn: 'Functional Routine Lift', colorClass: 'bg-blue-500/10 text-blue-700 border-blue-500/30' },
  6: { code: 'B1+', nameZh: '耐力重载组 · Mid-Int', nameEn: 'Medium Resistance Reps', colorClass: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30' },
  7: { code: 'B2', nameZh: '高阶流利组 · Upper-Int', nameEn: 'Fluid Conversationalist', colorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/30' },
  8: { code: 'B2+', nameZh: '双核精审组 · High Upper-Int', nameEn: 'Coordinated Speech Velocity', colorClass: 'bg-purple-500/10 text-purple-700 border-purple-500/30' },
  9: { code: 'C1', nameZh: '专业精熟组 · Advanced I', nameEn: 'Expressive Complexity Speed', colorClass: 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30' },
  10: { code: 'C1', nameZh: '神经突触组 · Advanced II', nameEn: 'Advanced Dialectical Output', colorClass: 'bg-pink-500/10 text-pink-700 border-pink-500/30' },
  11: { code: 'C1+', nameZh: '极限过载组 · Professional I', nameEn: 'High-speed Cognitive Precision', colorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/30' },
  12: { code: 'C1+', nameZh: '终极直觉组 · Professional II', nameEn: 'Flawless Muscle Automaticity', colorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/30 shadow-xs' },
};

interface HomeTabProps {
  progress: UserProgress;
  locale: SupportLocale;
  onSelectStage: (stageId: number, lessonId?: number) => void;
  onResumeLesson: () => void;
}

export default function HomeTab({ progress, locale, onSelectStage, onResumeLesson }: HomeTabProps) {
  const t = MESSAGES[locale];
  // Curriculum browse helper state
  const [selectedCurriculumStage, setSelectedCurriculumStage] = useState<number>(progress.activeStageId);
  const [selectedCurriculumLesson, setSelectedCurriculumLesson] = useState<number | 'all'>('all');
  const [curriculumTab, setCurriculumTab] = useState<'questions' | 'vocabulary'>('questions');

  const questionsForStage = ALL_QUESTIONS.filter(q => q.stageId === selectedCurriculumStage);
  const vocabularyForStage = ALL_FLASHCARDS.filter(fc => fc.stageId === selectedCurriculumStage);

  const filteredQuestions = questionsForStage.filter(q => {
    if (selectedCurriculumLesson === 'all') return true;
    return q.lessonId === selectedCurriculumLesson;
  });

  const triggerSyllabusSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-md mx-auto relative pb-24 font-sans text-brand-dark">
      {/* Header Info */}
      <div className="mb-6 text-left">
        <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-normal">
          {locale === 'zh' ? '英语口语反射荷载' : 'English Vocal Reflex Load'}
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] uppercase font-bold text-brand-primary tracking-wider">
            {locale === 'zh' ? '反射级段' : 'REFLEX TIER'} STAGE {progress.activeStageId}
          </span>
          <span className="w-1 h-1 bg-brand-beige rounded-full" />
          <span className="text-xs font-semibold text-brand-dark/60">
            {progress.stageProgress[progress.activeStageId] ?? (progress.stageProgress as any)[String(progress.activeStageId)] ?? 0}% {locale === 'zh' ? '已充能' : 'Pumped'}
          </span>
        </div>
      </div>

      {/* Vertical Path */}
      <div className="relative flex flex-col items-center">
        {/* Repeating dashed line running through all circles */}
        <div 
          className="absolute left-[24px] top-8 bottom-8 w-0.5 z-0"
          style={{
            background: 'repeating-linear-gradient(to bottom, var(--color-brand-beige) 0px, var(--color-brand-beige) 8px, transparent 8px, transparent 16px)'
          }}
        />

        {ALL_STAGES.map((stage) => {
          const isCompleted = progress.completedStages.includes(stage.id);
          const isActive = progress.activeStageId === stage.id;
          const isLocked = !isCompleted && !isActive && stage.id > 2 && stage.id !== progress.activeStageId;

          const stageProgressVal = isCompleted ? 100 : (progress.stageProgress[stage.id] ?? (progress.stageProgress as any)[String(stage.id)] ?? 0);

          return (
            <div 
              key={stage.id} 
              className={`w-full relative z-10 mb-6 flex items-start gap-4 transition-all duration-300 ${
                isActive ? 'scale-[1.02] transform origin-left animate-fadeIn' : 'opacity-90 hover:opacity-100'
              }`}
            >
              {/* Left Circle Indicator */}
              <button
                onClick={() => onSelectStage(stage.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-brand-cream transition-all cursor-pointer ${
                  isCompleted 
                    ? 'bg-brand-secondary text-white shadow-sm' 
                    : isActive 
                      ? 'bg-brand-primary text-white shadow-md ring-4 ring-brand-primary/10' 
                      : 'bg-brand-beige/50 text-brand-dark/40 border-brand-beige/20'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3px]" />
                ) : isLocked ? (
                  <Lock className="w-4 h-4 text-brand-dark/30" />
                ) : (
                  <span className="text-sm font-bold font-serif">{stage.id}</span>
                )}
              </button>

              {/* Card Container with Abreast CEFR Tier badge column on Left, Stage Details on Right */}
              <div 
                onClick={() => onSelectStage(stage.id)}
                className={`flex-1 p-3 md:p-4 rounded-xl shadow-xs cursor-pointer border transition-all ${
                  isActive 
                    ? 'bg-brand-ivory border-2 border-brand-primary shadow-sm shadow-brand-primary/5' 
                    : 'bg-brand-ivory border-brand-beige/70 hover:border-brand-beige/90'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-4">
                  {/* Left Column: Side-by-side CEFR Professional Tier Badge */}
                  <div className={`sm:w-28 shrink-0 flex sm:flex-col items-center justify-between sm:justify-center text-center rounded-lg p-2.5 border transition-all ${
                    cefrLevels[stage.id]
                      ? `${cefrLevels[stage.id].colorClass} border-solid`
                      : 'bg-brand-cream/40 border-dashed border-brand-beige/80 text-brand-dark/60'
                  }`}>
                    <div className="flex flex-col items-start sm:items-center">
                      <span className="text-[8px] uppercase tracking-wider font-extrabold opacity-60 font-mono">
                        {locale === 'zh' ? '⭐ 体能对标' : '⭐ TIER'}
                      </span>
                      <strong className="text-xl md:text-2xl font-black font-mono tracking-tight text-current mt-0.5 sm:my-0.5">
                        {cefrLevels[stage.id]?.code || 'A1'}
                      </strong>
                    </div>
                    <span className="hidden sm:block w-3 h-[1px] bg-current/20 my-1" />
                    <div className="text-[9.5px] font-bold leading-tight truncate sm:whitespace-normal sm:line-clamp-2 text-current opacity-90">
                      {locale === 'zh' ? cefrLevels[stage.id]?.nameZh.split(' · ')[0] : cefrLevels[stage.id]?.nameEn}
                    </div>
                  </div>

                  {/* Right Column: Stage Practice Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start mb-1 text-left">
                        <span className="font-bold text-base text-brand-dark font-serif leading-snug">
                          {stage.title}
                        </span>
                        <span className={`text-xs font-bold ${isActive ? 'text-brand-primary' : 'text-brand-dark/50'} pt-0.5 shrink-0 ml-1`}>
                          {stageProgressVal}%
                        </span>
                      </div>
                      <p className="text-xs text-brand-dark/55 font-medium mb-3 text-left leading-relaxed">
                        {stage.subtitle}
                      </p>
                    </div>

                    <div>
                      {/* Progress Bar inside card */}
                      <div className="w-full bg-brand-cream/80 h-1.5 rounded-full overflow-hidden border border-brand-beige/30">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            isActive ? 'bg-brand-primary' : 'bg-brand-secondary'
                          }`}
                          style={{ width: `${stageProgressVal}%` }}
                        />
                      </div>

                      {isActive && (
                        <div className="mt-3 flex items-center gap-2 text-brand-primary text-xs font-semibold text-left">
                          <PlayCircle className="w-4 h-4 shrink-0" />
                          <span>{locale === 'zh' ? `下一关：第 ${progress.activeLessonId} 课` : `Next: Lesson ${progress.activeLessonId}`}</span>
                        </div>
                      )}

                      {/* Simulated locked click message */}
                      {isLocked && (
                        <span className="text-[10px] text-brand-dark/40 mt-1 block italic hover:text-brand-dark/60 text-left">
                          {locale === 'zh' ? '点按解锁此阶段' : 'Tap to unlock this stage'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Gym Workout Routines Section */}
      <div className="mt-8 w-full text-left">
        <div className="flex items-center gap-2 mb-4">
          <Dumbbell className="w-5 h-5 text-brand-secondary animate-pulse" />
          <div>
            <h3 className="font-serif font-bold text-brand-dark text-lg leading-tight">
              {locale === 'zh' ? '口语肌肉自主训练计划 (Workout Sets)' : 'Vocal Gym Workout Routines'}
            </h3>
            <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-wider mt-0.5">
              {locale === 'zh' ? '针对不同发音肌群的特训套组 (口语肌肉群与反射极化)' : 'Targeted combos designed to stimulate deep vocal muscle groups'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              id: 'rt_warmup',
              titleZh: '⚡ 声学激活 · 极速热身组',
              titleEn: 'Acoustic Mimicry · Warmup Reps',
              descZh: '基础语流极速声学感官与发音肌肉触觉刺激。在1.5倍母语音速冲击下重新感受腔体松弛与灵动呼吸。',
              descEn: 'Basic oral flows & high-speed mimicry at 1.5x. Reset speech organ coordination.',
              stageId: 1,
              lessonId: 1,
              tagZh: '发音热身 Warmup',
              tagEn: 'Warmup',
              color: 'from-orange-500/10 to-orange-500/5 hover:to-orange-500/10 border-orange-500/30 text-orange-700',
              badgeColor: 'bg-orange-500/20 text-orange-700'
            },
            {
              id: 'rt_stamina',
              titleZh: '🔋 时态负重 · 核心耐力重载',
              titleEn: 'Grammar Heavy Lift · Core Endurance',
              descZh: '重型时态与疑问句型抗阻力。通过极速组对高频负荷发音，打通句结构深层神经电信号。',
              descEn: 'Repetitive auxiliary structure lifting. Focuses on sentence patterns and speed thresholds.',
              stageId: 2,
              lessonId: 14,
              tagZh: '耐力抗阻 Power Lift',
              tagEn: 'Power Lift',
              color: 'from-blue-500/10 to-blue-500/5 hover:to-blue-500/10 border-blue-500/30 text-blue-700',
              badgeColor: 'bg-blue-500/20 text-blue-700'
            },
            {
              id: 'rt_unconscious',
              titleZh: '🧠 突触重塑 · 脑髓反射封锁',
              titleEn: 'Linguistic Neural Reflex Loop',
              descZh: '专为消灭“母语-英译-复述”的低效中继翻译链条而生。迫使咽壁与舌根在意识前瞬发吐字。',
              descEn: 'Instantly bypasses internal translation layer. Compels throat muscles to react under 0.1s.',
              stageId: 4,
              lessonId: 42,
              tagZh: '消除心译 Zero-Translate',
              tagEn: 'Zero-Translation',
              color: 'from-purple-500/10 to-purple-500/5 hover:to-purple-500/10 border-purple-500/30 text-purple-700',
              badgeColor: 'bg-purple-500/20 text-purple-700'
            }
          ].map(rt => (
            <div
              key={rt.id}
              className={`bg-gradient-to-r ${rt.color} border p-4 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]`}
            >
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${rt.badgeColor}`}>
                    {locale === 'zh' ? rt.tagZh : rt.tagEn}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-brand-dark/40">
                    STAGE {rt.stageId} · LESSON {rt.lessonId}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-1">
                  {locale === 'zh' ? rt.titleZh : rt.titleEn}
                </h4>
                <p className="text-[11px] text-brand-dark/60 font-semibold leading-relaxed mb-3">
                  {locale === 'zh' ? rt.descZh : rt.descEn}
                </p>
              </div>
              <button
                onClick={() => onSelectStage(rt.stageId, rt.lessonId)}
                className="self-end bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-brand-secondary transition-all cursor-pointer active:scale-95"
              >
                <Zap className="w-2.5 h-2.5 fill-white" />
                {locale === 'zh' ? '进入特训操练' : 'Begin Routine'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Database Panel (Real Course Data) */}
      <div id="syllabus-database" className="mt-8 bg-brand-ivory rounded-2xl border border-brand-beige p-5 shadow-[0_4px_20px_rgba(44,39,36,0.02)]">
        <div className="flex items-center gap-2 mb-4 text-left">
          <BookOpen className="w-5 h-5 text-brand-primary" />
          <div>
            <h3 className="font-serif font-bold text-brand-dark text-lg leading-tight">
              {locale === 'zh' ? '教材课程数据库' : 'Course Curriculum Database'}
            </h3>
            <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-wider mt-0.5">
              {locale === 'zh' ? '快速检索或浏览全部教材课文与核心词汇' : 'Browse All Active Lessons & Content'}
            </p>
          </div>
        </div>

        {/* Stage and Lesson Dropdowns */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
              {locale === 'zh' ? '选择教材阶段' : 'Select Stage'}
            </span>
            <select
              value={selectedCurriculumStage}
              onChange={(e) => {
                const stageId = Number(e.target.value);
                setSelectedCurriculumStage(stageId);
                setSelectedCurriculumLesson('all');
              }}
              className="w-full text-xs font-bold text-brand-dark bg-brand-cream border border-brand-beige rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-brand-primary/40 cursor-pointer"
            >
              {ALL_STAGES.map(stg => (
                <option key={stg.id} value={stg.id}>
                  {stg.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 text-left">
            <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
              {locale === 'zh' ? '选择对应课时' : 'Select Lesson'}
            </span>
            <select
              value={selectedCurriculumLesson}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedCurriculumLesson(val === 'all' ? 'all' : Number(val));
              }}
              className="w-full text-xs font-bold text-brand-dark bg-brand-cream border border-brand-beige rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-brand-primary/40 cursor-pointer"
            >
              <option value="all">{locale === 'zh' ? '📅 所有课时' : '📅 All Lessons'}</option>
              {(STAGE_LESSONS_MAP[selectedCurriculumStage] || []).map(lessonId => (
                <option key={lessonId} value={lessonId}>
                  {locale === 'zh' ? `第 ${lessonId} 课` : `Lesson ${lessonId}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Navigation Tabs */}
        <div className="grid grid-cols-2 gap-1 bg-brand-cream p-1 rounded-xl mb-4 border border-brand-beige/50">
          <button
            onClick={() => setCurriculumTab('questions')}
            className={`text-xs py-2 font-semibold rounded-lg transition-all cursor-pointer ${
              curriculumTab === 'questions'
                ? 'bg-brand-primary text-white shadow-sm'
                : 'text-brand-dark/60 hover:text-brand-dark'
            }`}
          >
            {locale === 'zh' ? `🗣️ 对话问答 (${filteredQuestions.length})` : `Dialogue Qs (${filteredQuestions.length})`}
          </button>
          <button
            onClick={() => setCurriculumTab('vocabulary')}
            className={`text-xs py-2 font-semibold rounded-lg transition-all cursor-pointer ${
              curriculumTab === 'vocabulary'
                ? 'bg-brand-primary text-white shadow-sm'
                : 'text-brand-dark/60 hover:text-brand-dark'
            }`}
          >
            {locale === 'zh' ? `📖 核心词汇 (${vocabularyForStage.length})` : `Word Vocab (${vocabularyForStage.length})`}
          </button>
        </div>

        {/* Database List */}
        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1 hide-scrollbar">
          {curriculumTab === 'questions' ? (
            filteredQuestions.length > 0 ? (
              filteredQuestions.map((q, idx) => (
                <div key={q.id} className="bg-brand-cream/40 hover:bg-brand-cream/80 p-3.5 rounded-xl border border-brand-beige/50 transition-all flex flex-col gap-2 relative">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase font-mono">
                        S.{q.stageId} - L.{q.lessonId || 'N/A'} - Q{idx + 1}
                      </span>
                      <button
                        onClick={() => onSelectStage(q.stageId, q.lessonId)}
                        className="text-[9px] bg-brand-ivory hover:bg-brand-beige/50 text-brand-primary border border-brand-beige px-2 py-0.5 rounded font-bold transition-all cursor-pointer flex items-center gap-0.5"
                        title="Enter practice mode for this lesson"
                      >
                        <Zap className="w-2.5 h-2.5 fill-brand-primary text-brand-primary" />
                        {locale === 'zh' ? '回音速练' : 'DRILL'}
                      </button>
                    </div>
                    <button
                      onClick={() => triggerSyllabusSpeak(q.questionText + " ... " + q.expectedAnswer)}
                      className="text-brand-dark/40 hover:text-brand-primary transition-colors p-1 rounded hover:bg-brand-beige/30 cursor-pointer"
                      title="Speak dialogue pair"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-brand-dark/40 uppercase tracking-wider block">
                      {locale === 'zh' ? '教材问题 / 助教提问' : 'Question Prompt'}
                    </span>
                    <p className="text-xs font-bold text-brand-dark mt-0.5 leading-snug">
                      "{q.questionText}"
                    </p>
                  </div>
                  <div className="border-t border-brand-beige/40 pt-2 mt-1 text-left">
                    <span className="text-[9px] font-bold text-brand-primary/80 uppercase tracking-wider block">
                      {locale === 'zh' ? '官方标准回答 / 肌肉反射回音' : 'Expected Answer'}
                    </span>
                    <p className="text-xs font-medium text-brand-dark/80 bg-brand-ivory/80 p-2 rounded-lg border border-brand-beige/30 mt-1 leading-relaxed">
                      {q.expectedAnswer}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-brand-dark/40 text-xs italic">
                {locale === 'zh' ? `第 ${selectedCurriculumLesson} 课暂无对话数据，请挑选其他课时！` : `No question data loaded for Lesson ${selectedCurriculumLesson} yet. Select from other lessons!`}
              </div>
            )
          ) : (
            vocabularyForStage.length > 0 ? (
              vocabularyForStage.map((word) => (
                <div key={word.id} className="bg-brand-cream/40 hover:bg-brand-cream/80 p-3.5 rounded-xl border border-brand-beige/50 transition-all flex flex-col gap-2 relative text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-serif font-bold text-sm text-brand-dark">{word.word}</span>
                      <span className="text-[10px] font-mono text-brand-dark/50">{word.phonetics}</span>
                    </div>
                    <button
                      onClick={() => triggerSyllabusSpeak(word.word + " ... Definition: " + word.definition)}
                      className="text-brand-dark/40 hover:text-brand-primary transition-colors p-1 rounded hover:bg-brand-beige/30 cursor-pointer"
                      title="Speak definition"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-brand-dark/40 uppercase tracking-wider block">
                      {locale === 'zh' ? '词义释义与音标' : 'Definition'}
                    </span>
                    <p className="text-xs text-brand-dark/75 mt-0.5 leading-relaxed">{word.definition}</p>
                  </div>
                  <div className="bg-brand-ivory/80 p-2.5 rounded-lg border border-brand-beige/30 mt-1">
                    <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider block">
                      {locale === 'zh' ? '核心联想例句' : 'Example Sentence'}
                    </span>
                    <p className="text-xs text-brand-dark/60 italic leading-relaxed mt-0.5">"{word.example}"</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-brand-dark/40 text-xs italic">
                {locale === 'zh' ? `当前 Stage ${selectedCurriculumStage} 暂无核心词汇卡片。` : `No vocabulary flashcards found for Stage ${selectedCurriculumStage} yet.`}
              </div>
            )
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={onResumeLesson}
        className="fixed bottom-22 right-5 md:right-1/3 z-40 bg-gradient-to-r from-brand-secondary to-[#e57d2a] text-white shadow-[0_8px_30px_rgba(254,151,67,0.35)] rounded-full px-5 py-3 flex items-center gap-2 active:scale-95 hover:scale-[1.03] transition-all duration-200 cursor-pointer border border-brand-secondary/30"
      >
        <Zap className="w-4 h-4 fill-white text-white animate-pulse" />
        <span className="text-xs font-bold leading-none">{locale === 'zh' ? '恢复极速速读' : 'Resume Lesson'}</span>
      </button>
    </div>
  );
}
