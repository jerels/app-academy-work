
/***********************************************************************

To solve this problem, complete the following steps:

1. Import the Worker class from the `./library/worker` module. It is exported
   with the statement
      exports.Worker = Worker;

2. Uncomment the provided Employee and Contractor classes, which inherit from
   the Worker class.

3. Export the Employee and Contractor classes so that other modules can import
   them using the names `Employee` and `Contractor`.

Examples:

const employee1 = new Employee('Sally', 'Smith', 'Customer Service', 70000, true);
console.log(employee1);

// Should print...

// Employee {
//   firstName: 'Sally',
//   lastName: 'Smith',
//   department: 'Customer Service',
//   yearlySalary: 70000,
//   isFullTime: true
// }


// Should print...

// Contractor {
   //   firstName: 'John',
   //   lastName: 'Jones',
   //   department: 'Sales',
   //   hourlyRate: 25
   // }

   ***********************************************************************/
const worker = require("./library/worker");
const Worker = worker.Worker;

class Employee extends Worker {
   constructor(firstName, lastName, department, yearlySalary, isFullTime) {
      super(firstName, lastName, department);
      this.yearlySalary = yearlySalary;
      this.isFullTime = isFullTime;
   }
}

class Contractor extends Worker {
   constructor(firstName, lastName, department, hourlyRate) {
      super(firstName, lastName, department);
      this.hourlyRate = hourlyRate;
   }
}

module.exports = {
   Employee,
   Contractor
}


const contractor1 = new Contractor('John', 'Jones', 'Sales', 25);
console.log(contractor1);
