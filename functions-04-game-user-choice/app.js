const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const DRAW = 'DRAW!!';
const PLAYER_WINS = 'PLAYER WINS!';
const COMPUTER_WINS = 'COMPUTER WINS!';

const gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const getRandomMove = Math.random();
  if(getRandomMove <= 0.36) {
    return ROCK;
  } else if(getRandomMove <= 0.65) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const startGame = (pChoice, cChoice) => {
  if (
      pChoice === PAPER && cChoice === ROCK || 
      pChoice === SCISSORS && cChoice === PAPER ||
      pChoice === ROCK && cChoice === SCISSORS 
  ) {
    alert(PLAYER_WINS);
  } else if(pChoice === cChoice) {
    alert(DRAW);
  } else {
    alert(COMPUTER_WINS);
  }
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning) {
    return;
  }
  console.log('Game is starting...');
  this.gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  startGame(playerSelection, computerSelection);
});
