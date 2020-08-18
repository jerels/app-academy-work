const assert = require("assert");
const fibonacci = require("../problems/04-fibonacci.js");

describe("fibonacci()", function() {
  it("should satisfy the examples from the problem", function() {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(10), 55);
  });

  it("should return the expected nth Fibonacci number", function() {
      assert.equal(fibonacci(5), 5);
      assert.equal(fibonacci(20), 6765);
  });
});
