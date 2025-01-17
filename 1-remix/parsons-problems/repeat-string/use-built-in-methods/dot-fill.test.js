/* 3 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

const repeatString = (text = '', repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join('');
  return repeatedString;
};

// return Array(repetitions).fill(text); // distractor
// const repeatedString = Array(repetitions).fill(text); // distractor
// const oneEntryPerRepetition = repeatedString.join(''); // distractor


describe("Tests", () => {
  it("test if the string can repeat ", () => {
    expect(repeatString('', 0)).toEqual('');
  });
});

describe("Tests", () => {
  it("test if the string can repeat n times", () => {
    expect(repeatString('aruuke', 1)).toEqual('aruuke');
  });
});

describe("Tests", () => {
  it("test if the string can repeat n times", () => {
    expect(repeatString('aruuke', 2)).toEqual('aruukearuuke');
  });
});