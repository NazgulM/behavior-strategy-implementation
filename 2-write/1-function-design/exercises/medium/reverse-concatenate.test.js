// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------
const mySolution = (arrayOfStrings) => {
  const result = arrayOfStrings.reverse().join('');
  return result;
}


for (const solution of [secretSolution, mySolution]) {
  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {});
    });
    it('reverse strings of array', () => {
      expect(solution(['naza', 'is'])).toEqual('isnaza');
    });
    it('reverse strings of array', () => {
      expect(solution(['123', '456'])).toEqual('456123');
    });
    it('reverse strings of array', () => {
      expect(solution(['nursultan', 'is', 'myson'])).toEqual('mysonisnursultan');
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
