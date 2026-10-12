import { useEffect, useState } from 'react';
import StatusBadge from './StatusBadge';
import { getCategory } from '../config/productConfig';
import { formatMetric } from '../utils/format';

// Opens when a card button is clicked.
//   "View Details" -> shows all product details
//   "Apply"        -> shows the product and a Confirm button (no backend, so it just shows a success message)
export default function ProductModal({ product, action, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const category = getCategory(product.category);
  const isApply = action === 'Apply';

  // Close with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className="card__category">
          <span aria-hidden="true">{category.icon}</span> {category.label}
        </p>
        <h2 id="modal-title" className="modal__title">
          {isApply ? `Apply for ${product.name}` : product.name}
        </h2>

        {submitted ? (
          <>
            <p className="modal__success">
              ✓ Application submitted. We will contact you shortly.
            </p>
            <button type="button" className="btn btn--primary" onClick={onClose}>
              Done
            </button>
          </>
        ) : (
          <>
            <p className="card__desc">{product.description}</p>

            <dl className="modal__list">
              <div>
                <dt>Status</dt>
                <dd><StatusBadge status={product.status} /></dd>
              </div>
              {product.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{formatMetric(m)}</dd>
                </div>
              ))}
            </dl>

            <div className="modal__actions">
              <button type="button" className="btn btn--secondary" onClick={onClose}>
                {isApply ? 'Cancel' : 'Close'}
              </button>
              {isApply && (
                <button type="button" className="btn btn--primary" onClick={() => setSubmitted(true)}>
                  Confirm application
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
