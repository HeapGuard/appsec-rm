import { stages, topicById, topics } from '../data/curriculum';
import type { DailyLog, UserState } from '../types';
import { dateKey, daysBetween } from './date';

export const statusName = ['Не начато', 'Изучаю', 'Практиковал', 'Могу объяснить'];
export function statusCount(state: UserState, status: number): number { return topics.filter(topic => (state.progress[topic.id]?.status ?? 0) === status).length; }
export function masteredCount(state: UserState): number { return statusCount(state, 3); }
export function totalMinutes(logs: DailyLog[]): number { return logs.reduce((sum, log) => sum + log.minutes, 0); }
export function activeDays(logs: DailyLog[]): number { return new Set(logs.map(log => log.date)).size; }
export function currentStreak(logs: DailyLog[]): number { const keys = new Set(logs.map(log => log.date)); let cursor = dateKey(); if (!keys.has(cursor)) { const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); cursor = dateKey(yesterday); } let result = 0; while (keys.has(cursor)) { result++; const d = new Date(`${cursor}T12:00:00`); d.setDate(d.getDate() - 1); cursor = dateKey(d); } return result; }
export function longestStreak(logs: DailyLog[]): number { const sorted = [...new Set(logs.map(log => log.date))].sort(); let best = 0; let run = 0; let previous = ''; for (const key of sorted) { run = previous && daysBetween(previous, key) === 1 ? run + 1 : 1; best = Math.max(best, run); previous = key; } return best; }
export function nextObjective(state: UserState) {
  const today = dateKey(); const overdue = Object.entries(state.reviews).find(([, review]) => review.nextReview <= today);
  if (overdue) return { type: 'review' as const, topic: topicById[overdue[0]], text: 'Сначала коротко проверь тему из очереди повторения.' };
  const stage = stages.find(item => item.topicIds.some(id => (state.progress[id]?.status ?? 0) < 3)) ?? stages.at(-1)!;
  const current = stage.topicIds.map(id => topicById[id]).find(topic => (state.progress[topic.id]?.status ?? 0) < 3);
  if (!current) return { type: 'checkpoint' as const, stage, text: 'Этап пройден: сверяйся с checkpoint и переходи дальше.' };
  const status = state.progress[current.id]?.status ?? 0;
  return { type: 'topic' as const, topic: current, text: status === 1 ? 'Теория отмечена: сделай небольшую практику.' : status === 2 ? 'Практика есть: объясни тему своими словами.' : 'Открой тему и начни с короткого вводного материала.' };
}
export function mostStudiedArea(state: UserState): string { const total = new Map<string, number>(); for (const log of state.dailyLogs) for (const id of log.topicIds) { const area = topicById[id]?.area; if (area) total.set(area, (total.get(area) ?? 0) + 1); } return [...total.entries()].sort((a,b) => b[1] - a[1])[0]?.[0] ?? '—'; }
