import { useCallback, useMemo, useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { filterProducts, countByCategory } from './utils/filterProducts';
import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import './App.css';

const INITIAL_FILTERS = { category: 'all', status: 'all', query: '' };

export default function App() {
  const { products, loading, error } = useProducts();
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [selected, setSelected] = useState(null); // { product, action } or null

  const updateFilter = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  const counts = useMemo(() => countByCategory(products), [products]);
  const visible = useMemo(() => filterProducts(products, filters), [products, filters]);

  const openModal = (product, action) => setSelected({ product, action });
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Banking Products</h1>
        <p className="app__subtitle">Your savings, cards, loans and investments in one view.</p>
      </header>

      <CategoryTabs active={filters.category} counts={counts} onChange={updateFilter('category')} />
      <FilterBar
        query={filters.query}
        status={filters.status}
        onQueryChange={updateFilter('query')}
        onStatusChange={updateFilter('status')}
      />

      {loading && <div className="state">Loading products…</div>}
      {error && <div className="state state--error">{error}</div>}

      {!loading && !error && (
        <ProductGrid
          products={visible}
          onAction={openModal}
          onClearFilters={() => setFilters(INITIAL_FILTERS)}
        />
      )}

      {selected && (
        <ProductModal
          key={selected.product.id}
          product={selected.product}
          action={selected.action}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
