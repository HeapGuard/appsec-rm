import { useState } from 'react';
import type { PageId } from '../types';

const items: Array<[PageId, string, string]> = [['dashboard', 'Пульт', '01'], ['roadmap', 'Маршрут', '02'], ['today', 'Сегодня', '03'], ['pomodoro', 'Таймер', '04'], ['resources', 'Материалы', '05'], ['activity', 'Активность', '06'], ['reviews', 'Повторение', '07'], ['report', 'Отчёт', '08'], ['data', 'Данные', '09']];
export function Chrome({ page, onPage, children, compact }: { page: PageId; onPage: (page: PageId) => void; children: React.ReactNode; compact: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (target: PageId) => { onPage(target); setMenuOpen(false); };
  return <div className={compact ? 'app compact' : 'app'}>
    <header className="topbar"><button className="wordmark" onClick={() => goTo('dashboard')} aria-label="Открыть пульт"><span>КОНТУР</span><small>// ПУТЬ APPSEC</small></button><button className="nav-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(value => !value)}><span aria-hidden="true">☰</span> МЕНЮ</button><div className="top-meta"><span>ДОПУСК: СТУДЕНТ</span><span className="status-dot" /> СТАТУС: АКТИВЕН</div></header>
    <nav id="main-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Основная навигация">{items.map(([id, label, num]) => <button key={id} className={page === id ? 'active' : ''} onClick={() => goTo(id)}><small>{num}</small>{label}</button>)}</nav>
    <main>{children}</main><footer><span><b>КОНТУР // ЛОКАЛЬНЫЙ РЕЖИМ</b><small>Твои записи сохраняются только в этом браузере.</small></span><span><b>РЕЗЕРВНАЯ КОПИЯ</b><small>Экспортируй данные в разделе «Данные».</small></span></footer>
  </div>;
}
