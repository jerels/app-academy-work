const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numAttempts = 4
let secretNumber = 0
const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkGuess = num => {
    if (num > secretNumber) {
        console.log("Too high!!");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low!!");
        return false;
    } else {
        console.log("Correct!!");
        return true;
    }
}

const askRange = function () {
    rl.question("Give me a number: ", (min) => {
        rl.question("OK. Give me something higher: ", (max) => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...")
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        })
    })
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        if (numAttempts === 0) {
            console.log("You lose lol");
            rl.close();
        }
        else if (checkGuess(Number(answer))) {
            console.log("You Win!!")
            rl.close();
        }
        else {
            numAttempts--;
            return askGuess();
        }
    })
}

function askLimit() {
    rl.question("How many times do you want to play? ", (num) => {
        numAttempts = num - 1;
        askRange();
    })
}

// console.log(randomInRange(15, 20));
// console.log(randomInRange(15, 20));
// console.log(randomInRange(15, 20));

askLimit();

//askRange();

//askGuess();