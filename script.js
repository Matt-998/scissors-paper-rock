// Declaring all html element variables
const choiceList = document.querySelectorAll("button.choices");
const reset = document.querySelector("#reset");
const displayWinner = document.querySelector("#winner");
const playerScoreDisplay = document.querySelector("#player");
const computerScoreDisplay = document.querySelector("#computer");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const hardCheck = document.getElementById("hard");

// Global variables manipulated by functions
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let hardMode = false;

initialise();

// Event listeners for all buttons/ checkbox
for (const choice of choiceList) {
  choice.addEventListener("click", playRound);
}
reset.addEventListener("click", initialise);
hardCheck.addEventListener("click", initialise);

// Restore all game variables to initial state
function initialise() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  for (choice of choiceList) {
    choice.disabled = false;
  }
  if (hardCheck.checked == true) {
    hardMode = true;
  } else {
    hardMode = false;
  }
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  displayWinner.textContent = "";
}

// Check for winner with computer and player inputs, declare round winner
// and update scores
function decideWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    displayWinner.textContent = "TIE! No Points!";
  } else if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
    displayWinner.textContent = "You Win! Rock beats Scissors!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
  } else if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
    displayWinner.textContent = "You Win! Scissors beats Paper!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
  } else if (computerChoice === "ROCK" && playerChoice === "PAPER") {
    displayWinner.textContent = "You Win! Paper beats Rock!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
  } else {
    displayWinner.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    computerScoreDisplay.textContent = `Computer: ${computerScore++}`;
  }
}

// Play 1 round (get computer and player inputs and check for round winner)
function playRound() {
  let playerChoice = this.value;
  let computerChoice = getComputerChoice();
  if (hardMode == true) {
    computerChoice = ComputerChoiceHard(playerChoice);
  }
  playerChoiceDisplay.textContent = `You chose ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose ${computerChoice}`;
  decideWinner(computerChoice, playerChoice);
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  roundCount++;
  declareGameWinner();
}

// Pulls global variable values and declares a winner based off those values
function declareGameWinner() {
  if (roundCount === 5) {
    for (choice of choiceList) {
      choice.disabled = true;
      if (playerScore > computerScore) {
        displayWinner.textContent = "Congratulations! You WIN!";
      } else if (playerScore < computerScore) {
        displayWinner.textContent = "Bad luck! You LOSE!";
      } else if (playerScore === computerScore) {
        displayWinner.textContent = "It's a TIE! Who made this???";
      }
    }
  }
}

// Get computer choice with RNG
function getComputerChoice() {
  let intermediate = Math.floor(Math.random() * 3);
  if (intermediate === 0) {
    choice = "SCISSORS";
  } else if (intermediate === 1) {
    choice = "PAPER";
  } else {
    choice = "ROCK";
  }
  return choice;
}

// Get computer choice but totally biased to win every time
function ComputerChoiceHard(playerChoice) {
  if (playerChoice === "SCISSORS") {
    choice = "ROCK";
  } else if (playerChoice === "PAPER") {
    choice = "SCISSORS";
  } else {
    choice = "PAPER";
  }
  return choice;
}
