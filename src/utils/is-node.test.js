import { isNode } from './is-node.js';

describe('isNode', () => {
  it('should return "true" if passed HTML Element', () => {
    expect(isNode(document.createElement('div'))).toBe(true);
  });

  it.each`
    input              
    ----------------
    ${'some string'}
    ${11}
    ${null}
    ${undefined}
    ${['1', '2', '3']}
    ${[]}
    ${{ a: 1, b: 2 }}
    ${{}}
  `(
    'should return "false" when is passed not a HTML Element → $input',
    ({ input }) => {
      expect(isNode(input)).toBe(false);
    },
  );
});
