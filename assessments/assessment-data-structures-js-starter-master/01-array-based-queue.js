/**
 * It's time to make a queue based on an array!
 *
 * In this file, you will complete the ArrayQueue class with the following:
 *
 *   - a constructor that initializes an instance variable named "storage"
 *     to an empty array
 *   - an "enqueue" method that adds a value to the storage
 *   - a "dequeue" method that removes and returns the "oldest" value in
 *     storage, that is, first-in, first-out
 *   - a "peek" method that returns the "oldest" value in storage WITHOUT
 *     removing it, that is, first-in, peeky peeky
 *
 * Do not change anything above this line
 ***************************************************************************/


class ArrayQueue {
  constructor() {
    this.storage = [];
  }

  enqueue(val) {
    this.storage.push(val);
  }

  dequeue() {
    return this.storage.shift();
  }

  peek() {
    return this.storage[0];
  }
}


/****************************************************************************
 * Do not change anything below this line
 */
try {
  module.exports = { ArrayQueue };
} catch (e) {
  module.exports = null;
}
