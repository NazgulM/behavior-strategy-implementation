// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution('naza');
        expect(actual).toEqual(true);
      });
      it('numbers that are not 0 or NaN -> true', () => {
        const actual = 85;
        expect(solution(actual)).toEqual(true);
      });
      it('true -> true', () => {
        expect(solution(true)).toEqual(true);
      });
    });
    describe('solution can identify falsy values', () => {
      it('"" -> false', () => {
        const actual = '';
        expect(solution(actual)).toEqual(false);
      });
      it('0 -> false', () => {
        expect(solution(0)).toEqual(false);
      });
      it('NaN -> false', () => {
        const actual = solution(NaN);
        expect(actual).toEqual(false);
      });
      it('false -> false', () => {
        expect(solution(false)).toEqual(false);
      });
      it('undefined -> false', () => {
        const actual = solution(undefined);
        expect(actual).toEqual(false);
      });
      it('null -> false', () => {
        expect(solution(null)).toEqual(false);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
