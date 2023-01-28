const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let round = 1;
let playerWins = 0;
let computerWins = 0;
let gameButton = document.querySelectorAll(".button");

/*
TO ADD -
roundsPlayed and currentRound counters
disable button EventListener if roundsPlayed = 9
Remove case-insensitivity for playerChoice
Display player and computer choices
Display round winner
Display BO9 winner
Display reset button after BO9 is completed
*/

gameButton.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        playRound();
    })

});

document.getElementById("rounds").innerHTML = round;
    document.getElementById("playerScore").innerText = playerWins;
    document.getElementById("computerScore").innerText = computerWins;

function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    computerChoice = (choices[random]);
    return 
}

function playRound() {
    getComputerChoice();
    // playerChoice = prompt("Write rock, paper, or scissors");
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
    game();
    checkWinner();

}  

function checkWinner() {
    if (computerWins == 5 || playerWins == 5 || round == 9) {
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
        if (round < 9) {
        round++;
        }
        document.getElementById("rounds").innerHTML = round;
        document.getElementById("playerScore").innerText = playerWins;
        document.getElementById("computerScore").innerText = computerWins;
    
}


//game();
