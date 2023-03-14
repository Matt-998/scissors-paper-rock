function computerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    y = "Scissors";
  } else if (x === 1) {
    y = "Paper";
  } else {
    y = "Rock";
  }
  return y;
}
console.log(computerChoice());
