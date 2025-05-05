function getComputerChoice(max = 3) {
    const randomNumber = Math.floor(Math.random() * max);   if (randomNumber === 0) {
    return `Rock`;
   } else if (randomNumber === 1) {
    return `Paper`;
   } else {
    return `Scissors`;
   }
}

function getHumanChoice() {
    const inputValue = prompt(`Enter Rock, Paper, or Scissors`);
    if (inputValue === `Rock`) {
        return `Rock`;
    } else if (inputValue === `Paper`) {
        return `Paper`;
    } else if (inputValue === `Scissors`) {
        return `Scissors`;
    }
}

let humanScore = 0;
let computerScore = 0;
