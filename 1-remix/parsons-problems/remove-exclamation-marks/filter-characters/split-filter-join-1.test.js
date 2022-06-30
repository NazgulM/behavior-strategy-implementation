/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  var arr = s.split('');
  arr = arr.filter((e) => {
    return e !== '!';
  });
  return arr.join('');
}

describe("Tests", () => {
  it("test if the string has ! marks", () => {
    expect(removeExclamationMarks("Hello World!")).toEqual("Hello World");
  });
});

describe("Tests", () => {
  it("test if the string has ! marks", () => {
    expect(removeExclamationMarks("Hello!!! World!!!!")).toEqual("Hello World");
  });
});
