
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const { fileContainsClass, genNum } = require('./helpers');

const problemModulePath = '../class-inheritance-a.js';
const solution = require(problemModulePath);

let Vehicle = null;
let Airplane = null;

if (solution !== null) {
  ({ Vehicle: Vehicle, Airplane: Airplane } = solution);
}

describe('The Airplane class', () => {
  const filePath = path.resolve(__dirname, problemModulePath);
  const fileContainsClassResult = fileContainsClass(filePath, 'Airplane');

  if (Airplane !== null && fileContainsClassResult) {
    const noe = genNum();
    const ws = genNum(50);
    const weight = genNum(100000);
    const capacity = genNum(200);
    const instance = new Airplane(noe, ws, weight, capacity);

    context('should include a constructor method that initializes', () => {
      it('the `numberOfEngines` property from the provided argument value', () => {
        expect(instance.numberOfEngines).to.equal(noe);
      });

      it('the `wingspan` property from the provided argument value', () => {
        expect(instance.wingspan).to.equal(ws);
      });

      it('the `weight` property from the provided argument value', () => {
        expect(instance.weight).to.equal(weight);
      });

      it('the `capacity` property from the provided argument value', () => {
        expect(instance.capacity).to.equal(capacity);
      });
    });

    context('should create objects that are', () => {
      it('instances of the Vehicle class', () => {
        expect(instance).to.be.an.instanceof(Vehicle);
      });
    });
  }
});
