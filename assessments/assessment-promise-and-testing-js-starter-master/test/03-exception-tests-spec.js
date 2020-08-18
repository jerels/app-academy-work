
const { expect } = require('chai');
class Rounder {
  constructor(number) {
    this.number = number;
  }

  roundDown() {
    return null;
  }

  roundUp() {
    return null;
  }

  roundUpToNearest10() {
    return null;
  }
}
/* END_CLASS_ROUNDER */

/**
 * DO NOT CHANGE ANY CODE ABOVE THIS LINE.
 */

describe('Rounder class', () => {

  context('roundDown() method detects bad output when it', () => {
    it('returns a number rounded down to the nearest integer', () => {
    let failed = false;
    try {
      
      const rounder = new Rounder(4.5);
      let result = rounder.roundDown();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }

      expect(result).to.eql(4);
    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });

  context('roundDown() method detects bad output when it', () => {
    it('returns a number rounded up to the nearest integer', () => {
    let failed = false;
    try {
      
      const rounder = new Rounder(4.5);
      let result = rounder.roundUp();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }
      expect(result).to.eql(5);
    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });

  context('roundUpToNearest10() method method detects bad output when it', () => {
    it('returns the closest multiple of 10 greater than the input', () => {
    let failed = false;
    try {
      
      const rounder = new Rounder(4.5);
      let result = rounder.roundUpToNearest10();
      if (result === undefined) {
        throw new Error("Must enter valid number")
      }
      expect(result).to.eql(10);
    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });
});



