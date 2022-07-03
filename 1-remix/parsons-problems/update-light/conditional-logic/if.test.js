/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7addd0646981db800307b */

/* this exercise has 2 distractors */

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  }
  if (current === 'yellow') {
    return 'red';
  }
  if (current === 'red') {
    return 'green';
  }
}

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

