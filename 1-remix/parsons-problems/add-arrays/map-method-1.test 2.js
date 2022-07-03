/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}

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