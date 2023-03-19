game();

// Get computer choice with RNG
function computerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    y = "SCISSORS";
  } else if (x === 1) {
    y = "PAPER";
  } else {
    y = "ROCK";
  }
  return y;
}

// Get player choice with PROMPT
function playerChoice() {
  let y = prompt("Your selection: ");
  let x = y.toUpperCase();
  return x;
}

// Check for winner with computer and player inputs
function winner(c, p) {
  if (c === p) {
    console.log("TIE!");
  } else if (c === "SCISSORS" && p === "ROCK") {
    console.log("You Win! Rock beats Scissors!");
    return 1;
  } else if (c === "PAPER" && p === "SCISSORS") {
    console.log("You Win! Scissors beats Paper!");
    return 1;
  } else if (c === "ROCK" && p === "PAPER") {
    console.log("You Win! Paper beats Rock!");
    return 1;
  } else {
    console.log(`You Lose! ${c} beats ${p}!`);
    return 2;
  }
}

// Play 1 round (get computer and player inputs and check for winner)
function playRound() {
  let c = computerChoice();
  let p = playerChoice();
  while (!(p == "ROCK" || p == "SCISSORS" || p == "PAPER")) {
    p = playerChoice();
  }
  console.log(`Player - ${p}`);
  console.log(`Computer - ${c}`);
  let score = winner(c, p);
  return score;
}

// Plays 5 rounds and declares a winner
function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Scissors Paper Rock - Best of 5!");
  for (let count = 0; count < 5; count++) {
    let score = playRound();
    if (score === 1) {
      playerScore++;
    } else if (score === 2) {
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
