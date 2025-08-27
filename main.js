let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('Rock, Paper or Scissors').toLowerCase();
}

function playGame() {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

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

  playRound(computerSelection, humanSelection);
}

let rounds = 5;
while (rounds >= 1) {
  playGame();
  rounds--;
}

if (humanScore === computerScore) {
  console.log("IT'S A TIE!!");
} else if (humanScore > computerScore) {
  console.log('HUMAN HAS WIINN!!');
} else {
  console.log('COMPUTER HAS WIIINN!!');
}
