    // import functions and grab DOM elements

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const guessSpan = document.getElementById('guess-span');
const triesRemainingSpan = document.getElementById('tries-remaining-span')
const resultsSpan = document.getElementById('results-span');
const resetButton = document.getElementById('reset-button');

console.log(guessInput, guessButton, guessSpan, triesRemainingSpan, resultsSpan, resetButton);

console.log(guessSpan.textContent)
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

const correctNumber = Math.floor((Math.random() *20) +1);

guessButton.addEventListener('click', () => {

/*
console.log(`user starts with ${triesRemaining} tries`);

console.log('the user made a guess!');
*/
    const guess = guessInput.valueAsNumber;
    const judge = compareNumbers(guess, correctNumber);



    if (judge === 0) {
console.log(0);
        guessSpan.textContent = 'You Win!!!';
        document.getElementById('guess-input').disabled = true;

    } else if (judge === -1) {
console.log(-1);
        triesRemaining--;
        guessSpan.textContent = 'Too Low!';

    } else if (judge === 1) {
console.log(1);
        triesRemaining--;
        guessSpan.textContent = 'Too High!';
    }

    if (triesRemaining === 0) {
        guessSpan.textContent = 'You Lose.';
        document.getElementById('guess-input').disabled = true;
    }


console.log(`user guesses ${guess}!`);
console.log(correctNumber + ' is the correct number');
console.log(judge);
console.log(triesRemaining + ' tries remaining');

});