export function ProgressBar({ value, label, detail, tone = 'amber' }: { value: number; label?: string; detail?: string; tone?: 'amber' | 'cyan' | 'green' }) {
  const percent = Math.max(0, Math.min(100, value));
  return <div className="meter"><div className="meter-label">{label && <span>{label}</span>}<b>{detail ?? `${percent.toFixed(1)}%`}</b></div><div className="meter-track"><i className={tone} style={{ width: `${percent}%` }} /></div></div>;
}
