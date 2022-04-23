'use strict';

// Fetching the data from DOM
console.log(document.querySelector('.message').textContent);

// Setting the value of DOM element
// document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 9;

/* EVENT LISTENERS & HANDLERS*/

// define a randomly generated secret answer
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currScore = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.addEventListener('keydown', function (evt) {
  console.log(`${evt.code}`);
  let keyPress = evt.code;
  if (keyPress == 'Enter' || keyPress == 'NumpadEnter') {
    fxnGamePlay();
  }
});

/* Defining the game play function */
function fxnGamePlay() {
  const userGuess = Number(document.querySelector('.guess').value);

  if (currScore > 0) {
    if (!userGuess) {
      document.querySelector('.message').textContent = 'No Number!';
    } else if (userGuess === secretNumber) {
      // User made the right guess
      document.querySelector('.message').textContent = 'YOU WIN!!!';
      highScore = currScore > highScore ? currScore : highScore;
      document.querySelector('.highscore').textContent = highScore;

      // change the background color to green
      document.querySelector('body').style.backgroundColor = '#60b347';

      // change the width of box
      document.querySelector('.number').style.width = '30rem';

      // populate the box with the secret answer
      document.querySelector('.number').textContent = secretNumber;
    } else {
      // User made a wrong guess, give hint, reduce current score
      document.querySelector('.message').textContent =
        userGuess > secretNumber
          ? 'Too high! Guess lower...'
          : 'Too low! Guess higher...';
      currScore--;
      document.querySelector('.score').textContent = currScore;
    }
  } else {
    document.querySelector('.message').textContent = 'GAME OVER!!!';
  }
}

/* Defining the game restting function */
function fxnGameReset() {
  // Reset the webpage
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Reset the secret number randomly
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset the current score for the new game
  currScore = Number(document.querySelector('.score').textContent);
}

// Setting a click event listener & event handlers
document.querySelector('.check').addEventListener('click', fxnGamePlay);
document.querySelector('.again').addEventListener('click', fxnGameReset);
