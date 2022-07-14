export const isNullish = (value) =>
  value === undefined ||
  value === null ||
  Number.isNaN(value) ||
  value === '' ||
  (Array.isArray(value) && value.length === 0) ||
  (value instanceof Object &&
    typeof value !== 'function' &&
    Object.keys(value).length === 0);
