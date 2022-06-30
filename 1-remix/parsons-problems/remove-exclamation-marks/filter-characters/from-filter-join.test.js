/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

/* this exercise has 2 distractors */

function removeExclamationMarks(s) {
  const result = Array.from(s).filter((element) => element !== '!');
  return result.join('');
}

describe("Tests", () => {
  it("test if the string has ! marks", () => {
    expect(removeExclamationMarks("Hello World!")).toEqual("Hello World");
  });
});
