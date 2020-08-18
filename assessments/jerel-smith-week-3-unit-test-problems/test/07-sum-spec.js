const assert = require("assert");
const sum= require("../problems/07-sum.js");

describe("sum()", function() {
  it("should satisfy the examples from the problem", function() {
    assert.equal(sum([1, 2, 3]), 6);
    assert.equal(sum([0, 1, -3]), -2);
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });

  it("should return the sum of all the input array's members", function() {
    assert.equal(sum([5, 4, 3, 2, 1]), 15);
    assert.equal(sum([0, 0, 1, 0, 0]), 1);
    assert.equal(sum([-1, -1, -1, -1]), -4);
    assert.equal(sum([99, 100, 101]), 300);
  });
});
