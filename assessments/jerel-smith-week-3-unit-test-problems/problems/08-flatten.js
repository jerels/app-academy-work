/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // => []
flatten([1, 2]); // => [1, 2]
flatten([1, [2, [3]]]); // => [1, 2, 3]
***********************************************************************/

function flatten(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    arr.forEach(el => {
        if (Array.isArray(el)) {
            newArr.push(...flatten(el));
        } else {
            newArr.push(el);
        }
    });
    return newArr;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// try {
// } catch {
//     module.exports = null;
// }
module.exports = flatten;