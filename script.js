function getComputerChoice(max = 3) {
    const randomNumber = Math.floor(Math.random() * max)
    if (randomNumber == 2) {
        return 'Rock';
    } else if (randomNumber == 1) {
        return 'Paper';
    } else if (randomNumber == 0) {
        return 'Scissors';
    }
}

console.log(getComputerChoice());


function getHumanChoice() {
    const inputValue = prompt('Enter Rock, Paper or Scissor');
    if (inputValue == 'Rock') {
        return 'Rock';
    } else if (inputValue == 'Paper') {
        return 'Paper';
    } else if (inputValue == 'Scissor') {
        return 'Scissor';
    }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'Rock' && computerChoice == 'Rock') {
        console.log('Neutral');
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        console.log('Computer Wins');
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissor') {
        console.log('You Win');
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        console.log('You Win');
    } else if (humanChoice == 'Paper' && computerChoice == 'Paper') {
        console.log('Neutral');
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissor') {
        console.log('Computer Wins');
    } else if (humanChoice == 'Scissor' && computerChoice == 'Rock') {
        console.log('Computer Wins');
    } else if (humanChoice == 'Scissor' && computerChoice == 'Paper') {
        console.log('You Win');
    } else if (humanChoice == 'Scissor' && computerChoice == 'Scissor') {
        console.log('Neutral');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

console.log(result);