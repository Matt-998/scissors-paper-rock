const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const displayWinner = document.querySelector("#winner");
const playerScoreDisplay = document.querySelector("#player");
const computerScoreDisplay = document.querySelector("#computer");

scissors.onclick = playRound;
paper.onclick = playRound;
rock.onclick = playRound;
let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = `Player: ${playerScore}`;
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

console.log("Scissors Paper Rock - Best of 5!");
displayWinner.textContent = "Scissors Paper Rock - Best of 5!";

// Check for winner with computer and player inputs
function decideWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    console.log("TIE!");
    displayWinner.textContent = "TIE!";
  } else if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
    console.log("You Win! Rock beats Scissors!");
    displayWinner.textContent = "You Win! Rock beats Scissors!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
    return 1;
  } else if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
    console.log("You Win! Scissors beats Paper!");
    displayWinner.textContent = "You Win! Scissors beats Paper!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
    return 1;
  } else if (computerChoice === "ROCK" && playerChoice === "PAPER") {
    console.log("You Win! Paper beats Rock!");
    displayWinner.textContent = "You Win! Paper beats Rock!";
    playerScoreDisplay.textContent = `Player: ${playerScore++}`;
    return 1;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    displayWinner.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    computerScoreDisplay.textContent = `Computer: ${computerScore++}`;
    return 2;
  }
}

// Play 1 round (get computer and player inputs and check for winner)
function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = this.value;
  console.log(`Player - ${playerChoice}`);
  console.log(`Computer - ${computerChoice}`);
  let winner = decideWinner(computerChoice, playerChoice);
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  return winner;
}

// Plays 5 rounds and declares a winner

// console.log(`Player - ${playerScore}\nComputer - ${computerScore}`);

// if (playerScore > computerScore) {
//   console.log("Congratulations! You WIN!");
// } else if (playerScore < computerScore) {
//   console.log("Bad luck! You LOSE!");
// } else {
//   console.log("It's a TIE! Who made this???");
// }

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
