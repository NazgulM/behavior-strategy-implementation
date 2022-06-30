/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  let newString = s.split("");
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].replace('!', '');
  }
  return newString.join('');
}

describe("Tests", () => {
  it("test if the string has ! marks", () => {
    expect(removeExclamationMarks("Hello World!")).toEqual("Hello World");
  });
});

describe("Tests", () => {
  it("test if the string has ! marks", () => {
    expect(removeExclamationMarks("Naza! how! are you?!")).toEqual("Naza how are you?");
  });
});

