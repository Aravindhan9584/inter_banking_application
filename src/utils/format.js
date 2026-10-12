const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const dateFormat = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

// Parse 'YYYY-MM-DD' as a LOCAL date. `new Date('2026-10-28')` is read as UTC
// midnight, which shows as the previous day in time zones behind UTC.
function parseLocalDate(text) {
  const [y, m, d] = text.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function formatMetric({ value, type }) {
  switch (type) {
    case 'currency':
      return currency.format(value);
    case 'percent':
      return `${value}%`;
    case 'date':
      return dateFormat.format(parseLocalDate(value));
    default:
      return String(value);
  }
}
