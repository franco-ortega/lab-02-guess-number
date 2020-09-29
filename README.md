# lab-02-guess-number

Here we go!!

### Goal
The user will play a game that allows them to guess a random (randomly generated) number. They make a guess by entering a number in an input. They have 4 chances (tries) to guess correctly. If they guess correctly, then the game displays a message saying that they won. If they guess incorrectly, the game will tell them if they guessed too high or too low. If they try 4 times without guessing correctly, then the game tells them they lost, and no more input can be added (disable further input). The user may reset the game to play again.

### HTML
1. Title
1. Header
1. Content
    - Instructions for game 
1. Create elements to be grabbed by JS
    - BUTTON to submit Guess
    - BUTTON to Reset game
    - INPUT to enter Guess
    - SPAN to Display if Guess was correct:
        - Correct
        - Too High
        - Too High
    - SPAN to Display number of Tries remaining
    - SPAN to display End (WIN or LOSE
    
### JavaScript
1. Create IDs for HTML elements:
    1. guess-input
    1. guess-button
    1. guess-span
    1. tries-remaining-span
    1. results-span
    1. reset-button
1. Functions
    1. compareNumbers(guess, correctNumber)
        - test function:
            - return 0, if Guess is Correct
            - return 1, if Guess is Too High
            - return -1, if Guess is Too Low
    1. randomNumber = (Math.floor(Math.random() * 20)
1. Variables
    1. Tries remaining = starts at 4
    1. Correct Number = randomNumber -> correctNumber(Math.floor(Math.random() * 20)
    1. Message for Too Low
    1. Message for Too High
1.  Event Listener for button

1. Summary
    1. Guess correct
        - WIN
        - Display: WIN
        - Block further input
    1. Guess incorrect
        - Use 1 guess/try
        - Display: Too High or Too Low
    1. Guess incorrect x4
        - LOSE
        - Display: LOSE
        - Block further input