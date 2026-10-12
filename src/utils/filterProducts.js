// Pure function: easy to unit test, no React involved.
export function filterProducts(products, { category, status, query }) {
  const q = query.trim().toLowerCase();

  return products.filter((p) => {
    if (category !== 'all' && p.category !== category) return false;
    if (status !== 'all' && p.status !== status) return false;
    if (q && !`${p.name} ${p.description}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

export function countByCategory(products) {
  return products.reduce(
    (acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
      return acc;
    },
    { all: products.length }
  );
}
