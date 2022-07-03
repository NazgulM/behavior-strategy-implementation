/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

/* this exercise has 3 distractors */

let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');


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
