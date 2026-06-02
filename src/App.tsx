/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { UserProgress, SupportLocale } from './types';
import { ALL_STAGES, STAGE_LESSONS_MAP } from './data';
import HomeTab from './components/HomeTab';
import PracticeTab from './components/PracticeTab';
import ScenicTab from './components/ScenicTab';
import StatsTab from './components/StatsTab';
import ProfileTab from './components/ProfileTab';
import { MESSAGES } from './data';
import { auth, db, loginWithGoogle, logout } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { 
  Menu, 
  Activity, 
  Home, 
  Languages, 
  BarChart2, 
  User, 
  X, 
  BookOpen,
  ChevronRight,
  Info,
  Layers,
  Dumbbell,
  Compass,
  Cloud,
  CloudOff,
  CloudLightning
} from 'lucide-react';

const LOCAL_STORAGE_KEY = 'callan_app_progress_v1';

const INITIAL_PROGRESS: UserProgress = {
  activeStageId: 2, // Primary default to Stage 2 so Learning Path looks like Screen 3
  activeLessonId: 14,
  activeQuestionIndex: 0,
  activeFlashcardIndex: 0,
  completedStages: [1], // Stage 1 is 100% complete as shown in Screen 3
  stageProgress: {
    1: 100,
    2: 50,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
  },
  masteredWords: [],
  reviewLaterWords: [],
  repetitionsCount: 0,
  timeLearnedSeconds: 0
};

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load storage progress: ', e);
    }
    return INITIAL_PROGRESS;
  });

  const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
    { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' }
  ] as const;

  const [locale, setLocale] = useState<SupportLocale>('zh');
  const [activeTab, setActiveTab] = useState<'home' | 'practice' | 'scenic' | 'stats' | 'profile'>('practice');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Firebase auth & syncing state tracking
  const [user, setUser] = useState<any>(null);
  const [isProgressLoaded, setIsProgressLoaded] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const t = MESSAGES[locale];

  // Synchronize localStorage progress state
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress payload: ', e);
    }
  }, [progress]);

  // 1. Listen for user authentication changes and retrieve/create cloud progress doc
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsSyncing(true);
        try {
          const docRef = doc(db, 'progress', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProgress({
              activeStageId: data.activeStageId ?? 2,
              activeLessonId: data.activeLessonId ?? 14,
              activeQuestionIndex: data.activeQuestionIndex ?? 0,
              activeFlashcardIndex: data.activeFlashcardIndex ?? 0,
              completedStages: data.completedStages ?? [1],
              stageProgress: data.stageProgress ?? { 1: 100, 2: 50 },
              masteredWords: data.masteredWords ?? [],
              reviewLaterWords: data.reviewLaterWords ?? [],
              repetitionsCount: data.repetitionsCount ?? 0,
              timeLearnedSeconds: data.timeLearnedSeconds ?? 0
            });
          } else {
            // Document doesn't exist, seed it with the current local progress values
            await setDoc(docRef, {
              userId: currentUser.uid,
              activeStageId: progress.activeStageId,
              activeLessonId: progress.activeLessonId,
              activeQuestionIndex: progress.activeQuestionIndex,
              activeFlashcardIndex: progress.activeFlashcardIndex,
              completedStages: progress.completedStages,
              stageProgress: progress.stageProgress,
              masteredWords: progress.masteredWords,
              reviewLaterWords: progress.reviewLaterWords,
              repetitionsCount: progress.repetitionsCount,
              timeLearnedSeconds: progress.timeLearnedSeconds,
              updatedAt: serverTimestamp()
            });
          }
        } catch (e) {
          console.error("Error setting up Firestore auth user progress sync:", e);
        } finally {
          setIsProgressLoaded(true);
          setIsSyncing(false);
        }
      } else {
        setIsProgressLoaded(false);
        setIsSyncing(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // 2. Synchronize progress to cloud whenever progress values change and user is active
  useEffect(() => {
    if (!user || !isProgressLoaded) return;

    const saveToCloud = async () => {
      setIsSyncing(true);
      try {
        const docRef = doc(db, 'progress', user.uid);
        await setDoc(docRef, {
          userId: user.uid,
          activeStageId: progress.activeStageId,
          activeLessonId: progress.activeLessonId,
          activeQuestionIndex: progress.activeQuestionIndex,
          activeFlashcardIndex: progress.activeFlashcardIndex,
          completedStages: progress.completedStages,
          stageProgress: progress.stageProgress,
          masteredWords: progress.masteredWords,
          reviewLaterWords: progress.reviewLaterWords,
          repetitionsCount: progress.repetitionsCount,
          timeLearnedSeconds: progress.timeLearnedSeconds,
          updatedAt: serverTimestamp()
        });
      } catch (e) {
        console.error("Failed writing progress payload to Firebase:", e);
      } finally {
        setIsSyncing(false);
      }
    };

    const saveDebounce = setTimeout(saveToCloud, 1000);
    return () => clearTimeout(saveDebounce);
  }, [progress, user, isProgressLoaded]);

  // Handle stage selects
  const handleSelectStage = (stageId: number, lessonId?: number) => {
    setProgress(prev => {
      let activeLesson = lessonId;
      if (!activeLesson) {
        if (stageId === 4) {
          activeLesson = 42;
        } else if (stageId === 2) {
          activeLesson = 14;
        } else {
          activeLesson = STAGE_LESSONS_MAP[stageId]?.[0] || (stageId * 10 || 11);
        }
      }

      return {
        ...prev,
        activeStageId: stageId,
        activeLessonId: activeLesson,
        activeQuestionIndex: 0,
        activeFlashcardIndex: 0
      };
    });

    // Automatically navigate to Practice section
    setActiveTab('practice');
    setIsSidebarOpen(false);
  };

  const handleResumeLesson = () => {
    setActiveTab('practice');
  };

  const handleClearProgress = async () => {
    const msg = locale === 'zh' 
      ? '您确定要重置所有学习进度、跟读次数和词汇统计吗？(此操作将同时清空您的云端同步存储)'
      : 'Are you sure you want to reset all your progress, repetitions, and vocabulary stats? (This will also clear cloud synced data)';
    if (window.confirm(msg)) {
      setProgress(INITIAL_PROGRESS);

      if (user) {
        setIsSyncing(true);
        try {
          const docRef = doc(db, 'progress', user.uid);
          await setDoc(docRef, {
            userId: user.uid,
            activeStageId: INITIAL_PROGRESS.activeStageId,
            activeLessonId: INITIAL_PROGRESS.activeLessonId,
            activeQuestionIndex: INITIAL_PROGRESS.activeQuestionIndex,
            activeFlashcardIndex: INITIAL_PROGRESS.activeFlashcardIndex,
            completedStages: INITIAL_PROGRESS.completedStages,
            stageProgress: INITIAL_PROGRESS.stageProgress,
            masteredWords: INITIAL_PROGRESS.masteredWords,
            reviewLaterWords: INITIAL_PROGRESS.reviewLaterWords,
            repetitionsCount: INITIAL_PROGRESS.repetitionsCount,
            timeLearnedSeconds: INITIAL_PROGRESS.timeLearnedSeconds,
            updatedAt: serverTimestamp()
          });
        } catch (e) {
          console.error("Error clearing Firebase user doc progress:", e);
        } finally {
          setIsSyncing(false);
        }
      }

      setActiveTab('home');
      setIsSidebarOpen(false);
    }
  };

  // Auth wrappers
  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  return (
    <div className="bg-brand-cream text-brand-dark font-sans min-h-screen flex flex-col overflow-x-hidden antialiased select-none">
      
      {/* 1. Global Header App Bar */}
      <header className="bg-brand-ivory shadow-[0_1px_10px_rgba(234,223,211,0.3)] flex justify-between items-center px-5 w-full h-16 z-50 fixed top-0 left-0 border-b border-brand-beige/70 transform-gpu">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-brand-dark hover:opacity-85 active:scale-95 transition-all p-1.5 rounded-lg hover:bg-brand-cream cursor-pointer"
            id="drawer-toggle-btn"
          >
            <Menu className="w-6 h-6 stroke-[2px]" />
          </button>
          
          <h1 className="text-lg font-serif font-bold italic tracking-wide text-brand-dark select-none">
            {t.appName}
          </h1>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Dynamic Language Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(prev => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-brand-beige text-xs font-semibold text-brand-dark bg-brand-cream hover:bg-brand-beige/30 transition-all cursor-pointer active:scale-95"
              title="Select Native Help Language / 选择母语辅助语言"
            >
              <Languages className="w-3.5 h-3.5 text-brand-primary" />
              <span>{LANGUAGES.find(l => l.code === locale)?.flag} {LANGUAGES.find(l => l.code === locale)?.label}</span>
            </button>

            {showLanguageDropdown && (
              <>
                {/* Backdrop overlay */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowLanguageDropdown(false)} 
                />
                
                {/* Popover Menu list */}
                <div className="absolute right-0 mt-2 w-48 bg-brand-ivory border border-brand-beige rounded-2xl shadow-xl py-1 px-1.5 z-50 text-left">
                  <span className="text-[10px] font-black text-brand-dark/50 block px-3 py-1.5 uppercase tracking-wider font-sans">
                    Help Translation / 母语辅助
                  </span>
                  <div className="max-h-[210px] overflow-y-auto pr-0.5">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLocale(lang.code);
                          setShowLanguageDropdown(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                          locale === lang.code 
                            ? 'bg-brand-primary/10 text-brand-primary' 
                            : 'text-brand-dark/80 hover:bg-brand-cream'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base select-none leading-none">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {locale === lang.code && (
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Cloud Sync Connection Status Indicator */}
          <div 
            onClick={() => setActiveTab('profile')} 
            className="flex items-center gap-1 p-1 rounded-xl hover:bg-brand-cream cursor-pointer transition-all active:scale-95"
            title={user ? `Firebase Cloud Synced: ${user.email}` : "Offline Local Storage (Click to Bind Google Account)"}
          >
            {user ? (
              <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold">
                {isSyncing ? (
                  <CloudLightning className="w-2.5 h-2.5 animate-spin text-brand-primary" />
                ) : (
                  <Cloud className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600/10" />
                )}
                <span>{locale === 'zh' ? '已云连' : 'Synced'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 border border-amber-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold animate-pulse">
                <CloudOff className="w-2.5 h-2.5 text-amber-600" />
                <span>{locale === 'zh' ? '离线' : 'Offline'}</span>
              </div>
            )}
          </div>

          <button 
            onClick={() => setActiveTab('stats')}
            className={`text-brand-dark hover:opacity-85 active:scale-95 transition-all p-1.5 rounded-lg hover:bg-brand-cream cursor-pointer ${
              activeTab === 'stats' ? 'bg-brand-primary/10 text-brand-primary' : ''
            }`}
          >
            <Activity className="w-6 h-6 stroke-[2px]" />
          </button>
        </div>
      </header>

      {/* 2. Left Menu Drawer / Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay mask */}
          <div 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-brand-dark/50 backdrop-blur-xs transition-opacity duration-300"
          />
          
          {/* Drawer content panel */}
          <div className="relative w-80 max-w-xs bg-brand-ivory h-full shadow-2xl flex flex-col p-6 animate-slideIn border-r border-brand-beige">
            <div className="flex justify-between items-center mb-6 text-left">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇬🇧</span>
                <span className="font-serif font-bold text-base text-brand-dark">
                  {locale === 'zh' ? '口语体能训练大纲' : 'Vocal Gym Syllabus'}
                </span>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-brand-dark hover:bg-brand-cream rounded-lg p-1.5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest mb-4 text-left">
              {locale === 'zh' ? '快速切换教材阶段 (1-12)' : 'Switch Stage (1-12)'}
            </p>

            <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-1.5 pr-1 text-left">
              {ALL_STAGES.map((stg) => {
                const isActive = progress.activeStageId === stg.id;
                return (
                  <button
                    key={stg.id}
                    onClick={() => handleSelectStage(stg.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-brand-primary/10 border-brand-primary/40 text-brand-primary shadow-xs' 
                        : 'bg-brand-ivory hover:bg-brand-cream border-brand-beige/40 text-brand-dark/80'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block leading-none">{stg.title}</span>
                      <span className="text-[10px] text-brand-dark/40 font-medium block mt-1 line-clamp-1">
                        {stg.subtitle}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-brand-dark/30'}`} />
                  </button>
                );
              })}
            </div>

            <div className="border-t border-brand-beige/50 pt-4 mt-auto text-left">
              <div className="bg-brand-cream/80 rounded-xl p-3 border border-brand-beige flex gap-2 mb-4">
                <Info className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-brand-dark/60 font-medium leading-relaxed font-sans">
                  {locale === 'zh'
                    ? '口语体能训练房基于高强度的1.5倍母语声学刺激与肌肉口部反射回环。直接切换高阶阶段，可以提前体验更高级别的极速反射训练！'
                    : 'Vocal Gym conditioning is based on rapid-fire, high-frequency oral echoes. Switch stages to try higher difficulty reflex drills!'}
                </p>
              </div>

              <button
                onClick={handleClearProgress}
                className="w-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer"
              >
                {locale === 'zh' ? '重置学习统计与进度' : 'Reset stats & progress'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Container Canvas with Top Offset */}
      <main className="flex-grow pt-20 px-4 max-w-lg mx-auto w-full select-none pb-28">
        {activeTab === 'home' && (
          <HomeTab 
            progress={progress} 
            locale={locale}
            onSelectStage={handleSelectStage}
            onResumeLesson={handleResumeLesson}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeTab 
            progress={progress}
            locale={locale}
            onUpdateProgress={setProgress}
          />
        )}

        {activeTab === 'scenic' && (
          <ScenicTab 
            progress={progress}
            locale={locale}
            onUpdateProgress={setProgress}
          />
        )}

        {activeTab === 'stats' && (
          <StatsTab 
            progress={progress}
            locale={locale}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileTab 
            progress={progress}
            locale={locale}
            onClearProgress={handleClearProgress}
            user={user}
            onLogin={handleLogin}
            onLogout={handleLogout}
            isSyncing={isSyncing}
          />
        )}
      </main>

      {/* 4. Cohesive Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-brand-ivory border-t border-brand-beige h-18 safe-pb flex justify-around items-center px-2 shadow-[0_-2px_12px_rgba(44,39,36,0.04)] transform-gpu">
        
        {/* Home Tab Selector */}
        <button 
          onClick={() => { setActiveTab('home'); setIsSidebarOpen(false); }}
          className={`flex flex-col items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'home' 
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10 scale-102 font-bold animate-[rubberBand_0.4s]' 
              : 'text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2'
          }`}
        >
          <Home className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2px]" />
          <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 font-sans">{t.home}</span>
        </button>

        {/* Practice Tab Selector Button */}
        <button 
          onClick={() => { setActiveTab('practice'); setIsSidebarOpen(false); }}
          className={`flex flex-col items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'practice' 
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10 scale-102 font-bold animate-[rubberBand_0.4s]' 
              : 'text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2'
          }`}
        >
          <Dumbbell className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2px]" />
          <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 font-sans">{t.practice}</span>
        </button>

        {/* Scenic (场景速练) Tab Selector Button */}
        <button 
          onClick={() => { setActiveTab('scenic'); setIsSidebarOpen(false); }}
          className={`flex flex-col items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'scenic' 
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10 scale-102 font-bold animate-[rubberBand_0.4s]' 
              : 'text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2'
          }`}
        >
          <Compass className={`w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2px] transition-transform duration-500 ${activeTab === 'scenic' ? 'rotate-45' : ''}`} />
          <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 font-sans">{locale === 'zh' ? '场景速练' : 'Scenic'}</span>
        </button>

        {/* Stats Tab Selector */}
        <button 
          onClick={() => { setActiveTab('stats'); setIsSidebarOpen(false); }}
          className={`flex flex-col items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'stats' 
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10 scale-102 font-bold animate-[rubberBand_0.4s]' 
              : 'text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2'
          }`}
        >
          <BarChart2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2px]" />
          <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 font-sans">{t.stats}</span>
        </button>

        {/* Profile Tab Selector */}
        <button 
          onClick={() => { setActiveTab('profile'); setIsSidebarOpen(false); }}
          className={`flex flex-col items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'profile' 
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10 scale-102 font-bold animate-[rubberBand_0.4s]' 
              : 'text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2'
          }`}
        >
          <User className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2px]" />
          <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 font-sans">{t.profile}</span>
        </button>
        
      </nav>

    </div>
  );
}
