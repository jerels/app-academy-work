const assert = require("assert");
const factorial = require("../problems/05-factorial.js");

describe("factorial()", function() {
  it("should satisfy the examples from the problem", function() {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(5), 120);
  });

  it("should return the expected factorial for a given number", function() {
    assert.equal(factorial(2), 2);
    assert.equal(factorial(6), 720);
    assert.equal(factorial(10), 3628800);
  });
});
