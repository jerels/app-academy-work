
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const { fileContainsClass } = require('./helpers');

const problemModulePath = '../class-instances-a.js';
const solution = require(problemModulePath);

let Passenger = null;
let sallySmith = null;
let johnJones = null;

if (solution !== null) {
  ({ Passenger, sallySmith, johnJones } = solution);
}

function checkPassengerInstance(instance, expectedFirstName, expectedLastName) {
  it('should not be null', () => {
    expect(instance).to.not.be.null;
  });

  it('should be an instance of the Passenger class', () => {
    expect(instance).to.be.an.instanceof(Passenger);
  });

  it(`should have a firstName property initialized to value '${expectedFirstName}'`, () => {
    expect(instance.firstName).to.equal(expectedFirstName);
  });

  it(`should have a lastName property initialized to value '${expectedLastName}'`, () => {
    expect(instance.lastName).to.equal(expectedLastName);
  });
}

describe('The sallySmith instance', () => {
  checkPassengerInstance(sallySmith, 'Sally', 'Smith');
});

describe('The johnJones instance', () => {
  checkPassengerInstance(johnJones, 'John', 'Jones');
});
