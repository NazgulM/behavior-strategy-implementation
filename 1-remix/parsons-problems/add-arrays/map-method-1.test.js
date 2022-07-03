/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}

<<<<<<< HEAD
describe('Add array with two correct number arrays, passed', () => {
  it('should add up the arrays', () => {
    expect(addArrays[0, 1], [2,3]).toEqual([2,4])
  });
})

describe('Add array with string and number, passed', () => {
  it('add array with one string to array2', () => {
    expect(addArrays[0, '1'], [2, 3]).toEqual([2,'13'])
  });
})
=======
for (const solution of [addArrays]) 
{
  describe('Adding up two arrays', () => {
    it('Add array 1 and array 2', () => {
      expect(addArrays([0,1],[1,3])).toEqual([1,4])
    });
  });

  describe('It should work when adding a string and a number', () => {
    it('Add array 1 with one string and array 2', () => {
      expect(addArrays([2,'lala'],[2, 4])).toEqual([4,'lala4'])
      //I failed it at first because ()=> 2, 4 does not work [2,4] works
    });
  });

  describe('It should work with strings', () => {
    it('Add array 1 string and array 2 string', () => {
      expect(addArrays(['hi','ha'],['hi','ha'])).toEqual(['hihi', 'haha'])
    });
  });

}
>>>>>>> 29aed949ebf6649ff43efb27bc43a0ff9ebaa897