// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

const toReverse = (str = '') => {
  return str.split("").reverse().join("");
}

for (const solution of [secretSolution, toReverse]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...

    it('a string with exclamation mark and letters', () => {
      expect(solution('naza!')).toEqual('!azan');
    });

    it('a string with capital and small letters', () => {
      expect(solution('AruUke')).toEqual('ekUurA');
    });

    it('a string with numbers', () => {
      expect(solution('12345')).toEqual('54321');
    });

    it('a string with numbers', () => {
      expect(solution('I am Nazgul')).toEqual('lugzaN ma I');
    });

    it('a string with numbers', () => {
      expect(solution('race car')).toEqual('rac ecar');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
