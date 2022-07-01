/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7d8162a7ead8112001f29 */

/* this exercise has 2 distractors */

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }
}

// } else if current === 'yellow' { //
// } else (current === 'red') { // distractor

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