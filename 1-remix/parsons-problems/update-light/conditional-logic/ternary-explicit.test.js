/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad9bc6a0be029ab0800071b */

/* this exercise has 2 distractors */

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

// current === 'yellow'; // distractor
// function updateLight = (current) => { // distractor

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
    expect(updateLight('red')).toEqual('green');
  });
});
