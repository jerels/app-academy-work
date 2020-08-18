/***********************************************************************
Write a function named `dynamicDivider(divisor)`. When invoked the
`dynamicDivider` function will accept a number to be used as a divisor and will
then return a new function.

The function returned by `dynamicDivider` will accept a number to be divided by
the `divisor` provided when the `dynamicDivider` was first invoked.

Examples:

```js
let halvedbyTwo = dynamicDivider(2); //returns a function
halvedbyTwo(12); // returns 6
halvedbyTwo(18); // returns 9

let takeThird = dynamicDivider(3); // returns a function
takeThird(12); // returns 4
takeThird(18); // returns 6
```
***********************************************************************/

function dynamicDivider(num1) {
    return function (num2) {
        return num2 / num1;
    }
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// try {
// } catch {
//   module.exports = null;
// }

module.exports = dynamicDivider;