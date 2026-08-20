import type { StoredUserState, UserState } from '../types';
import { dateKey } from './date';

const KEY = 'appsec-console-state-v1';
export const initialState = (): UserState => ({ version: 2, progress: {}, dailyLogs: [], reviews: {}, checkpoints: {}, practiceCases: [], settings: { startDate: dateKey(), weeklyTarget: 240, compactMode: false, crtEnabled: true, bootSeen: false }, backup: {} });
export function loadState(): UserState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialState();
    const parsed: unknown = JSON.parse(raw);
    if (!isState(parsed)) return initialState();
    return normalizeState(parsed);
  } catch { return initialState(); }
}
export function saveState(state: UserState): void { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage may be unavailable */ } }
export function normalizeState(value: StoredUserState): UserState {
  const initial = initialState();
  return { ...initial, ...value, version: 2, practiceCases: Array.isArray(value.practiceCases) ? value.practiceCases : [], settings: { ...initial.settings, ...value.settings }, backup: value.backup ?? {} };
}
export function isState(value: unknown): value is StoredUserState {
  if (!value || typeof value !== 'object') return false;
  const obj = value as Record<string, unknown>;
  return (obj.version === 1 || obj.version === 2) && typeof obj.progress === 'object' && Array.isArray(obj.dailyLogs) && typeof obj.settings === 'object';
}
export const storageKey = KEY;
