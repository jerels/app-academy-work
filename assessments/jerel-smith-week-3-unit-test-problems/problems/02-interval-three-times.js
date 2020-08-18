/***********************************************************************
Write a function `intervalThreeTimes` that accepts a callback and a delay in
milliseconds. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed exactly three times.

Examples

intervalThreeTimes(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals a total of 3 times

***********************************************************************/


function intervalThreeTimes(cb, time) {
    let count = 3;
    const clear = setInterval(function () {
        while (count > 0) {
            count--;
            cb();
        }
        clearInterval(clear);
    }, time);

}

// intervalThreeTimes(function () {
//     console.log('bye');
// }, 1000); // prints 'bye' at 1000ms intervals a total of 3 times



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// try {
// } catch {
//   module.exports = null;
// }
module.exports = intervalThreeTimes;