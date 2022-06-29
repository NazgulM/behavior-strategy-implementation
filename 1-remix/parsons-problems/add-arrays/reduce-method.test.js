/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60cab9c989d309000170ac65 */

/* this exercise has 0 distractors */

function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('Array lengths not same size');
  }

  return array1.reduce((arr, num, i) => {
    arr.push(num + array2[i]);

    return arr;
  }, []);
}

for (const solution of [addArrays]) 
{
  describe('Adding up two arrays', () => {
    it('Add array 1 and array 2', () => {
      expect(addArrays([0,1,4],[1,3,1])).toEqual([1,4,5])
    });
  });

  describe('It should work when adding a string and a number', () => {
    it('Add array 1 with one string and array 2', () => {
      expect(addArrays([2,'lala', 45],[2, 4, 45])).toEqual([4,'lala4', 90])
      //I failed it at first because ()=> 2, 4 does not work [2,4] works
    });
  });

  describe('It should work with strings', () => {
    it('Add array 1 string and array 2 string', () => {
      expect(addArrays(['hi','ha'],['hi', 'ha'])).toEqual(['hihi', 'haha'])
    });
  });

}