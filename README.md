# Banking Products Dashboard

A single-screen React app that shows savings accounts, credit cards, loans and wealth products in one unified view, with category tabs, text search and a status filter.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build  
```

Requires Node 18+.

## Technology choices

- **React 18** – component model fits a dashboard of repeated, data-driven cards.
- **Vite** – fast dev server and build with almost no configuration.
- **Plain CSS with custom properties** – no UI library, so the layout and styling decisions are visible in the code. Responsive via CSS Grid `auto-fill` (1 column on phones, up to 4 on desktop).
- **Hard-coded data** – all products live in one file, `src/data/products.js`. Components get them through `productService.js`, so switching to a real API later changes only that one file.

## Separation of data and UI

- Products carry **generic metrics** (`{ label, value, type }`) rather than product-specific fields, so one `ProductCard` renders every product type. Adding a new product type needs only a new entry in `src/data/products.js` (and optionally a category entry in `productConfig.js`).
- Components never fetch data or format raw values themselves: fetching lives in the service/hook, formatting in `utils/format.js`, filtering in a pure function.
- Swapping the hard-coded data for a real backend means changing `productService.js` only.

## Features

- 9 products across 4 categories, each showing name, category, status, two key metrics and a CTA
- Category tabs with live counts
- Search by name/description and filter by status (combinable)
- Loading, error and empty (with "clear filters") states
- Keyboard accessible: tabs use `role="tab"`/`aria-selected`, visible focus outlines, labelled inputs
- **Card button rule** (in `getAction()` in `productConfig.js`):
  - status `available` (customer can sign up) → **Apply** → popup with a *Confirm application* button
  - status `active`, `pending`, `blocked` (customer already has it) → **View Details** → popup with all details
  - Popup closes with ×, Close/Cancel, clicking outside, or Escape

## Possible next steps

- Unit tests for `filterProducts` and `formatMetric` (Vitest + React Testing Library)
- Sync filters to the URL query string so a filtered view can be shared
