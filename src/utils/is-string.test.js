import { isString } from './is-string.js';

describe('isString', () => {
  it('should return "true" if passed a string', () => {
    expect(isString('Some string')).toBe(true);
  });

  it('should return "false" if passed not a string', () => {
    expect(isString(123)).toBe(false);
  });
});
