// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(
    `${solution.name}: reverses a string then sets to lower or upper case`,
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('string is an empty string', () => {
          expect(solution()).toEqual('');
        });
        // when the text is all upper case
        it('text is all uppercase', () => {
          expect(solution('NAZA')).toEqual('azan');
        });
        // when the text is all lower case
        it('text is all lowercase', () => {
          expect(solution('aruuke')).toEqual('ekuura');
        });
        // when the text is mixed upper and lower case
        it('text is all mixed upper and lowercase', () => {
          expect(solution('chiKA')).toEqual('akihc');
        });
        // when the text contains punctuation
        it('text is all mixed upper and lowercase', () => {
          expect(solution('nurs!!!***')).toEqual('***!!!srun');
        });
        // when the text contains numbers
        it('text is all mixed upper and lowercase', () => {
          expect(solution('bakai1605')).toEqual('5061iakab');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('string is an empty string', () => {
          expect(solution()).toEqual('');
        });
        // when the text is all upper case
        it('string is all uppercase', () => {
          expect(solution('AIDAI')).toEqual('iadia');
        });
        // when the text is all lower case
        it('string is all uppercase', () => {
          expect(solution('car')).toEqual('rac');
        });
        // when the text is mixed upper and lower case
        // when the text contains punctuation
        // when the text contains numbers
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
