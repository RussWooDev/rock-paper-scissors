const buttons = document.querySelectorAll('button');
const playerScoreElem = document.querySelector('#player-score');
const computerScoreElem = document.querySelector('#computer-score');
const annoucement = document.querySelector('#annoucement')

//setting up score annoucement
const winner = document.createElement('h1');
annoucement.appendChild(winner);


//Setting up scoreboard
let playerScore = 0;
let computerScore = 0;


//Computer choice
const getComputerChoice = () => {
  let result = ['rock', 'paper', 'scissors']
  return result[Math.floor(Math.random()*3)]
}


const playRound = (playerChoice, computerChoice) => {

    if(playerChoice === computerChoice){
        console.log("draw");
        winner.textContent = "Draw";
        return "draw";  
    }

    //need to refactor
    if((playerChoice === 'rock' && computerChoice === "scissors") ||
      (playerChoice === 'paper' && computerChoice === "rock")||
      (playerChoice === 'scissors' && computerChoice === "paper")){
      playerScore++;
      playerScoreElem.textContent = playerScore;
      winner.textContent = "Player wins";
      console.log('player')
      return 'player';
    } else {
      computerScore++;
      computerScoreElem.textContent = computerScore;
      winner.textContent = "Computer wins";
      console.log('com')
      return 'computer';
    }
}


buttons.forEach(button => {button.addEventListener('click', ()=> {
  const playerChoice = button.id;
  const computerChoice = getComputerChoice()
  playRound(playerChoice, computerChoice);  
})
});


