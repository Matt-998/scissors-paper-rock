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

function playerChoice() {
  let y = prompt("Your selection: ");
  let x = y.toUpperCase();
  return x;
}

function winner() {
  if (c === p) {
    console.log("TIE!");
  } else if (c === "SCISSORS" && p === "ROCK") {
    console.log("You Win! Rock beats Scissors!");
  } else if (c === "PAPER" && p === "SCISSORS") {
    console.log("You Win! Scissors beats Paper!");
  } else if (c === "ROCK" && p === "PAPER") {
    console.log("You Win! Paper beats Rock!");
  } else {
    console.log(`You Lose! ${c} beats ${p}!`);
  }
}
let p = playerChoice();
while (!(p == "ROCK" || p == "SCISSORS" || p == "PAPER")) {
  p = playerChoice();
}

let c = computerChoice();

console.log(p);
console.log(c);
winner();
