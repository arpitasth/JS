const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW!!';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

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

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  pChoice === cChoice 
  ? RESULT_DRAW 
  : ((pChoice === PAPER && cChoice === ROCK) || 
    (pChoice === SCISSORS && cChoice === PAPER) ||
    (pChoice === ROCK && cChoice === SCISSORS))
  ? RESULT_PLAYER_WINS
  : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
  
  if(gameIsRunning) {
    return;
  }
  this.gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if(playerSelection) {
    winner = getWinner(playerSelection, computerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection}, therefore you`;
  if(winner === RESULT_DRAW) {
    message = message + ' had a draw.';
  } else if(winner === RESULT_PLAYER_WINS) {
    message =  message + ' won.';
  } else if(winner === RESULT_COMPUTER_WINS) {
    message = message + ' lost.';
  }
  alert(message);
  this.gameIsRunning = false;
 
});

const combine = (cb, operation, ...numbers) => {
  let sum = 0;
  for(const num of numbers) {
    if(operation === 'ADD')
      sum += num;
    if(operation === 'SUBTRACT')
      sum -= num;
  }
  cb(sum);
}

const resultHandler = (message, result) => {
  alert(message +' ' + result);
}

combine(resultHandler.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3);
combine(resultHandler.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 5, 10, -3);
combine(resultHandler.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 5, 10, -3);


