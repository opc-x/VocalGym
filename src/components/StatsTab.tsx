import { UserProgress, SupportLocale } from '../types';
import { ALL_STAGES, ALL_FLASHCARDS, MESSAGES } from '../data';
import { 
  BarChart4, 
  CheckCircle, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  HelpCircle, 
  ListRestart,
  Bookmark,
  Award
} from 'lucide-react';

interface StatsTabProps {
  progress: UserProgress;
  locale: SupportLocale;
}

export default function StatsTab({ progress, locale }: StatsTabProps) {
  const t = MESSAGES[locale];
  // Derive details
  const totalReps = 1240 + progress.repetitionsCount;
  const hoursLearnedStr = (42.5 + (progress.timeLearnedSeconds / 3600)).toFixed(1);

  // Vocabulary counts
  const masteredCount = progress.masteredWords.length;
  const reviewCount = progress.reviewLaterWords.length;
  const unstudiedCount = Math.max(0, ALL_FLASHCARDS.length - masteredCount - reviewCount);

  // Find mastered and review later word items
  const masteredItems = ALL_FLASHCARDS.filter(fc => progress.masteredWords.includes(fc.id));
  const reviewItems = ALL_FLASHCARDS.filter(fc => progress.reviewLaterWords.includes(fc.id));

  return (
    <div className="max-w-md mx-auto pb-24 font-sans text-brand-dark">
      <div className="mb-6 text-left">
        <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-normal">
          {locale === 'zh' ? '学习数据分析' : 'Performance Analytics'}
        </h2>
        <p className="text-xs text-brand-dark/50 font-medium mt-0.5">
          {locale === 'zh' ? '口语体能肌肉条件反射法实时发音诊断指标' : 'Real-time VocalGym reflex diagnostics feed'}
        </p>
      </div>

      {/* Stats Quick Cards Grid */}
      <section className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-brand-ivory p-4 rounded-xl shadow-xs border border-brand-beige/70 flex flex-col justify-between text-left">
          <BookOpen className="w-5 h-5 text-brand-primary mb-2" />
          <div>
            <span className="text-[10px] text-brand-dark/40 font-bold block uppercase tracking-wider">
              {locale === 'zh' ? '已背核心词语' : 'Vocab Studied'}
            </span>
            <span className="text-2xl font-serif font-bold text-brand-dark">
              {masteredCount + reviewCount} / {ALL_FLASHCARDS.length}
            </span>
          </div>
        </div>

        <div className="bg-brand-ivory p-4 rounded-xl shadow-xs border border-brand-beige/70 flex flex-col justify-between text-left">
          <TrendingUp className="w-5 h-5 text-brand-secondary mb-2" />
          <div>
            <span className="text-[10px] text-brand-dark/40 font-bold block uppercase tracking-wider">
              {locale === 'zh' ? '跟读肌肉准确率' : 'Rep Accuracy'}
            </span>
            <span className="text-2xl font-serif font-bold text-brand-dark">
              {progress.repetitionsCount > 0 ? '92%' : '88%'}
            </span>
          </div>
        </div>
      </section>

      {/* Vocabulary Mastery Ratio */}
      <section className="bg-brand-ivory p-5 rounded-xl shadow-xs border border-brand-beige/70 mb-6 text-left">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/80 mb-4 font-serif">
          {locale === 'zh' ? '词汇表归纳库分布' : 'Vocabulary Storage Breakdown'}
        </h3>

        <div className="flex justify-between text-[11px] text-brand-dark/60 font-medium mb-2">
          <span>{locale === 'zh' ? '完美掌握' : 'Mastered'} ({masteredCount})</span>
          <span>{locale === 'zh' ? '稍后复习' : 'Review Later'} ({reviewCount})</span>
        </div>

        {/* Master ratio multi-color progress track */}
        <div className="w-full h-3 bg-brand-cream rounded-full overflow-hidden flex border border-brand-beige/40">
          {masteredCount > 0 && (
            <div 
              className="bg-brand-secondary h-full transition-all duration-500" 
              style={{ width: `${(masteredCount / ALL_FLASHCARDS.length) * 100}%` }}
            />
          )}
          {reviewCount > 0 && (
            <div 
              className="bg-brand-primary h-full transition-all duration-500" 
              style={{ width: `${(reviewCount / ALL_FLASHCARDS.length) * 100}%` }}
            />
          )}
          {unstudiedCount > 0 && (
            <div 
              className="bg-brand-beige/30 h-full flex-1"
            />
          )}
        </div>

        <div className="flex gap-4 mt-4 text-[10px] font-bold text-brand-dark/50 justify-center">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
            <span>{locale === 'zh' ? '掌握词汇' : 'Mastered'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-brand-primary rounded-full" />
            <span>{locale === 'zh' ? '需要复习' : 'Review Later'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-brand-beige/50 rounded-full" />
            <span>{locale === 'zh' ? '未开始' : 'Unstudied'}</span>
          </div>
        </div>
      </section>

      {/* Vocabulary Logs Lists (Mastered & Review) */}
      <section className="bg-brand-ivory p-5 rounded-xl shadow-xs border border-brand-beige/70 mb-6 font-sans text-left">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/80 mb-3 font-serif">
          {locale === 'zh' ? '当前已背词汇列表' : 'Stage Words Studied'}
        </h3>

        {/* Mastered items */}
        {masteredItems.length > 0 && (
          <div className="mb-4">
            <span className="text-[10px] font-extrabold text-brand-secondary uppercase tracking-wider block mb-2">
              ✓ {locale === 'zh' ? '已掌握官方经典表达' : 'Mastered English Phrases'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {masteredItems.map(item => (
                <span 
                  key={item.id} 
                  className="bg-brand-secondary/10 text-brand-secondary text-xs px-2.5 py-1 rounded-full border border-brand-secondary/20 font-semibold"
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Review Later Items */}
        {reviewItems.length > 0 && (
          <div>
            <span className="text-[10px] font-extrabold text-brand-primary uppercase tracking-wider block mb-2">
              ⚠ {locale === 'zh' ? '需稍后复习重难点' : 'Review Later Items'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {reviewItems.map(item => (
                <span 
                  key={item.id} 
                  className="bg-brand-primary/10 text-brand-primary text-xs px-2.5 py-1 rounded-full border border-brand-primary/20 font-semibold"
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>
        )}

        {masteredItems.length === 0 && reviewItems.length === 0 && (
          <p className="text-xs text-brand-dark/40 italic text-center py-2">
            {locale === 'zh' 
              ? '"您还没有归纳核心词汇。请在核心词卡训练中左右划动分类！"'
              : '"No words stored yet. Start swiping cards in the Practice tab!"'}
          </p>
        )}
      </section>

      {/* Stage Breakdown Progress List */}
      <section className="bg-brand-ivory p-5 rounded-xl shadow-xs border border-brand-beige/70 text-left">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/80 mb-4 font-serif">
          {locale === 'zh' ? '大纲关卡解锁进度' : 'Lock/Unlock Stage Grid Status'}
        </h3>
        
        <div className="flex flex-col gap-3">
          {ALL_STAGES.slice(0, 4).map(stage => {
            const isCompleted = progress.completedStages.includes(stage.id);
            const isActive = progress.activeStageId === stage.id;
            const progressVal = isCompleted ? 100 : (isActive ? progress.stageProgress[stage.id] || 0 : 0);

            return (
              <div key={stage.id} className="flex items-center justify-between text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    isCompleted ? 'bg-brand-secondary' : isActive ? 'bg-brand-primary' : 'bg-brand-beige'
                  }`} />
                  <span className="font-bold text-brand-dark/90 font-serif text-sm">{stage.title}</span>
                </div>
                <div className="flex items-center gap-3 w-32 justify-end">
                  <div className="w-20 bg-brand-cream h-1.5 rounded-full overflow-hidden border border-brand-beige/30">
                    <div 
                      className={`h-full ${isCompleted ? 'bg-brand-secondary' : 'bg-brand-primary'}`}
                      style={{ width: `${progressVal}%` }}
                    />
                  </div>
                  <span className="font-bold text-brand-dark/50 w-6 text-right">{progressVal}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
