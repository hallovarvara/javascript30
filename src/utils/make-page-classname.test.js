import { makePageClassname } from './make-page-classname.js';

describe('makePageClassname', () => {
  it('should return correct value if passed page name', () => {
    expect(makePageClassname('main')).toBe('page main-page');
  });

  it('should return just a "page" as a className if passed not a string or nullish value', () => {
    expect(makePageClassname()).toBe('page');
  });
});
