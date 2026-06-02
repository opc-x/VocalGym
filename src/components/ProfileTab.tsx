import { UserProgress, Achievement, SupportLocale } from '../types';
import { ALL_ACHIEVEMENTS, MESSAGES } from '../data';
import { 
  Clock, 
  Repeat, 
  Flame, 
  Award, 
  CalendarDays, 
  Zap, 
  Lock, 
  CheckCircle,
  Cloud,
  CloudOff,
  CloudLightning,
  LogIn,
  LogOut,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

interface ProfileTabProps {
  progress: UserProgress;
  locale: SupportLocale;
  onClearProgress: () => void;
  user: any;
  onLogin: () => void;
  onLogout: () => void;
  isSyncing: boolean;
}

export default function ProfileTab({ 
  progress, 
  locale, 
  onClearProgress,
  user,
  onLogin,
  onLogout,
  isSyncing
}: ProfileTabProps) {
  const t = MESSAGES[locale];
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  // Derive display stats
  const totalReps = 1240 + progress.repetitionsCount;
  const hoursLearned = (42.5 + (progress.timeLearnedSeconds / 3600)).toFixed(1);
  const streak = 12; // Static base + custom state if they match criteria

  return (
    <div className="max-w-md mx-auto pb-24 font-sans text-brand-dark">
      
      {/* 1. Firebase Cloud Sync Status Block */}
      <section className="mb-6 p-4 rounded-2xl border bg-brand-ivory shadow-xs border-brand-beige text-left">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-1.5 text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Cloud className="w-3.5 h-3.5" />
                <span>{locale === 'zh' ? '云端同步已开启' : 'Cloud Synced'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-brand-primary bg-brand-primary/15 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <CloudOff className="w-3.5 h-3.5" />
                <span>{locale === 'zh' ? '本地暂存 (未登录)' : 'Local Only'}</span>
              </div>
            )}
            {isSyncing && (
              <span className="flex items-center gap-1 text-[10px] text-brand-primary font-bold animate-pulse">
                <CloudLightning className="w-3 h-3 animate-spin text-brand-primary" />
                <span>{locale === 'zh' ? '同步中...' : 'Syncing...'}</span>
              </span>
            )}
          </div>
          <span className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-wider">Google Cloud / Firebase</span>
        </div>

        {user ? (
          <div className="flex flex-col gap-3">
            <p className="text-[11px] text-brand-dark/60 leading-relaxed">
              {locale === 'zh' 
                ? '您的跟读历史、每日打卡和核心词汇数据正保存在 Firebase 云端。无论你在 AI Studio 预览、本端开发，还是将来导出至本地修改，只要登录相同账号，数据都会自动加载。'
                : 'Your repetitions, daily streak, and vocabulary data are synchronized of Google Cloud. Progress loads automatically wherever you log in.'}
            </p>
            <div className="flex items-center justify-between border-t border-brand-beige/40 pt-2.5">
              <div className="text-[11px] text-brand-dark/40 font-medium">
                {locale === 'zh' ? '已绑定：' : 'Linked:'} <span className="font-bold text-brand-dark">{user.email}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-1 px-3 py-1.5 bg-brand-cream hover:bg-brand-beige/50 border border-brand-beige text-brand-dark/80 hover:text-brand-primary rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{locale === 'zh' ? '退出登录' : 'Sign Out'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-[11px] text-brand-dark/60 leading-relaxed">
              {locale === 'zh' 
                ? '提示：当前使用的是本尊独立离线缓存。为防止数据丢失，也为了在您导出项目至本地客户端（例如 VS Code）二次开发后进度依然永久保存，建议立即绑定 Google 账号同步云端所有指标！'
                : 'Notice: Using local browser cache. Enable Google Cloud Sync to secure your scores and allow syncing between AI Studio, Github, and dev clients.'}
            </p>
            <button
              onClick={onLogin}
              className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white hover:opacity-95 py-2.5 px-4 rounded-xl text-xs font-bold shadow-sm shadow-brand-primary/10 transition-all cursor-pointer active:scale-98 border border-brand-primary/20"
            >
              <LogIn className="w-4 h-4" />
              <span>{locale === 'zh' ? '绑定 Google 账号 激活云端同步' : 'Link Google Account & Sync'}</span>
            </button>
          </div>
        )}
      </section>

      {/* Profile Header Section */}
      <section className="mb-6 flex flex-col items-center text-center">
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-full border-4 border-brand-primary p-1 bg-brand-ivory shadow-xs">
            <img 
              alt="User Avatar" 
              className="w-full h-full rounded-full object-cover" 
              src={user?.photoURL || "https://lh3.googleusercontent.com/aida-public/AB6AXuDn-enr942s2XZbBw0bGMxB_NouD1T6T4dGaOuwffTDyUeSCcM-r7T16_jSxhi3xUzuqw7gwrYRIbKGf8NovzgxfE9XDAUvEyn06l3sMAjHcbJVrDjlxIawtTDoHakbUbF6QEZ0rpio_xEWHL0rNRYaJYDQt8Ij6mCndRHA5hOq25esWU3LPIs3C9nzGMJuPN181wN6J8TKQp9XehvLvk48wNn4vZIpsO5VdJy708djDziQuMQjEV-L6Tt_OZNXyLpqw3miWnPK2XCj"}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-brand-ivory shadow-xs">
            <Flame className="w-4 h-4 fill-white text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-serif font-bold text-brand-dark">
          {user ? (user.displayName || '在线学员') : (locale === 'zh' ? '访客学员' : 'Guest Learner')}
        </h2>
        <p className="text-xs font-bold text-brand-dark/50 tracking-wider uppercase mt-0.5">Stage {progress.activeStageId} - Intermediate</p>
        <div className="flex items-center gap-1 text-brand-primary text-xs font-bold uppercase tracking-wider mt-1.5 bg-brand-primary/5 px-2.5 py-0.5 rounded-full border border-brand-primary/10">
          <CheckCircle className="w-3.5 h-3.5 fill-brand-primary text-brand-ivory" />
          <span>{user ? (locale === 'zh' ? '云端授权学员' : 'Cloud Sworn') : (locale === 'zh' ? '本地暂存' : 'Guest Active')}</span>
        </div>
      </section>

      {/* Key Stats Grid */}
      <section className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-brand-ivory p-4 rounded-xl shadow-xs border border-brand-beige flex flex-col items-center">
          <Clock className="w-6 h-6 text-brand-primary mb-1" />
          <span className="text-2xl font-serif font-bold text-brand-dark">{hoursLearned}h</span>
          <span className="text-xs text-brand-dark/50 font-medium font-sans">{locale === 'zh' ? '累计时长' : 'Time Learned'}</span>
        </div>
        <div className="bg-brand-ivory p-4 rounded-xl shadow-xs border border-brand-beige flex flex-col items-center">
          <Repeat className="w-6 h-6 text-brand-primary mb-1" />
          <span className="text-2xl font-serif font-bold text-brand-dark">{totalReps.toLocaleString()}</span>
          <span className="text-xs text-brand-dark/50 font-medium font-sans">{locale === 'zh' ? '练习跟读数' : 'Repetitions'}</span>
        </div>
      </section>

      {/* Activity Chart Section */}
      <section className="bg-brand-ivory p-5 rounded-xl shadow-xs border border-brand-beige mb-6">
        <div className="flex justify-between items-end mb-5 text-left">
          <div>
            <h3 className="text-base font-serif font-bold text-brand-dark">{locale === 'zh' ? '单周跟读活跃度' : 'Weekly Activity'}</h3>
            <p className="text-xs text-brand-dark/50 font-medium">{locale === 'zh' ? '过去 7 天练习轨迹' : 'Last 7 days progress'}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-brand-primary text-3xl font-serif font-bold leading-none">{streak}</span>
            <span className="text-[10px] text-brand-dark/50 font-bold uppercase mt-1">{locale === 'zh' ? '连续学习天数' : 'Day Streak'}</span>
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="flex justify-between items-end h-28 gap-2 px-1">
          {[
            { label: 'M', value: 'h-1/2', active: false },
            { label: 'T', value: 'h-3/4', active: false },
            { label: 'W', value: 'h-full', active: true },
            { label: 'T', value: 'h-2/3', active: false },
            { label: 'F', value: 'h-1/3', active: false },
            { label: 'S', value: 'h-1/2', active: false },
            { label: 'S', value: 'h-1/4', active: false },
          ].map((bar, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div 
                className={`w-full rounded-t-sm transition-all duration-700 ${
                  bar.active ? 'bg-brand-primary' : 'bg-brand-cream border-t border-brand-beige'
                } ${bar.value}`} 
              />
              <span className={`text-[10px] font-bold ${
                bar.active ? 'text-brand-primary font-black' : 'text-brand-dark/40'
              }`}>{bar.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-serif font-bold text-brand-dark">{locale === 'zh' ? '成就勋章' : 'Achievements'}</h3>
          <button 
            onClick={() => setSelectedAchievement(ALL_ACHIEVEMENTS[0])}
            className="text-brand-primary text-xs font-bold hover:underline cursor-pointer"
          >
            {locale === 'zh' ? '查看全部' : 'View all'}
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {ALL_ACHIEVEMENTS.map((ach) => {
            const isUnlocked = ach.id !== 'ach_speed' || progress.repetitionsCount > 5;
            const updatedAch = { ...ach, unlocked: isUnlocked };

            return (
              <div 
                key={ach.id} 
                onClick={() => setSelectedAchievement(updatedAch)}
                className={`min-w-[130px] p-4 rounded-xl border transition-all cursor-pointer text-center ${
                  updatedAch.unlocked 
                    ? 'bg-brand-ivory border-brand-beige shadow-xs hover:border-brand-primary'
                    : 'bg-brand-cream/40 border-dashed border-brand-beige opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  updatedAch.unlocked 
                    ? ach.colorType === 'primary' 
                      ? 'bg-brand-secondary/15 text-brand-secondary' 
                      : 'bg-brand-primary/15 text-brand-primary'
                    : 'bg-brand-beige/50 text-brand-dark/30'
                }`}>
                  {updatedAch.unlocked ? (
                    ach.icon === 'Award' ? <Award className="w-6 h-6 stroke-[2px]" /> :
                    ach.icon === 'CalendarDays' ? <CalendarDays className="w-6 h-6 stroke-[2px]" /> :
                    ach.icon === 'Repeat' ? <Repeat className="w-6 h-6 stroke-[2px]" /> :
                    <Zap className="w-6 h-6 stroke-[2px]" />
                  ) : (
                    <Lock className="w-5 h-5 text-brand-dark/40" />
                  )}
                </div>
                <p className="text-xs font-bold text-brand-dark leading-tight line-clamp-1 font-serif">
                  {locale === 'zh' ? (ach.id === 'ach_streak' ? '极速回音' : ach.id === 'ach_calendar' ? '打卡模范' : ach.id === 'ach_reps' ? '跟读大师' : '超音速手速') : ach.title}
                </p>
                <p className="text-[10px] text-brand-dark/40 mt-1 font-semibold italic">
                  {updatedAch.unlocked ? (locale === 'zh' ? '已解锁' : 'Unlocked') : (locale === 'zh' ? '未解锁' : 'Locked')}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-brand-dark/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-brand-ivory rounded-2xl max-w-sm w-full p-6 text-center shadow-xl border border-brand-beige relative">
            <h4 className="text-xl font-serif font-bold text-brand-dark mt-2 mb-1">{selectedAchievement.title}</h4>
            <p className="text-xs text-brand-dark/60 font-medium mb-4">{selectedAchievement.description}</p>
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 bg-brand-primary/10 text-brand-primary border border-brand-primary/20`}>
              {selectedAchievement.icon === 'Award' ? <Award className="w-10 h-10" /> :
               selectedAchievement.icon === 'CalendarDays' ? <CalendarDays className="w-10 h-10" /> :
               selectedAchievement.icon === 'Repeat' ? <Repeat className="w-10 h-10" /> :
               <Zap className="w-10 h-10" />}
            </div>
            <button 
              onClick={() => setSelectedAchievement(null)}
              className="w-full bg-brand-primary text-white py-2.5 rounded-xl text-xs font-bold hover:opacity-95 transition-colors cursor-pointer"
            >
              Great!
            </button>
          </div>
        </div>
      )}

      {/* Admin Panel / Options */}
      <section className="mt-8 border-t border-brand-beige pt-6 text-left">
        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/60 mb-3 font-serif">{locale === 'zh' ? '常规设置' : 'Settings'}</h4>
        <button 
          onClick={onClearProgress}
          className="w-full bg-brand-cream hover:bg-brand-cream/80 text-brand-primary border border-brand-beige py-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
        >
          {locale === 'zh' ? '重置本地与云端学习数据' : 'Reset Learning Data & Progress'}
        </button>
      </section>
    </div>
  );
}
