const chai = require('chai');
const expect = chai.expect;

const solution = require('../02-array-based-stack');

let ArrayStack = null;

if (solution !== null) {
  ({ ArrayStack } = solution);
}

describe('The ArrayStack', () => {
  let stack;
  beforeEach(() => stack = new ArrayStack());

  context('had a constructor', () => {
    it('that initializes an empty array in the "storage" property', () => {
      const storage = stack.storage;

      expect(storage).to.be.an.instanceof(Array);
      expect(storage.length).to.equal(0);
    });
  });

  context('has an push method', () => {
    it('that adds a value to the "storage" array', () => {
      const upperLimit = Math.floor(Math.random() * 20) + 1;

      for (let i = 0; i < upperLimit; i += 1) {
        stack.push(i);
        expect(stack.storage.length).to.equal(i + 1);
      }
    });
  });

  context('has a pop method', () => {
    it('that removes the top value from stack "storage" array and returns it (LIFO)', () => {
      // Arrange
      const values = [];
      const upperLimit = Math.floor(Math.random() * 20) + 1;
      for (let i = 0; i < upperLimit; i += 1) {
        const value = Math.random();
        values.push(value);
        stack.push(value);
      }

      // Many assertions, one for each value pushed
      for (let i = 0; i < upperLimit; i += 1) {
        // Act
        const value = stack.pop();

        // Assert
        expect(value).to.equal(values[upperLimit - i - 1]);
        expect(stack.storage.length).to.equal(upperLimit - i - 1);
      }
    });

    it('that returns undefined for an empty stack', () => {
      expect(stack.pop()).to.equal(undefined);
    });
  });

  context('has a peek method', () => {
    it('that returns undefined for an empty stack', () => {
      expect(stack.peek()).to.equal(undefined);
    });

    it('that returns the top value from the stack "storage" array (LIFO) WITHOUT removing it', () => {
      // Arrange
      const values = [];
      const upperLimit = Math.floor(Math.random() * 20) + 1;


      for (let i = 0; i < upperLimit; i += 1) {
        // Arrange
        const value = Math.random();
        values.push(value);
        stack.push(value);

        // Act
        const result = stack.peek();

        // Assert
        expect(result).to.equal(values[values.length - 1]);
        expect(stack.storage.length).to.equal(i + 1);
      }

      // Many assertions, one for each value pushed
      for (let i = 0; i < upperLimit; i += 1) {
        // Act
        if (i > 0) { stack.pop(); }

        // Act
        const result = stack.peek();

        // Assert
        expect(result).to.equal(values[upperLimit - i - 1]);
        expect(stack.storage.length).to.equal(upperLimit - i);
      }
    });
  });
});
