// Data access layer. Components never import PRODUCTS directly — they go
// through this function. Today it returns the hard-coded array; to use a
// real API later, replace the body with: return (await fetch(url)).json();
import { PRODUCTS } from '../data/products';

export function getProducts() {
  return Promise.resolve(PRODUCTS);
}
