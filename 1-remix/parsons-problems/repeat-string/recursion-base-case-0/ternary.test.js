/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/

// prettier-ignore

const repeatString = (text = '', repetitions = 1) =>
(repetitions === 0
    ? ''
    : text + repeatString(text, repetitions - 1));


// const repeatString = (text = '', repetitions = 1) => { // distractor
// repetitions = 0 // distractor


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