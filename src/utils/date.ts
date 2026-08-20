export const dateKey = (date = new Date()): string => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};
export const fromKey = (key: string): Date => new Date(`${key}T12:00:00`);
export const shortDate = (key: string): string => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(fromKey(key));
export const fullDate = (key: string): string => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(fromKey(key));
export const addDays = (key: string, days: number): string => { const d = fromKey(key); d.setDate(d.getDate() + days); return dateKey(d); };
export const daysBetween = (from: string, to = dateKey()): number => Math.max(0, Math.floor((fromKey(to).getTime() - fromKey(from).getTime()) / 86400000));
export const minutesText = (minutes: number): string => minutes < 60 ? `${minutes} мин` : `${Math.floor(minutes / 60)} ч${minutes % 60 ? ` ${minutes % 60} мин` : ''}`;
