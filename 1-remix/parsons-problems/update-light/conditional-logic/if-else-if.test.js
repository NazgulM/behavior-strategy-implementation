/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ae5f73d2df0a959bf00141f */

/* this exercise has 2 distractors */

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  }
  return 'green';
}


// let updateLight(current) { // distractor
// let updateLight(current) = function { // distractor

describe("Tests", () => {
  it("test if the color of light updating after green yellow, after yellow red", () => {
    expect(updateLight('green')).toEqual('yellow');
  });
});

describe("Tests", () => {
  it("test if the color of light updating after green yellow, after yellow red", () => {
    expect(updateLight('yellow')).toEqual('red');
  });
});

describe("Tests", () => {
  it("test if the color of light updating after green yellow, after yellow red", () => {
    expect(updateLight('')).toEqual('green');
  });
});