// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
const mySolution = (a) => {
const toNum = a.map(a => +a), d = toNum.filter(a => !Number.isNaN(a)); 
return d 
}

for (const solution of [secretSolution, mySolution]) {
  describe(solution.name + ': _', () => {
    describe('it should return only numbers from array', () => {
      it('from given array of numbers and strings, return numbers', () => {
        expect(solution(['1', '2', 'e', '.'])).toEqual([1, 2]);
      });
      it('from given array of numbers and strings, return numbers', () => {
        expect(solution(['1', '2', 'e', '.'])).toEqual([1, 2]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
