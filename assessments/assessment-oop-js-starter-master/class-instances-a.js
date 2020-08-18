
/***********************************************************************

Using the `new` keyword, create two instances of the provided `Passenger` class:

* For the first instance, pass into the constructor method the string "Sally"
  for the first name and "Smith" for the last name
* For the second instance, pass into the constructor method the string "John"
  for the first name and "Jones" for the last name

Use the provided `sallySmith` and `johnJones` variables to capture references to
the new instances.

***********************************************************************/

class Passenger {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const sallySmith = new Passenger("Sally", "Smith");
const johnJones = new Passenger("John", "Jones");

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = {
    Passenger,
    sallySmith,
    johnJones
  };
} catch (error) {
  module.exports = null;
}
