import { CATEGORIES } from '../config/productConfig';

export default function CategoryTabs({ active, counts, onChange }) {
  return (
    <nav className="tabs" role="tablist" aria-label="Product categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          className={`tab ${active === cat.id ? 'tab--active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          <span aria-hidden="true">{cat.icon}</span>
          {cat.label}
          <span className="tab__count">{counts[cat.id] ?? 0}</span>
        </button>
      ))}
    </nav>
  );
}
