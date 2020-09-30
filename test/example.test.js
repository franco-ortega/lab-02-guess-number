// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //If the guess is equal to correctNumber, then it should return 0.
    // Set up your arguments and expectations
    const argument1 = 10;
    const argument2 = 10;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //If the guess is less than correctNumber, then it should return -1.
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 10;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //If the guess is more than correctNumber, then it should return 1.
    // Set up your arguments and expectations
    const argument1 = 15;
    const argument2 = 10;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
