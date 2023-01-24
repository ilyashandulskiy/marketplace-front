import currency from 'currency.js';

export const money = (value: string) => currency(value, { symbol: "₽", separator: " ", decimal: ".", pattern: '# !' });