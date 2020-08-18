
/***********************************************************************

Update the provided ES2015 `Airplane` class to inherit from the provided
`Vehicle` class. Update the `Airplane` constructor method to accept four
arguments that initialize the following properties:

* numberOfEngines - the number of engines on the airplane
* wingspan - the wingspan of the airplane
* weight - the weight of the airplane
* capacity - the number of passengers that the airplane can carry

Examples:

const airplane1 = new Airplane(2, 35.79, 90000, 174);
console.log(airplane1);

// Should print...

// Airplane {
//   weight: 90000,
//   capacity: 174,
//   numberOfEngines: 2,
//   wingspan: 35.79
// }

const airplane2 = new Airplane(1, 10.97, 1669, 10);
console.log(airplane2);

// Should print...

// Airplane {
//   weight: 1669,
//   capacity: 10,
//   numberOfEngines: 1,
//   wingspan: 10.97
// }

***********************************************************************/

class Vehicle {
  constructor(weight, capacity) {
    this.weight = weight;
    this.capacity = capacity;
  }
}

class Airplane extends Vehicle {
  constructor(numberOfEngines, wingspan, weight, capacity) {
    super(weight, capacity);
    this.numberOfEngines = numberOfEngines;
    this.wingspan = wingspan;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = {
    Vehicle,
    Airplane
  };
} catch (error) {
  module.exports = null;
}
