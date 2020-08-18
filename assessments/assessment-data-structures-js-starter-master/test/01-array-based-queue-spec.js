const chai = require('chai');
const expect = chai.expect;

const solution = require('../01-array-based-queue');

let ArrayQueue = null;

if (solution !== null) {
  ({ ArrayQueue } = solution);
}

describe('The ArrayQueue', () => {
  let queue;
  beforeEach(() => queue = new ArrayQueue());

  context('had a constructor', () => {
    it('that initializes an empty array in the "storage" property', () => {
      const storage = queue.storage;

      expect(storage).to.be.an.instanceof(Array);
      expect(storage.length).to.equal(0);
    });
  });

  context('has an enqueue method', () => {
    it('that adds a value to the "storage" array', () => {
      const upperLimit = Math.floor(Math.random() * 20) + 1;

      for (let i = 0; i < upperLimit; i += 1) {
        queue.enqueue(i);
        expect(queue.storage.length).to.equal(i + 1);
      }
    });
  });

  context('has a dequeue method', () => {
    it('that removes the head value from queue "storage" array and returns it (FIFO)', () => {
      // Arrange
      const values = [];
      const upperLimit = Math.floor(Math.random() * 20) + 1;
      for (let i = 0; i < upperLimit; i += 1) {
        const value = Math.random();
        values.push(value);
        queue.enqueue(value);
      }

      // Many assertions, one for each value enqueued
      for (let i = 0; i < upperLimit; i += 1) {
        // Act
        const value = queue.dequeue();

        // Assert
        expect(value).to.equal(values[i]);
        expect(queue.storage.length).to.equal(upperLimit - i - 1);
      }
    });

    it('that returns undefined for an empty queue', () => {
      expect(queue.dequeue()).to.equal(undefined);
    });
  });

  context('has a peek method', () => {
    it('that returns undefined for an empty queue', () => {
      expect(queue.peek()).to.equal(undefined);
    });

    it('that returns the head value from the queue "storage" array (FIFO) WITHOUT removing it', () => {
      // Arrange
      const values = [];
      const upperLimit = Math.floor(Math.random() * 20) + 1;


      for (let i = 0; i < upperLimit; i += 1) {
        // Arrange
        const value = Math.random();
        values.push(value);
        queue.enqueue(value);

        // Act
        const result = queue.peek();

        // Assert
        expect(result).to.equal(values[0]);
        expect(queue.storage.length).to.equal(i + 1);
      }

      // Many assertions, one for each value enqueued
      for (let i = 0; i < upperLimit; i += 1) {
        // Act
        if (i > 0) { queue.dequeue(); }

        // Act
        const result = queue.peek();

        // Assert
        expect(result).to.equal(values[i], `${queue.storage} ${values}`);
        expect(queue.storage.length).to.equal(upperLimit - i);
      }
    });
  });
});
