const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const intervalThreeTimes = require("../problems/02-interval-three-times.js");

describe("intervalThreeTimes()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should set an interval with the given delay", function() {
    const setIntervalSpy = chai.spy.on(global, "setInterval", () => null);
    intervalThreeTimes(() => null, 300);
    intervalThreeTimes(() => null, 1000);
    expect(setIntervalSpy).to.have.been.called.first.with(300);
    expect(setIntervalSpy).to.have.been.called.second.with(1000);
  });

  it("should clear the interval once the callback has been called exactly three times", function(done) {
    const originalClearInterval = global.clearInterval;
    const callbackSpy = chai.spy();
    chai.spy.on(global, "clearInterval", intervalId => {
      originalClearInterval(intervalId);
      expect(callbackSpy).to.have.been.called.exactly(3);
      done();
    });
    intervalThreeTimes(callbackSpy, 100);
  });
});
