// ============================================================
//  HARD-CODED PRODUCT DATA
//  This is the ONLY place product data lives.
//  To add, remove or change a product, edit this array.
//
//  Fields:
//    id          unique id
//    name        product name
//    category    'savings' | 'credit-card' | 'loan' | 'wealth'
//    status      'active'    -> customer already owns it  -> button "View Details"
//                'available' -> customer can sign up       -> button "Apply"
//                'pending'   -> application in review      -> button "View Details"
//                'blocked'   -> product is blocked         -> button "View Details"
//    description one short line
//    metrics     key numbers shown on the card (2 per product)
//                type: 'currency' | 'percent' | 'date'
// ============================================================

export const PRODUCTS = [
  // ---------- Savings ----------
  {
    id: 'sav-001',
    name: 'Everyday Savings Account',
    category: 'savings',
    status: 'active',
    description: 'Flexible savings with no monthly fees.',
    metrics: [
      { label: 'Interest rate', value: 4.25, type: 'percent' },
      { label: 'Balance', value: 152430, type: 'currency' },
    ],
  },
  {
    id: 'sav-002',
    name: 'Fixed Deposit',
    category: 'savings',
    status: 'available',
    description: 'Lock in a higher rate for 12 months.',
    metrics: [
      { label: 'Interest rate', value: 7.1, type: 'percent' },
      { label: 'Minimum deposit', value: 10000, type: 'currency' },
    ],
  },

  // ---------- Credit cards ----------
  {
    id: 'cc-001',
    name: 'Platinum Rewards Card',
    category: 'credit-card',
    status: 'active',
    description: 'Earn 2x points on dining and travel.',
    metrics: [
      { label: 'Available limit', value: 84500, type: 'currency' },
      { label: 'Next due date', value: '2026-10-28', type: 'date' },
    ],
  },
  {
    id: 'cc-002',
    name: 'Cashback Card',
    category: 'credit-card',
    status: 'blocked',
    description: 'Blocked after a suspicious transaction.',
    metrics: [
      { label: 'Available limit', value: 0, type: 'currency' },
      { label: 'Cashback earned', value: 1240, type: 'currency' },
    ],
  },
  {
    id: 'cc-003',
    name: 'Travel Card',
    category: 'credit-card',
    status: 'available',
    description: 'Zero forex markup and airport lounge access.',
    metrics: [
      { label: 'Annual fee', value: 2500, type: 'currency' },
      { label: 'Reward rate', value: 3, type: 'percent' },
    ],
  },

  // ---------- Loans ----------
  {
    id: 'ln-001',
    name: 'Home Loan',
    category: 'loan',
    status: 'active',
    description: '20-year floating-rate home loan.',
    metrics: [
      { label: 'Outstanding', value: 3250000, type: 'currency' },
      { label: 'Next due date', value: '2026-11-05', type: 'date' },
    ],
  },
  {
    id: 'ln-002',
    name: 'Personal Loan',
    category: 'loan',
    status: 'pending',
    description: 'Your application is under review.',
    metrics: [
      { label: 'Requested amount', value: 500000, type: 'currency' },
      { label: 'Interest rate', value: 10.5, type: 'percent' },
    ],
  },

  // ---------- Wealth ----------
  {
    id: 'wl-001',
    name: 'Balanced Mutual Fund',
    category: 'wealth',
    status: 'active',
    description: 'Diversified equity and debt portfolio.',
    metrics: [
      { label: 'Current value', value: 412800, type: 'currency' },
      { label: '1-year return', value: 12.4, type: 'percent' },
    ],
  },
  {
    id: 'wl-002',
    name: 'Government Bonds',
    category: 'wealth',
    status: 'available',
    description: 'Low-risk, government-backed bonds.',
    metrics: [
      { label: 'Yield', value: 7.3, type: 'percent' },
      { label: 'Minimum investment', value: 1000, type: 'currency' },
    ],
  },
];
