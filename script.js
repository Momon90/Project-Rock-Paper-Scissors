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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'Rock' && computerChoice == 'Rock') {
            console.log('Neutral');
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            console.log('You lose! Paper beats Rock');
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissor') {
            console.log('You win!');
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            console.log('You win!');
        } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
            console.log('Neutral');
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissor') {
            console.log('You lose! Scissor beats Paper');
        } else if (humanChoice === 'Scissor' && computerChoice === 'Rock') {
            console.log('You lose! Rock beats Scissor');
        } else if (humanChoice === 'Scissor' && computerChoice === 'Paper') {
            console.log('You win!');
        } else if (humanChoice === 'Scissor' && computerChoice === 'Scissor') {
            console.log('Neutral');
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result1 = playRound(humanSelection, computerSelection);
}

playGame();
playGame();





