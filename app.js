    // import functions and grab DOM elements

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const guessSpan = document.getElementById('guess-span');
const triesRemainingSpan = document.getElementById('tries-remaining-span')
const resultsSpan = document.getElementById('results-span');
const resetButton = document.getElementById('reset-button');

console.log(guessInput, guessButton, guessSpan, triesRemainingSpan, resultsSpan, resetButton);

// initialize state

let triesRemaining = 4;
const correctNumber = Math.floor((Math.random() *20) +1);
const guess = guessInput;

console.log(triesRemaining, correctNumber, guess);

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } else if (guess < correctNumber) {
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    };

}

// set event listeners to update state and DOM