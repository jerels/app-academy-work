/**
 * Use the "memo" object to memoize the tribonacci function so that it can
 * compute "large" tribonacci numbers.
 *
 * Do not change the name of the tribonacci function.
 *
 * In the tribonacci function, do not change the first four lines of
 * of non-comment code. Those are there as part of the algorithm. Write
 * your code after the "// DO NOT CHANGE THE PREVIOUS FOUR LINES" and,
 * most likely, before the return statement.
 ***************************************************************************/


const memo = { 0: 0, 1: 0, 2: 1 };

function tribonacci(n) {
  // DO NOT CHANGE THE NEXT FOUR LINES
  if (memo[n] !== undefined) return memo[n];
  const n1 = tribonacci(n - 1);
  const n2 = tribonacci(n - 2);
  const n3 = tribonacci(n - 3);
  // DO NOT CHANGE THE PREVIOUS FOUR LINES



  memo[n] = n1 + n2 + n3;
  return memo[n];
}


/****************************************************************************
 * In case you want to know about Tribonacci numbers, here's the Wikipedia
 * link, though you really don't need to know anything more.
 * https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers
 ***************************************************************************/

/****************************************************************************
 * Do not change code below this line.
 */
try {
  module.exports = { tribonacci, memo };
} catch (e) { }
