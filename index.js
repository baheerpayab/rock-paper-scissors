const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let round = 1;
let playerWins = 0;
let computerWins = 0;

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

function checkWinner() {
    if (computerWins == 3 || playerWins == 3 || round == 5) {
        round = 5;
        results();
    }
}

function results() {
    console.log("Computer:" + " " + computerWins)
    console.log("Player:" + " " + playerWins)
    if (computerWins > playerWins) {
        console.log("Computer Wins!");
    } if (playerWins > computerWins) {
        console.log("You Win!");
    } if (playerWins == computerWins) {
        console.log("You Tied!")
    }
    console.log("Results");
}

function game() {

    for (round = 1; round <= 5; round++) {
        playRound();
        console.log(round)
        console.log(playerWins);
        console.log(computerWins);
        checkWinner();
        }
    
}


game();
