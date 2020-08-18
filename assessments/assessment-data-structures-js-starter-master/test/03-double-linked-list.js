const chai = require('chai');
const expect = chai.expect;

const solution = require('../03-double-linked-list');

let DoubleLinkedList = null;

if (solution !== null) {
  ({ DoubleLinkedList } = solution);
}

describe('DoubleLinkedList', () => {
  let list;
  beforeEach(() => list = new DoubleLinkedList());

  context('peekAtTail()', () => {
    it('that returns undefined for an empty list', () => {
      const result = list.peekAtTail();
      expect(result).to.be.undefined;
    });

    it('that returns the value first pushed onto the head', () => {
      const expected = Math.random();

      list.addToHead(expected);
      let result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.addToHead(100);
      result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.removeFromHead();
      result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.removeFromHead();
      result = list.peekAtTail();
      expect(result).to.be.undefined;
    });
  });

  context('addToTail()', () => {
    it('that sets head and tail on first insert', () => {
      const expected = Math.random();

      list.addToTail(expected);

      const tailResult = list.peekAtTail();
      const headResult = list.peekAtHead();

      expect(tailResult).to.equal(expected);
      expect(headResult).to.equal(expected);
    });

    it('that increases the size with each insert', () => {
      const upperBound = Math.ceil(Math.random() * 100) + 10;

      for (let i = 0; i < upperBound; i += 1) {
        expect(list.getSize()).to.equal(i);
        list.addToTail(i);
        expect(list.getSize()).to.equal(i + 1);
      };
    });
  });

  context('removeFromTail()', () => {
    it('that returns undefined for an empty list', () => {
      const result = list.removeFromTail();

      expect(result).to.be.undefined;
    });

    it('that removes and returns the value from the tail', () => {
      const upperBound = Math.ceil(Math.random() * 100) + 10;

      for (let i = 0; i < upperBound; i += 1) {
        list.addToTail(i * upperBound);
      };

      while (list.getSize() > 0) {
        const result = list.removeFromTail();

        expect(result).to.equal((list.getSize() * upperBound));
      }
    });
  });
});
