const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const skipBtn = document.getElementById('reset-btn');
let computerScore = 0;
let humanScore = 0;
let rounds = 5;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button !== skipBtn) {
      if (button.id === 'rock') {
        playRound(getComputerChoice(), 'rock');
      } else if (button.id === 'paper') {
        playRound(getComputerChoice(), 'paper');
      } else {
        playRound(getComputerChoice(), 'scissors');
      }
    }
  });
});

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    rounds--;
    result.innerHTML = `
      <h2>It's a tie</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the user</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the user</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the user</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the computer</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    computerScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the computer</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore++;
    rounds--;
    result.innerHTML = `
      <h2>Point for the computer</h2>
      <p>Human score: ${humanScore}</p>
      <p>Computer score: ${computerScore}</p>
      <p><strong>Rounds:</strong> ${rounds}</p>
    `;
  }

  if (rounds === 0) {
    // Timer of 1.5s to let user view last result before it shows winner
    setTimeout(() => {
      result.innerHTML = `
      <p class="final-score"><strong>Final score:</strong> Human: ${humanScore} | Computer: ${computerScore}</p>
      <p class="final-result">${humanScore === computerScore ? "IT'S A TIE" : computerScore > humanScore ? '¡¡COMPUTER WIINN!!' : '¡¡HUMAN WIINN!!'}</p>
    `;
    }, 1500);

    buttons.forEach(button => {
      if (button !== skipBtn) {
        button.disabled = true;
      }
    });
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  rounds = 5;
  result.textContent = '';
  buttons.forEach(button => {
    if (button !== skipBtn) {
      button.disabled = false;
    }
  });
}
