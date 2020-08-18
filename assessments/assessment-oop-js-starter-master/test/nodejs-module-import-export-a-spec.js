
const path = require('path');
const chai = require('chai');
const expect = chai.expect;

const { Worker } = require('../library/worker');

const problemModulePath = '../nodejs-module-import-export-a.js';

const filePath = path.resolve(__dirname, problemModulePath);
const { Employee, Contractor } = require(filePath);

describe('The Employee class', () => {
  it('inherits from the Worker class', () => {
    const employee1 = new Employee('Sally', 'Smith', 'Customer Service', 70000, true);
    expect(employee1).to.be.an.instanceof(Worker);
  });
});

describe('The Contractor class', () => {
  it('inherits from the Worker class', () => {
    const contractor1 = new Contractor('John', 'Jones', 'Sales', 25);
    expect(contractor1).to.be.an.instanceof(Worker);
  });
});
