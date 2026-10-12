// Display settings (labels, icons, button text). Kept separate from the data.

export const CATEGORIES = [
  { id: 'all', label: 'All products', icon: '▦' },
  { id: 'savings', label: 'Savings', icon: '🏦' },
  { id: 'credit-card', label: 'Credit Cards', icon: '💳' },
  { id: 'loan', label: 'Loans', icon: '🏠' },
  { id: 'wealth', label: 'Wealth', icon: '📈' },
];

export const STATUSES = {
  active: { label: 'Active', tone: 'success' },
  available: { label: 'Available', tone: 'info' },
  pending: { label: 'Pending', tone: 'warning' },
  blocked: { label: 'Blocked', tone: 'danger' },
};

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) ?? { id, label: id, icon: '•' };
}

// One simple rule for the card button:
//   product the customer can sign up for -> "Apply"
//   anything the customer already has     -> "View Details"
export function getAction(product) {
  return product.status === 'available' ? 'Apply' : 'View Details';
}
