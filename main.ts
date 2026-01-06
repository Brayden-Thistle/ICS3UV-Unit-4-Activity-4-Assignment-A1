/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-06
 * @fileoverview this program is a guessing game for numbers 1-10
 */

//variables
let answer: number;
let guess = -1;

//determines the random number with a max of 10
answer = Math.floor(Math.random() * 10);

//intro to game
console.log("Welcome to the guessing game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.")

//guessing loop
while (guess !== answer && guess !== 0) {
  guess  = Number(prompt("Enter your guess:"));
  //decides whether to keep going or to end
  if (guess === 0) {
    console.log("You have given up.");
  } else if (guess !== 0 && guess !== answer)
    console.log("Try again.")
}

//tells you if you got it wright and displays the correct answer.
if (guess === answer) {
  console.log(`Congratualtions! You guessed the write answer: ${answer}`)
}
