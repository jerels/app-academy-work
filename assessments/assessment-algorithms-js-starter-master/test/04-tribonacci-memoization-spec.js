const chai = require('chai');
const expect = chai.expect;

const solution = require('../04-tribonacci-memoization');

let tribonacci = null;

if (solution !== null) {
  ({ tribonacci, memo } = solution);
}

const smallValues = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012];

describe('The tribonacci() function', () => {
  it('runs ok for a small entry', async () => {
    const input = Math.floor(Math.random() * (smallValues.length - 2)) + 2;

    const result = tribonacci(input);

    expect(result).to.equal(smallValues[input]);
  });

  it('runs ok for a large entry', function () {
    this.timeout(5000);

    const input = Math.floor(Math.random() * 0) + 30;
    const start = new Date();

    const result = tribonacci(input);

    const end = new Date();
    const timeDiff = end - start;

    expect(timeDiff).to.be.lessThan(250, 'Your computation took too long');
    expect(result).to.equal((x=>(Buffer.from("MzAxNTkwMjU5MS4zMTI5MjQ5NDI1LjMyNTM3OTgwODAuMzM5ODk1MDA5Ni4zNDE4MTk5NzYwMS4zNTMzNDc0NTc3Ny4zNjYxNTY5MzQ3NC4zNzExMzI0MzY4NTIuMzgyMDgyODc2MTAzLjM5MzgzMTAwNjQyOS40MDcwNDYzMTkzODQuNDExMjk2MDIwMTkxNi40MjIzODM3NTI3NzI5LjQzNDM4NDQwNDkwMjkuNDQ4MDY0MTc3ODY3NC40NTE0ODMyMzM1NTQzMi40NjI3MjgwOTE4MzEzNS40NzUwMTc3NDMxNzI0MS40ODkyMjkwNjg1NTgwOC40OTE2OTc0OTAzNTYxODQ=","base64").toString().split(".").map(x=>([x.substring(0,2),x.substring(2)])).map(([x,y])=>([x-0,y-0])))[x-30][1])(input));
  });
});
