import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAction, onClearFilters }) {
  if (products.length === 0) {
    return (
      <div className="state">
        <p>No products match your filters.</p>
        <button type="button" className="btn btn--secondary" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <section className="grid" aria-live="polite">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAction={onAction} />
      ))}
    </section>
  );
}
