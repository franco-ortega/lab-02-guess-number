// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const guessSpan = document.getElementById('guess-span');
const triesSpan = document.getElementById('tries-span')
const resetButton = document.getElementById('reset-button');

/*console.log(guessInput, guessButton, guessSpan, triesSpan, resetButton);

console.log(guessSpan.textContent)*/
// initialize state

let triesRemaining = 4;

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

let correctNumber = Math.floor((Math.random() *20) +1);

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
        triesSpan.textContent = '';
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-button').disabled = true;
    } else if (judge === -1) {
console.log(-1);
        triesRemaining--;
        guessSpan.textContent = 'Too Low!';
        triesSpan.textContent = `You have ${triesRemaining} guesses left.`;
    } else if (judge === 1) {
console.log(1);
        triesRemaining--;
        guessSpan.textContent = 'Too High!';
        triesSpan.textContent = `You have ${triesRemaining} guesses left.`;
    }

    if (triesRemaining === 0) {
        guessSpan.textContent = `Game over. The correct number was ${correctNumber}`;
        triesSpan.textContent = '';
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-button').disabled = true;
    }


console.log(`user guesses ${guess}!`);
console.log(correctNumber + ' is the correct number');
console.log(judge);
console.log(triesRemaining + ' tries remaining');

});


resetButton.addEventListener('click', () => {
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-button').disabled = false;
    guessInput.value = '';
    correctNumber = Math.floor((Math.random() *20) +1);
    triesRemaining = 4;
    triesSpan.textContent = `You have ${triesRemaining} guesses left.`;
})
