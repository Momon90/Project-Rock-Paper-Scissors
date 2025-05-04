function getComputerChoice(max = 3) {
    const randomNumber = Math.floor(Math.random() * max)
    if (randomNumber === 2) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 0) {
        return 'Scissor';
    }
}

function getHumanChoice() {
    const inputValue = prompt('Enter Rock, Paper or Scissor');
    if (inputValue.toLowerCase() === 'Rock'.toLowerCase()) {
        return 'Rock';
    } else if (inputValue.toLowerCase() === 'Paper'.toLowerCase()) {
        return 'Paper';
    } else if (inputValue.toLowerCase() === 'Scissor'.toLowerCase()) {
        return 'Scissor';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'Rock' && computerChoice == 'Rock') {
        return 'Neutral';
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        ++computerScore;
        return 'Computer Wins';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissor') {
        ++humanScore;
        return 'You Win';
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        ++humanScore;
        return 'You Win';
    } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
        return 'Neutral';
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissor') {
        ++computerScore;
        return 'Computer Wins';
    } else if (humanChoice === 'Scissor' && computerChoice === 'Rock') {
        ++computerScore;
        return 'Computer Wins';
    } else if (humanChoice === 'Scissor' && computerChoice === 'Paper') {
        ++humanScore;
        return 'You Win';
    } else if (humanChoice === 'Scissor' && computerChoice === 'Scissor') {
        return 'Neutral';
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

console.log(result);
console.log(humanScore);
console.log(computerScore);

function playGame() {
}

