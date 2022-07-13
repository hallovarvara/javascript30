export const isNullish = (value) =>
  value === undefined ||
  value === null ||
  Number.isNaN(value) ||
  value === '' ||
  (Array.isArray(value) && value.length === 0);
