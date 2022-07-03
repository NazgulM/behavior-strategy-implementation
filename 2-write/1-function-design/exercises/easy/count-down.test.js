// #todo

/** .........
 * Builds an array counting down from `start` to 0
 *
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

const mySolution  = (num=0) => {
  let myArray =[];
  for (let i = num; i >= 0; i--){
    myArray.push(i);
  }
  return myArray;
}


for (const solution of [secretSolution, mySolution]) {
  // the main test suite for the function
  describe(`${solution.name}: counts down to 0`, () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it('2 -> [0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });

    it('3 -> [0]', () => {
      expect(solution(3)).toEqual([3, 2, 1, 0]);
    });

    it('10 -> [0]', () => {
      expect(solution(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });

    it('4 -> [0]', () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });

    it('8 -> [0]', () => {
      expect(solution(8)).toEqual([8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */
function secretSolution(a = 0) { if (typeof a !== "number") throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (a < 0) throw new RangeError("start is less than 0"); const b = []; for (let c = a; c >= 0; c--)b.push(c); return b; }
