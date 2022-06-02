function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3) + 1; 
  switch (randomNumber ) {
      case 1: return "rock"; break;
      case 2: return "paper"; break;
      default: return "scissors"; break;
  }
}

let playGame = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return ["w", "You won! Rock beats Scissors"];
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return ["w", "You won! Scissors beat Paper"];
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return ["w", "You won! Paper beats Rock"];
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return ["l", "You Lose! Rock beats Scissors"];
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return ["l", "You Lose! Scissors beat Paper"];
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return ["l", "You Lose! Paper beats Rock"];
  } else if (computerSelection === "rock" && playerSelection === "rock") {
    return ["t", "Tie! Both Rock"];
  } else if (computerSelection === "scissors" && playerSelection === "scissors") {
    return ["t", "Tie! Both Scissors"];
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    return ["t", "Tie! Both Paper"];
  } else {
    return ["l", "You Lose! Unexpected selection ..."];
  }
}

let playerSelection = "rock";
let computerSelection = computerPlay();

let game = () => {
  let result;
  let winCnt = 0;
  let loseCnt = 0;
  for (let i = 1; i <= 5; i++) {
    playerSelection = String(prompt("Please entery your selection:")).toLowerCase();
    computerSelection = computerPlay();
    result = playGame(playerSelection, computerSelection);
    if (result[0] === "w") {
      winCnt++;
      console.log(`i: ${i} winCnt: ${winCnt} loseCnt: ${loseCnt} ${result[1]}`);
      if (winCnt === 3) {
        console.log("You win!");
        break;
      }
    } else if (result[0] === "l") {
      loseCnt++;
      console.log(`i: ${i} winCnt: ${winCnt} loseCnt: ${loseCnt} ${result[1]}`);
      if (loseCnt === 3) {
        console.log("You lose!");
        break;
      }
    } else if (result[0] === "t") {
      console.log(`i: ${i} winCnt: ${winCnt} loseCnt: ${loseCnt} ${result[1]}`);
      i--;
    } else {
      console.log("Wrong input!");
      break;
    }
  }
}