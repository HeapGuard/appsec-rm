import { useEffect, useMemo, useState } from 'react';
import type { DailyLog, PracticeCase, StoredUserState, TopicProgress, UserState } from '../types';
import { addDays, dateKey } from '../utils/date';
import { initialState, loadState, normalizeState, saveState } from '../utils/storage';

const reviewIntervals = [1, 3, 7, 14, 30, 60];
export function useAppState() {
  const [state, setState] = useState<UserState>(loadState);
  useEffect(() => { saveState(state); }, [state]);
  const api = useMemo(() => ({
    setProgress: (topicId: string, patch: Partial<TopicProgress>) => setState(s => {
      const current = s.progress[topicId] ?? { status: 0, confidence: 0, notes: '', explanation: '', updatedAt: dateKey() };
      const next = { ...current, ...patch, updatedAt: new Date().toISOString() };
      const reviews = { ...s.reviews };
      if (patch.status === 3 && current.status !== 3) reviews[topicId] = { stage: 0, nextReview: addDays(dateKey(), 1), answers: {}, totalReviews: 0 };
      if (patch.status !== undefined && patch.status < 3 && current.status === 3) delete reviews[topicId];
      return { ...s, progress: { ...s.progress, [topicId]: next }, reviews };
    }),
    saveLog: (log: DailyLog) => setState(s => ({ ...s, dailyLogs: [...s.dailyLogs.filter(item => item.date !== log.date), log] })),
    removeLog: (id: string) => setState(s => ({ ...s, dailyLogs: s.dailyLogs.filter(log => log.id !== id) })),
    savePracticeCase: (item: PracticeCase) => setState(s => ({ ...s, practiceCases: [...s.practiceCases.filter(existing => existing.id !== item.id), item] })),
    removePracticeCase: (id: string) => setState(s => ({ ...s, practiceCases: s.practiceCases.filter(item => item.id !== id), dailyLogs: s.dailyLogs.map(log => log.practiceCaseId === id ? { ...log, practiceCaseId: undefined } : log) })),
    answerReview: (topicId: string, result: 'again' | 'hard' | 'good' | 'easy', answers: Record<string, string>) => setState(s => {
      const old = s.reviews[topicId]; if (!old) return s;
      const change = result === 'again' ? -1 : result === 'hard' ? 0 : result === 'good' ? 1 : 2;
      const stage = Math.max(0, Math.min(reviewIntervals.length - 1, old.stage + change));
      const confidence = Math.max(0, Math.min(5, (s.progress[topicId]?.confidence ?? 0) + (result === 'again' ? -1 : result === 'easy' ? 1 : 0)));
      return { ...s, progress: { ...s.progress, [topicId]: { ...(s.progress[topicId] ?? { status: 3, notes: '', explanation: '', updatedAt: '' }), confidence, updatedAt: new Date().toISOString() } }, reviews: { ...s.reviews, [topicId]: { stage, nextReview: addDays(dateKey(), result === 'again' ? 1 : reviewIntervals[stage]), answers, totalReviews: old.totalReviews + 1 } } };
    }),
    setCheckpoint: (id: string, value: 0 | 1 | 2) => setState(s => ({ ...s, checkpoints: { ...s.checkpoints, [id]: value } })),
    setSettings: (patch: Partial<UserState['settings']>) => setState(s => ({ ...s, settings: { ...s.settings, ...patch } })),
    markExported: () => setState(s => ({ ...s, backup: { lastExportAt: new Date().toISOString() } })),
    importState: (next: StoredUserState) => setState(normalizeState(next)), reset: () => setState(initialState())
  }), []);
  return { state, ...api };
}
