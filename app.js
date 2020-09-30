import { compareNumbers } from './utils.js';

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const guessSpan = document.getElementById('guess-span');
const triesSpan = document.getElementById('tries-span')
const resetButton = document.getElementById('reset-button');

let triesRemaining = 4;
let correctNumber = Math.floor((Math.random() *20) +1);

guessButton.addEventListener('click', () => {
    const guess = guessInput.valueAsNumber;
    const judge = compareNumbers(guess, correctNumber);

    if (judge === 0) {
        guessSpan.textContent = 'You Win!!!';
        triesSpan.textContent = 'Play again?';
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-button').disabled = true;
    } else if (judge === -1) {
        triesRemaining--;
        guessInput.value = '';
        guessSpan.textContent = 'Too Low!';
        triesSpan.textContent = `Guesses remaining: ${triesRemaining}`;
    } else if (judge === 1) {
        triesRemaining--;
        guessInput.value = '';
        guessSpan.textContent = 'Too High!';
        triesSpan.textContent = `Guesses remaining: ${triesRemaining}`;
    }

    if (triesRemaining === 0) {
        guessSpan.textContent = `Game over. The correct number was ${correctNumber}`;
        triesSpan.textContent = 'Play again?';
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-button').disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-button').disabled = false;
    guessInput.value = '';
    correctNumber = Math.floor((Math.random() *20) +1);
    triesRemaining = 4;
    guessSpan.textContent = 'Will you guess high or low or correctly?';
    triesSpan.textContent = `You have ${triesRemaining} guesses left.`;
})
