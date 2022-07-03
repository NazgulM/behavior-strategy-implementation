// #todo

'use strict';

/* 0. Starter Code
*/

// =============== JSDoc description of the challenge ===============
/** 
* The government is issuing corona money to healthcareworkers
* The actual premium has not been decided yet
* For doctors, the rules are as following:
*  Less than 10-year experience: x1,5
*  More than 10 or equal: x2
*  More than 20 or equal: x3
*  Never more than: 1000 (throw an error)
* For nurses:
*  Less than 10-year experience: x1,2
*  More than 10 or equal: x1,3
*  More than 15 or equal: x1,5
*  More than 20 or equal: x1,7
*  Never more than: 500 (throw an error)
* Any other profession should not get a premium (but no error should be thrown)
*
* {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}
*/


/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============
//const mySolution  = (profession, number)  {}

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [calculatePremium]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': _', () => {
    describe('Nurses', ())
    describe('When the premium is 200 for nurses', () => {
      for (let i = 0; i>=10; i++) {

        it('Should multiply by x1,2 when she has less than 10 year experience',() => {
          expect(solution({profession: 'nurse', experience: 8}, 200)).toBe(240)});
    });
  }
    it('Should multiply by x1,3 when she has => 10 year experience',() => {
      expect((solution({profession: 'nurse', experience: 11}, 200))).toBe(260)
    });
    it('Should multiply by x1,5 when she has => 15 year experience',() => {
      expect((solution({profession: 'nurse', experience: 16}, 200))).toBe(300)
    });
    it('Should multiply by x1,7 when she has => 20 year experience',() => {
      expect((solution({profession: 'nurse', experience: 22}, 200))).toBe(340)
    });
    it('Should throw error if more than 500',() => {
      expect (() => ((solution({profession: 'nurse', experience: 22}, 200))) > 500).toThrowError();
    });
  });

describe(solution.name + ': _', () => {
  describe('When the premium is 300 for nurses', () => {
      it('Should multiply by x1,2 when she has less than 10 year experience',() => {
        expect(solution({profession: 'nurse', experience: 7}, 300)).toBe(360)});
  })
  it('Should multiply by x1,3 when she has => 10 year experience',() => {
    expect((solution({profession: 'nurse', experience: 13}, 300))).toBe(390)
  });
  it('Should multiply by x1,5 when she has => 15 year experience',() => {
    expect((solution({profession: 'nurse', experience: 18}, 300))).toBe(450)
  });
  it('Should multiply by x1,7 when she has => 20 year experience',() => {
    expect((solution({profession: 'nurse', experience: 20}, 300))).toBe(510)
  });
  it('Should throw error if more than 500',() => {
    expect (() => ((solution({profession: 'nurse', experience: 20}, 300))) > 500).toThrowError();
  });
});

describe(solution.name + ': _', () => {
  describe('When the premium is 400 for nurses', () => {
      it('Should multiply by x1,2 when she has less than 10 year experience',() => {
        expect(solution({profession: 'nurse', experience: 9}, 400)).toBe(440)});
  })
  it('Should multiply by x1,3 when she has => 10 year experience',() => {
    expect((solution({profession: 'nurse', experience: 13}, 400))).
    toThrowError('The premium cannot exceed 500');
  });
  it('Should multiply by x1,5 when she has => 15 year experience',() => {
    expect((solution({profession: 'nurse', experience: 18}, 400))).
    toThrowError('The premium cannot exceed 500');
  });
  it('Should multiply by x1,7 when she has => 20 year experience',() => {
    expect((solution({profession: 'nurse', experience: 20}, 400))).
    toThrowError('The premium cannot exceed 500');
  });
  it('Should throw error if more than 500',() => {
    expect (() => ((solution({profession: 'nurse', experience: 20}, 300))) > 500).
    toThrowError('The premium cannot exceed 500');;
  });
});

describe(solution.name + ': _', () => {
  describe('When the premium is 200 for doctors', () => {
      it('Should multiply by x1,5 when she has less than 10 year experience',() => {
        expect(solution({profession: 'doctor', experience: 7}, 200)).toBe(300)});
  })
  it('Should multiply by x2 when she has => 10 year experience',() => {
    expect((solution({profession: 'doctor', experience: 14}, 200))).
    toBe(400);
  });
  it('Should multiply by x3 when she has => 20 year experience',() => {
    expect((solution({profession: 'doctor', experience: 20}, 200))).
    toBe(600);
  });
  it('Should throw error if more than 1000',() => {
    expect (() => ((solution({profession: 'doctor', experience: 20}, 300))) > 1000).
    toThrowError('The premium cannot exceed 1000');;
  });
});

describe(solution.name + ': _', () => {
  describe('When the premium is 300 for doctors', () => {
      it('Should multiply by x1,5 when she has less than 10 year experience',() => {
        expect(solution({profession: 'doctor', experience: 5}, 300)).toBe(450)});
  })
  it('Should multiply by x2 when she has => 10 year experience',() => {
    expect((solution({profession: 'doctor', experience: 10}, 300))).
    toBe(600);
  });
  it('Should multiply by x3 when she has => 20 year experience',() => {
    expect((solution({profession: 'doctor', experience: 22}, 300))).
    toBe(900);
  });
  it('Should throw error if more than 1000',() => {
    expect (() => ((solution({profession: 'doctor', experience: 24}, 300))) > 1000).
    toThrowError('The premium cannot exceed 1000');;
  });
});

describe(solution.name + ': _', () => {
  describe('When the premium is 400 for doctors', () => {
      it('Should multiply by x1,5 when she has less than 10 year experience',() => {
        expect(solution({profession: 'doctor', experience: 6}, 400)).toBe(600)});
  })
  it('Should multiply by x2 when she has => 10 year experience',() => {
    expect((solution({profession: 'doctor', experience: 12}, 400))).
    toBe(800);
  });
  it('Should multiply by x3 when she has => 20 year experience',() => {
    expect((solution({profession: 'doctor', experience: 22}, 300))).
    toThrowError('Amount cannot exceed 1000');
  });
});
describe(solution.name + ': _', () => {
  describe('When the premium is 200 for therapist', () => {
      it('only given basic premium to therapist',() => {
        expect(solution({profession: 'therapist', experience: 6}, 200)).toBe(200)});
  })

  describe(solution.name + ': _', () => {
    describe('When the premium is 300 for therapist', () => {
        it('only given basic premium to therapist',() => {
          expect(solution({profession: 'therapist', experience: 12}, 300)).toBe(300)});
    })

    describe(solution.name + ': _', () => {
      describe('When the premium is 400 for therapist', () => {
          it('only given basic premium to therapist',() => {
            expect(solution({profession: 'therapist', experience: 20}, 400)).toBe(400)});
      })

      describe(solution.name + ': _', () => {
        describe('When the premium is 200 for psychologist', () => {
            it('only given basic premium to psychologist',() => {
              expect(solution({profession: 'psychologist', experience: 6}, 200)).toBe(200)});
        })
      
        describe(solution.name + ': _', () => {
          describe('When the premium is 300 for psychologist', () => {
              it('only given basic premium to psychologist',() => {
                expect(solution({profession: 'psychologist', experience: 12}, 300)).toBe(300)});
          })
      
          describe(solution.name + ': _', () => {
            describe('When the premium is 400 for psychologist', () => {
                it('only given basic premium to psychologist',() => {
                  expect(solution({profession: 'psychologist', experience: 20}, 400)).toBe(400)});
            })
}


// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore