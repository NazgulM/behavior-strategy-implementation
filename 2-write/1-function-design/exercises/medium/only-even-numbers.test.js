// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------
const mySolution = (arrayOfNumbers) => {
  let result = [];
  result = arrayOfNumbers.filter(i => i % 2 == 0);
  return result;
}

for (const solution of [secretSolution, mySolution]) {
  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {});
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c; }
