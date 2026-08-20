import type { PageId } from '../types';

const items: Array<[PageId, string, string]> = [['dashboard', 'Пульт', '01'], ['roadmap', 'Маршрут', '02'], ['today', 'Сегодня', '03'], ['pomodoro', 'Таймер', '04'], ['resources', 'Материалы', '05'], ['activity', 'Активность', '06'], ['reviews', 'Повторение', '07'], ['report', 'Отчёт', '08'], ['data', 'Данные', '09']];
export function Chrome({ page, onPage, children, compact }: { page: PageId; onPage: (page: PageId) => void; children: React.ReactNode; compact: boolean }) {
  return <div className={compact ? 'app compact' : 'app'}>
    <header className="topbar"><button className="wordmark" onClick={() => onPage('dashboard')} aria-label="Открыть пульт"><span>КОНТУР</span><small>// APPSEC TRAJECTORY</small></button><div className="top-meta"><span>SECURITY CLEARANCE: STUDENT</span><span className="status-dot" /> STATUS: ACTIVE</div></header>
    <nav className="nav" aria-label="Основная навигация">{items.map(([id, label, num]) => <button key={id} className={page === id ? 'active' : ''} onClick={() => onPage(id)}><small>{num}</small>{label}</button>)}</nav>
    <main>{children}</main><footer><span>УЗЕЛ 04 // LOCAL-FIRST</span><span>REV. 2026</span></footer>
  </div>;
}
