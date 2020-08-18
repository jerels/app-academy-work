const moment = require("moment");
const faker = require("faker");
let randomName = faker.name.findName();
const plur = require("plur");

console.log(plur("unicorn", 1));
