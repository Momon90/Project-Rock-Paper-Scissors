# Project-Rock-Paper-Scissors

PSEUDOCODE

Step: 1
Understand the problem
- create a new function named getCoumputerChoice
- hint: Math.random static method 
- arrays aren't necessary here.

Plan
- input: the input will be from Math.random method or from the computer or idk
- Desired output: random string values: 'rock', 'paper' or 'scissors' from the function itself

Pseudocode 
- when the input comes in, in this case if from Math.random
- if input = 0. output = rock
- if input = 1. output = paper
- if input = 2. output = scissor

Subproblem: how to let Rock be returned if Math.floor(Math.random() * 3) return 0 using conditional statement. - ans: put it in a variable const randomNumber = Math.floor(Math.random() * max);
