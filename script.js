function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection ==='rock' && computerSelection === 'scissors'
    || playerSelection ==='paper' && computerSelection === 'rock'
    || playerSelection ==='scissors' && computerSelection === 'paper') {
        return 'You Win!';
    } else if (playerSelection === computerSelection) {
        return 'Draw!';
    } else {
        return 'Computer Wins!'
    }
}

function handlePlayerChoice() {
    const playerChoice = event.target.classList[0];
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    let roundResult = `You choose ${playerChoice}, computer choose ${computerChoice}. ${result}`;
    updateScore(result);
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = '';
    const roundLog = document.createElement('p');
    roundLog.textContent = roundResult;
    logDiv.appendChild(roundLog);
}

let playerWins = 0;
let computerWins = 0;
let winningScore = 5;

function updateScore(result) {
    const resultDiv = document.getElementById('result') 
    if (result === 'You Win!') {
        playerWins++;
    } else if (result === 'Computer Wins!')  {
        computerWins++;
    }
    resultDiv.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;

    if (playerWins === winningScore) {
        resultDiv.textContent = 'Player wins the game!';
        disableButtons();
    } else if (computerWins === winningScore) {
        resultDiv.textContent = 'Computer wins the game!';
        disableButtons();
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', handlePlayerChoice);
})

const replay = document.getElementById('replay');
replay.addEventListener('click', function() {
    location.reload();
})

function disableButtons() {
    buttons.forEach((button) => {
        button.removeEventListener('click', handlePlayerChoice);
        button.disabled = true;
    })
}