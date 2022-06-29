/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5868e2f683b26841a1000444 */

/* this exercise has 0 distractors */

function addArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    throw new Error("You done goof'd");
  }
  var sum = [];
  for (var i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
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