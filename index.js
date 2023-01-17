const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let round = 1;
let playerWins = 0;
let computerWins = 0;
let noWins = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    computerChoice = (choices[random]);
    return 
}

function playRound() {
    getComputerChoice();
    playerChoice = prompt("Write rock, paper, or scissors");
    console.log("You chose" + " " + playerChoice.toUpperCase() + "!");
    console.log("Computer chose" + " " + computerChoice.toUpperCase() + "!");
     if (computerChoice.toUpperCase() == playerChoice.toUpperCase()) {
        console.log("Tie!");
        noWins++;
    } if (computerChoice == "rock" && playerChoice.toUpperCase() == "PAPER") {
        console.log("You Win!");
        playerWins++;
    } if (computerChoice == "rock" && playerChoice.toUpperCase() == "SCISSORS") {
        console.log("You Lose!");
        computerWins++;
    } if (computerChoice == "paper" && playerChoice.toUpperCase() == "SCISSORS") {
        console.log("You Win!");
        playerWins++;
    } if (computerChoice == "paper" && playerChoice.toUpperCase() == "ROCK") {
        console.log("You Lose!");
        computerWins++;
    } if (computerChoice == "scissors" && playerChoice.toUpperCase() == "ROCK") {
        console.log("You Win!");
        playerWins++;
    } if (computerChoice == "scissors" && playerChoice.toUpperCase() == "PAPER") {
        console.log("You Lose!");
        computerWins++;
    }
}  

function results() {
    console.log("Results");
}

function game() {
    if (computerWins == 1 || playerWins == 1) {
        results();
    } else {
        for (round = 1; round <= 5; round++) {
            playRound();
            console.log(round)
            console.log(playerWins);
            console.log(computerWins);
        }
    }
}


game();
