"use strict";

// Assigning DOM elements to variables
const diceImage = document.querySelector(".dice");

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

let winScore, activePlayer, activeScore, activeCurrentScore;

function rollDice() {
  // Randomly generate a number between 1-6
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  // Set the dice image to appropriate number
  diceImage.src = `dice-${diceValue}.png`;
  diceImage.classList.remove("hidden");
  if (diceValue > 1) {
    activeCurrentScore.textContent =
      Number(activeCurrentScore.textContent) + Number(diceValue);
  } else {
    activeCurrentScore.textContent = 0;
    toggleActivePlayer(activePlayer);
  }
}

function holdScore() {
  activeScore.textContent =
    Number(activeScore.textContent) + Number(activeCurrentScore.textContent);
  activeCurrentScore.textContent = 0;
  if (activeScore.textContent >= winScore) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    btnRollDice.classList.add("hidden");
    btnHold.classList.add("hidden");
  }
  toggleActivePlayer(activePlayer);
}

function toggleActivePlayer(currPlayer) {
  switch (currPlayer) {
    case 0:
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
      break;
    case 1:
      player2.classList.remove("player--active");
      player1.classList.add("player--active");
      break;
  }
  activePlayer = player1.classList.contains("player--active") ? 0 : 1;
  activeScore = document.getElementById(`score--${activePlayer}`);
  activeCurrentScore = document.getElementById(`current--${activePlayer}`);
}

function resetGame() {
  winScore = Number(prompt("Enter the winning score..."));
  diceImage.classList.add("hidden");
  btnRollDice.classList.remove("hidden");
  btnHold.classList.remove("hidden");

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  document.getElementById("score--0").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  toggleActivePlayer(1);
}

// To start with hide the dice image
resetGame();

btnRollDice.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
btnNewGame.addEventListener("click", resetGame);
