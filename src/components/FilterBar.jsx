import { STATUSES } from '../config/productConfig';

export default function FilterBar({ query, status, onQueryChange, onStatusChange }) {
  return (
    <div className="filters">
      <input
        type="search"
        className="filters__search"
        placeholder="Search products…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-label="Search products"
      />
      <select
        className="filters__select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        aria-label="Filter by status"
      >
        <option value="all">All statuses</option>
        {Object.entries(STATUSES).map(([id, s]) => (
          <option key={id} value={id}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}
