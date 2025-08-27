let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const choice = prompt('Rock, Paper or Scissors').toLowerCase();

  if (!choice || typeof choice !== 'string' || !choices.includes(choice.toLowerCase())) {
    alert('You should choose between Rock, Paper and Scissors');
    return getHumanChoice();
  }

  return choice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("-- It's a tie --");
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('-- Human win --');
    humanScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('-- Human win --');
    humanScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('-- Human win --');
    humanScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    console.log('-- Computer win --');
    computerScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    console.log('-- Computer win --');
    computerScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log('-- Computer win --');
    computerScore++;
    console.log('Human score: ', humanScore);
    console.log('Computer score: ', computerScore);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanChoiceCounter = 0;
  console.clear();
}

function playGame() {
  resetGame();

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
  }

  console.log(`Final score: Human - ${humanScore} | Computer - ${computerScore}.`);

  if (humanScore === computerScore) {
    console.log("IT'S A TIE!!");
  } else if (humanScore > computerScore) {
    console.log('HUMAN HAS WIINN!!');
  } else {
    console.log('COMPUTER HAS WIIINN!!');
  }
}

function isDevToolsClosed() {
  const threshold = 160; // un valor aproximado para diferenciar
  const widthDiff = window.outerWidth - window.innerWidth;
  const heightDiff = window.outerHeight - window.innerHeight;

  return widthDiff < threshold && heightDiff < threshold;
}

const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  if (isDevToolsClosed()) {
    alert('You should open the console before playing');
    return;
  }

  playGame();
});
