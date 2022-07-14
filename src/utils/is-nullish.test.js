import { isNullish } from './is-nullish.js';

describe('isNullish', () => {
  it.each`
    input              
    -------------
    ${[1, 2, 3]}
    ${'Hello'}
    ${23}
    ${{ a: 1, b: 2, c: 3 }}
    ${() => 'Something'}
  `(
    'should return "false" if passed non-nullish value → $input',
    ({ input }) => {
      expect(isNullish(input)).toBe(false);
    },
  );

  it.each`
    input              
    -------------
    ${undefined}
    ${null}
    ${NaN}
    ${''}
    ${[]}
    ${{}}
  `('should return "true" if passed nullish value → $input', ({ input }) => {
    expect(isNullish(input)).toBe(true);
  });
});
