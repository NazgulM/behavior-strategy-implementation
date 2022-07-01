/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5b16df8ca6d5f9f11e000a41 */

const updateLight = (current) =>
  current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

// current == 'yellow' ? 'green' : current == 'red' ? 'yellow' : 'red'; // distractor

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

