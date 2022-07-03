/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/60743965cb7e980001c7bc44 */

/* this exercise has 2 distractors */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];

  return current === 'red' ? 'green' : lights[lights.indexOf(current) + 1];
}

// current === 'red' ? 'green' : lights[lights.indexOf(current) + 1]; // distractor
// const lights = [green, yellow, red]; // distractor

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