import StatusBadge from './StatusBadge';
import { getCategory, getAction } from '../config/productConfig';
import { formatMetric } from '../utils/format';

export default function ProductCard({ product, onAction }) {
  const category = getCategory(product.category);
  const action = getAction(product); // "Apply" or "View Details"
  const isApply = action === 'Apply';

  return (
    <article className={`card card--${product.category}`}>
      <header className="card__header">
        <span className="card__category">
          <span aria-hidden="true">{category.icon}</span> {category.label}
        </span>
        <StatusBadge status={product.status} />
      </header>

      <h3 className="card__title">{product.name}</h3>
      <p className="card__desc">{product.description}</p>

      <dl className="card__metrics">
        {product.metrics.map((m) => (
          <div key={m.label} className="metric">
            <dt>{m.label}</dt>
            <dd>{formatMetric(m)}</dd>
          </div>
        ))}
      </dl>

      <button
        type="button"
        className={`btn ${isApply ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => onAction(product, action)}
      >
        {action}
      </button>
    </article>
  );
}
