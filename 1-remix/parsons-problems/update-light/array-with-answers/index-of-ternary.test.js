/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5e249517427162000136e463 */

/* this exercise has 1 distractors */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const newLightIndex = lights.indexOf(current) + 1;
  return newLightIndex < 3 ? lights[newLightIndex] : lights[0];
}

// 
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