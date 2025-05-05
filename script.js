function getComputerChoice(max = 3) {
    const randomNumber = Math.floor(Math.random() * max);   if (randomNumber === 0) {
    return `Rock`;
   } else if (randomNumber === 1) {
    return `Paper`;
   } else {
    return `Scissors`;
   }
}