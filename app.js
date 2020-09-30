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

/*
When user clicks button, the game will
-generate a correctNumber
-take the guess from the INPUT
-compare it to the correctNumber
-tell user if they WIN or guessed wrong
--if they guessed wrong, -1 guess
--if they have 0 tries left, they LOSE
---no more input accepted
*/

guessButton.addEventListener('click', () => {

/*
console.log(`user starts with ${triesRemaining} tries`);

console.log('the user made a guess!');
*/
    const correctNumber = Math.floor((Math.random() *20) +1);

    const guess = guessInput.valueAsNumber;

    const judge = compareNumbers(guess, correctNumber);

    if (judge === 0) {
        console.log(0);
    } else if (judge === -1) {
        console.log(-1);
    } else if (judge === 1) {
        console.log(1);
    }

console.log(`user guesses ${guess}!`);
console.log(correctNumber);
console.log(judge);


});