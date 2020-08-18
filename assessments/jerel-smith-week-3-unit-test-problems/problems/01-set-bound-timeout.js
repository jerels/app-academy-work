/***********************************************************************
Write a function `boundTimeout` that accepts a callback, a delay in
milliseconds, and an object. The function should bind the callback to
the given object and set a timeout with the given delay using that
bound callback.

Examples:


function meow() {
  console.log(this.name + ' meowsss');
}

const cat = { name: 'Sennacy', colour: 'black'};

boundTimeout(bark, 500, cat); // prints 'Sennacy barks' after 500 ms
boundTimeout(meow, 500, dog); // prints 'Fido meowsss' after 500 ms
boundTimeout(meow, 500, cat); // prints 'Sennacy meowsss' after 500 ms
***********************************************************************/
// function bark() {
//   console.log(this.name + ' barks');
// }
// const dog = { name: 'Fido', colour: 'brown' };

function boundTimeout(cb, time, obj) {
  let bound = cb.bind(obj);
  return setTimeout(bound, time);
}

// boundTimeout(bark, 500, dog); // prints 'Fido barks' after 500 ms



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// try {
//   module.exports = boundTimeout;
// } catch {
//   module.exports = null;
// }
module.exports = boundTimeout;