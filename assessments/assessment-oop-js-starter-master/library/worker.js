
/**
 * Class representing a worker.
 */
class Worker {
  /**
   * Creates an instance of a worker.
   * @param {string} firstName - The first name of the worker.
   * @param {string} lastName - The last name of the worker.
   * @param {string} department - The department of the worker.
   */
  constructor(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }
}

module.exports.Worker = Worker;
