import type { DailyLog } from '../types';
import { dateKey, fullDate, minutesText } from '../utils/date';
export function Heatmap({ logs, days = 365, onSelect }: { logs: DailyLog[]; days?: number; onSelect?: (log: DailyLog) => void }) {
  const map = new Map(logs.map(log => [log.date, log])); const today = new Date(); const cells = Array.from({ length: days }, (_, idx) => { const d = new Date(today); d.setDate(today.getDate() - (days - 1 - idx)); const key = dateKey(d); const log = map.get(key); const level = !log ? 0 : log.minutes <= 20 ? 1 : log.minutes <= 45 ? 2 : log.minutes <= 90 ? 3 : 4; return { key, log, level }; });
  return <div className="heatmap" aria-label="Календарь учебной активности">{cells.map(({ key, log, level }) => <button key={key} className={`heat heat-${level}`} aria-label={`${fullDate(key)}: ${log ? `${minutesText(log.minutes)}, ${log.topicIds.length} тем` : 'нет активности'}`} title={`${fullDate(key)}${log ? ` — ${minutesText(log.minutes)}, ${log.topicIds.length} тем` : ' — нет активности'}`} onClick={() => log && onSelect?.(log)} />)}</div>;
}
