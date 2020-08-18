/***********************************************************************
Write a function `stringConverter(string)` that will takes a
string as an argument and returns an object containing the count of
each character in the string.

Examples:

stringConverter("apple") // => {a: 1, p: 2, l: 1, e: 1}
stringConverter("banana") // => {b: 1, a: 3, n: 2}
stringConverter("raccoon") // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++){
    let key = string[i];
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  return obj;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// try {
// 	module.exports = stringConverter;
// } catch {
//   module.exports = null;
// }
module.exports = stringConverter;