
/***********************************************************************

Add an instance method to the `Airplane` class. The method should be named
`getConfiguration()` and return the `numberOfEngines` and `wingspan` property
values formatted as "# of Engines: {numberOfEngines}, Wingspan: {wingspan}".

Examples:

const airplane1 = new Airplane(2, 35.79);
console.log(airplane1.getConfiguration()); // Prints '# of Engines: 2, Wingspan: 35.79 Meters'


***********************************************************************/

class Airplane {
  constructor(numberOfEngines, wingspan) {
    this.numberOfEngines = numberOfEngines;
    this.wingspan = wingspan;
  }
  getConfiguration() {
    return `# of Engines: ${this.numberOfEngines}, Wingspan: ${this.wingspan} Meters`;
  }
}

const airplane2 = new Airplane(1, 10.97);
console.log(airplane2.getConfiguration()); // Prints '# of Engines: 1, Wingspan: 10.97 Meters'
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = Airplane;
} catch (error) {
  module.exports = null;
}
