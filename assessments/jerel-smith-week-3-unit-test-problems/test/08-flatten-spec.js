const assert = require("assert");
const flatten = require("../problems/08-flatten.js");

describe("flatten()", function() {
  it("should satisfy the examples from the problem", function() {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2]), [1, 2]);
    assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
  });

  it("should return the all the nested array contents in a single array", function() {
    assert.deepEqual(flatten([[[[]]]]), []);
    assert.deepEqual(flatten([[1, 2], [3, [4, 5]]]), [1, 2, 3, 4, 5]);
    assert.deepEqual(flatten([[[1, 2]], [[3, 4]]]), [1, 2, 3, 4]);
  });
});
