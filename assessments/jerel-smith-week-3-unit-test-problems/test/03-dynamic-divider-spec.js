const chai = require("chai");
const expect = chai.expect;
const dynamicDivider = require("../problems/03-dynamic-divider.js");

describe("dynamicDivider()", function() {
  it("should return a function", function() {
    expect(dynamicDivider(3) instanceof Function).to.be.true
  });

  it("should divide numbers", function() {
    const halfsies = dynamicDivider(2);
    expect(halfsies(10)).to.equal(5);
    expect(halfsies(20)).to.equal(10);
  });
});
