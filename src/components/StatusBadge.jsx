import { STATUSES } from '../config/productConfig';

export default function StatusBadge({ status }) {
  const s = STATUSES[status] ?? { label: status, tone: 'neutral' };
  return <span className={`badge badge--${s.tone}`}>{s.label}</span>;
}
