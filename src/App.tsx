import { useEffect, useState } from 'react';
import { Chrome } from './components/Chrome';
import { TopicPanel } from './components/TopicPanel';
import { topicById } from './data/curriculum';
import { useAppState } from './hooks/useAppState';
import { ActivityPage } from './pages/ActivityPage';
import { DashboardPage } from './pages/DashboardPage';
import { DataPage } from './pages/DataPage';
import { LibraryPage } from './pages/LibraryPage';
import { PomodoroPage } from './pages/PomodoroPage';
import { ReportPage } from './pages/ReportPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { TodayPage } from './pages/TodayPage';
import type { PageId } from './types';
import { daysBetween } from './utils/date';

export default function App() {
  const api = useAppState(); const [page, setPage] = useState<PageId>('dashboard'); const [topicId, setTopicId] = useState<string>(); const [boot, setBoot] = useState(!api.state.settings.bootSeen);
  useEffect(() => { if (!boot) return; const timer = window.setTimeout(() => { setBoot(false); api.setSettings({ bootSeen: true }); }, 650); return () => clearTimeout(timer); }, [boot, api]);
  const topic = topicId ? topicById[topicId] : undefined;
  const openTopic = (id: string) => setTopicId(id);
  const route = () => { switch (page) { case 'dashboard': return <DashboardPage state={api.state} onTopic={openTopic} onPage={setPage} />; case 'roadmap': return <RoadmapPage state={api.state} onTopic={openTopic} onCheckpoint={api.setCheckpoint} />; case 'today': return <TodayPage state={api.state} onSave={api.saveLog} />; case 'pomodoro': return <PomodoroPage />; case 'resources': return <LibraryPage state={api.state} onTopic={openTopic} />; case 'activity': return <ActivityPage state={api.state} onDelete={api.removeLog} />; case 'reviews': return <ReviewsPage state={api.state} onAnswer={api.answerReview} onTopic={openTopic} />; case 'report': return <ReportPage state={api.state} />; case 'data': return <DataPage state={api.state} onExport={api.markExported} onImport={api.importState} onReset={api.reset} onSettings={api.setSettings} />; } };
  const day = daysBetween(api.state.settings.startDate) + 1;
  return <><Chrome page={page} onPage={setPage} compact={api.state.settings.compactMode}>{route()}</Chrome>{!api.state.settings.crtEnabled && <style>{'.app:before{display:none}'}</style>}<div className="day-counter">ДЕНЬ {day}</div>{topic && <TopicPanel topic={topic} progress={api.state.progress[topic.id]} onClose={() => setTopicId(undefined)} onSave={patch => api.setProgress(topic.id, patch)} />}{boot && <div className="boot" aria-live="polite"><div><b>ЗАПУСК ПУТИ APPSEC</b><span>ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ... ГОТОВО</span><span>ПРОГРАММА ОБУЧЕНИЯ ... ЗАГРУЖЕНА</span><span>ОПЕРАТОР ............. ГОТОВ</span></div></div>}</>;
}
