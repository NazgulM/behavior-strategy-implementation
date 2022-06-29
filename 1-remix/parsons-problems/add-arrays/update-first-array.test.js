/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractors */

function addArrays(array1, array2) {
  var len = array1.length;

  if (len === array2.length) {
    for (var i = 0; i < len; i++) {
      array1[i] += array2[i];
    }

    return array1;
  }

  throw new Error();
}


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