function getComputerChoice(max = 3) {
    const randomNumber = Math.floor(Math.random() * max); if (randomNumber === 0) {
        return `Rock`;
    } else if (randomNumber === 1) {
        return `Paper`;
    } else {
        return `Scissors`;
    }
}

function getHumanChoice() {
    const inputValue = prompt(`Enter Rock, Paper, or Scissors`);
    if (inputValue.toLowerCase() === `Rock`.toLowerCase()) {
        return `Rock`;
    } else if (inputValue.toLowerCase() === `Paper`.toLowerCase()) {
        return `Paper`;
    } else if (inputValue.toLowerCase() === `Scissors`.toLowerCase()) {
        return `Scissors`;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === `Rock` && computerChoice === `Rock`) || (humanChoice === `Paper` && computerChoice === `Paper`) || (humanChoice === `Scissors` && computerChoice === `Scissors`)) {
        console.log(`It's a tie`);
    } else if (humanChoice === `Rock` && computerChoice === `Paper`) {
        console.log(`You lose! Paper beats Rock`);
    } else if (humanChoice === `Paper` && computerChoice === `Scissors`) {
        console.log(`You lose! Scissors beats Paper`);
    } else if (humanChoice === `Scissors` && computerChoice === `Rock`) {
        console.log(`You lose! Rock beats Scissors`);
    } else {
        console.log(`You win!`);
    }

    // let neutral = console.log(`It's a tie`);
    // let youWin = console.log(`You win!`);
    // let youLose = console.log(`You lose! Paper beats Rock`);
    // let youLose2 = console.log(`You lose! Scissors beats Paper`);
    // let youLose3 = console.log(`You lose! Rock beats Scissors`);

    if (`You win!`) {
        ++humanScore;
    } else if (`You lose! Paper beats Rock` || `You lose! Scissors beats Paper` || `You lose! Rock beats Scissors`) {
        ++computerScore;
    }

    console.log(humanScore);
    console.log(computerScore);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let result = playRound(humanSelection, computerSelection);
console.log(result)