const option = ["rock", "paper", "scissor"];

let choice = prompt("What's your choice");
if (!option.includes(choice)) {
  console.log("try again!");
  choice = prompt("What's your choice");
}

const playerSelection = choice.toLowerCase();
console.log(`Player's choice: ${playerSelection}`);

const computerplay = function (option) {
  return option[Math.trunc(Math.random() * option.length)];
};

const computerSelection = computerplay(option);
console.log(`Computer's choice: ${computerSelection}`);

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("draw match!!!");
  } else {
    if (computerSelection === option[0]) {
      if (playerSelection === option[1]) {
        console.log("Player wins!!!");
      } else {
        console.log("Computer wins!!!");
      }
    } else if (computerSelection === option[1]) {
      if (playerSelection === option[0]) {
        console.log("Computer wins!!!");
      } else {
        console.log("Player wins!!");
      }
    } else if (computerSelection === option[2]) {
      if (playerSelection === option[0]) {
        console.log("Player wins!!!");
      } else {
        console.log("Computer wins !!!");
      }
    }
  }
};

playRound(playerSelection, computerSelection);
