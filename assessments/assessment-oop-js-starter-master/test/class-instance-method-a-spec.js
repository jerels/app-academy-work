
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const { fileContainsClass, genNum } = require('./helpers');

const problemModulePath = '../class-instance-method-a.js';
const Airplane = require(problemModulePath);

describe('The Airplane class', () => {
  const filePath = path.resolve(__dirname, problemModulePath);
  const fileContainsClassResult = fileContainsClass(filePath, 'Airplane');

  if (Airplane !== null && fileContainsClassResult && typeof Airplane === 'function') {
    const wingspan = genNum(100);
    const numberOfEngines = genNum();
    const instance = new Airplane(numberOfEngines, wingspan);

    context('should include', () => {
      it('an instance method named `getConfiguration()`', () => {
        expect(Airplane.prototype.getConfiguration).to.not.be.undefined;
        expect(Airplane.prototype.getConfiguration).to.be.an('Function');
      });

      context('that', () => {
        it('returns the expected value', () => {
          const value = `# of Engines: ${numberOfEngines}, Wingspan: ${wingspan} Meters`;
          expect(instance.getConfiguration()).to.equal(value);
        });
      });
    });
  }
});
