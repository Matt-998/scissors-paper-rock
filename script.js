const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");

scissors.onclick = playRound;
paper.onclick = playRound;
rock.onclick = playRound;

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

// Get player choice with PROMPT
function getPlayerChoice() {
  let input = this.value;
  console.log(input);
  return input;
}

// Check for winner with computer and player inputs
function decideWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    console.log("TIE!");
  } else if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
    console.log("You Win! Rock beats Scissors!");
    return 1;
  } else if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
    console.log("You Win! Scissors beats Paper!");
    return 1;
  } else if (computerChoice === "ROCK" && playerChoice === "PAPER") {
    console.log("You Win! Paper beats Rock!");
    return 1;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    return 2;
  }
}

// Play 1 round (get computer and player inputs and check for winner)
function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = this.value;
  while (
    !(
      playerChoice == "ROCK" ||
      playerChoice == "SCISSORS" ||
      playerChoice == "PAPER"
    )
  ) {
    playerChoice = getPlayerChoice();
  }
  console.log(`Player - ${playerChoice}`);
  console.log(`Computer - ${computerChoice}`);
  let winner = decideWinner(computerChoice, playerChoice);
  return winner;
}

// Plays 5 rounds and declares a winner
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Scissors Paper Rock - Best of 5!");
  for (let x = 0; x < 1; x++) {
    let winner = playRound();
    if (winner === 1) {
      playerScore++;
    } else if (winner === 2) {
      computerScore++;
    }
    console.log(`Player - ${playerScore}\nComputer - ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You WIN!");
  } else if (playerScore < computerScore) {
    console.log("Bad luck! You LOSE!");
  } else {
    console.log("It's a TIE! Who made this???");
  }
}
