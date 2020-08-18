
    const specify = describe = context = it = before = after = beforeEach = afterEach = () => ({skip: () => {}, only: () => {}});
    const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

/**
 * In this file, you will test the class Rounder and its methods. The outline of
 * the expected tests is provided for you in describe/it format.
 *
 * NOTE: Put your tests in this file, not in the file in the test directory!
 */

/* BEGIN_CLASS_ROUNDER */
class Rounder {
  constructor(number) {
    this.number = number;
  }

  roundDown() {
    return Math.floor(this.number);
  }

  roundUp() {
    return Math.ceil(this.number);
  }

  roundUpToNearest10() {
    let n = Math.ceil(this.number);
    n = n - n % 10;
    return n + 10;
  }
}




/* END_CLASS_ROUNDER */

/**
 * DO NOT CHANGE ANY CODE ABOVE THIS LINE.
 */

describe('Rounder class', () => {

  context('roundDown() method', () => {
    it('returns a number rounded down to the nearest integer', () => {
      const rounder = new Rounder(4.5);
      let result = rounder.roundDown();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }

      expect(result).to.eql(4);
    });
  });

  context('roundUp() method', () => {
    it('returns a number rounded up to the nearest integer', () => {
      const rounder = new Rounder(4.5);
      let result = rounder.roundUp();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }
      expect(result).to.eql(5);
    });
  });

  context('roundUpToNearest10() method', () => {
    it('returns the closest multiple of 10 greater than the input', () => {
      const rounder = new Rounder(4.5);
      let result = rounder.roundUpToNearest10();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }
      expect(result).to.eql(10);
    });
  });
});

  