// const getComputerChoice = () => {
//     let result = ['rock', 'paper', 'scissors']

//     return result[Math.floor(Math.random()*3)]
// }

// const computerChoice = getComputerChoice();

const playRound = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === computerChoice){
        return "It's a draw!"
    }

    //need to refactor
    if(playerChoice === 'rock' && computerChoice === "scissors") {
        return "You won! Rock beats Scissors"
    } else if(playerChoice === 'rock' && computerChoice === "paper"){
        return "You lost! Paper beats Rock!"
    }

    if(playerChoice === 'paper' && computerChoice === "rock") {
        return "You won! Paper beats Rock!"
    } else if(playerChoice === 'paper' && computerChoice === "scissors"){
        return "You lost! Scissors beats Paper!"
    }

    if(playerChoice === 'scissors' && computerChoice === "paper") {
        return "You won! Scissors beats Paper"
    } else if(playerChoice === 'scissors' && computerChoice === "rock"){
        return "You lost! Rock beats Scissors!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, paper, or scissors?");
    //   const computerSelection = Math.random() < 0.33 ? "rock" : (Math.random() < 0.66 ? "paper" : "scissors");

      const computerChoice = () => {
        let result = ['rock', 'paper', 'scissors']
    
        return result[Math.floor(Math.random()*3)]
    }
  
      const roundResult = playRound(playerSelection, computerChoice());
      console.log(roundResult);
  
      if (roundResult.startsWith("You won!")) {
        playerScore++;
      } else if (roundResult.startsWith("You lost!")) {
        computerScore++;
      }
    }
    if (playerScore > computerScore) {
        console.log("You won the game!");
      } else if (playerScore < computerScore) {
        console.log("You lost the game!");
      } else {
        console.log("The game was a tie.");
      }
}

