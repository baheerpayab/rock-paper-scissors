const choices = ["ROCK", "PAPER", "SCISSORS"];
let computerChoice;
let playerChoice;
let currentRound = 1;
let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
const rockButton = document.getElementById("rock")
const scissorsButton = document.getElementById("scissors")
const paperButton = document.getElementById("paper")
let restart = document.getElementById("restartButton");
let roundsTxt = document.getElementById("rounds");
let playerWinsTxt = document.getElementById("playerWins");
let computerWinsTxt = document.getElementById("computerWins");
let moves = document.getElementById("moves");
let resultsTxt = document.getElementById("results")

/*
TO ADD -
disable button EventListener if round = 9
Display player and computer choices
Display round winner
Display BO9 winner
Display reset button after BO9 is completed
*/

/*gameButton.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice =  button.id.toUpperCase();
        playRound();
    })
    });*/


rockButton.addEventListener ("click", playRock);
paperButton.addEventListener ("click", playPaper);
scissorsButton.addEventListener ("click", playScissors);

roundsTxt.textContent = `${currentRound}`;
playerWinsTxt.textContent = `${playerWins}`;
computerWinsTxt.textContent = `${computerWins}`;

function restartGame() {
    currentRound = 1;
    roundsPlayed = 0;
    playerWins = 0;
    computerWins = 0;
    roundsTxt.textContent = `${currentRound}`;
    playerWinsTxt.textContent = `${playerWins}`;
    computerWinsTxt.textContent = `${computerWins}`;
    rockButton.addEventListener ("click", playRock);
    paperButton.addEventListener ("click", playPaper);
    scissorsButton.addEventListener ("click", playScissors);
    moves.textContent = "FIRST TO 5 WINS";
    resultsTxt.textContent = "";
    restart.classList.add("hidden");
}

function playRock() {
    playerChoice = rockButton.id.toUpperCase();
    playRound();
}

function playPaper() {
    playerChoice = paperButton.id.toUpperCase();
    playRound();
}

function playScissors() {
    playerChoice = scissorsButton.id.toUpperCase();
    playRound();
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    computerChoice = (choices[random]);
}

function playRound() {
    getComputerChoice();
    // playerChoice = prompt("Write rock, paper, or scissors");
    console.log("You chose" + " " + playerChoice + "!");
    console.log("Computer chose" + " " + computerChoice + "!");
     if (computerChoice == playerChoice) {
        moves.textContent = `YOU BOTH CHOSE ${playerChoice}! YOU TIED THE ROUND!`;
    } if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        moves.textContent = `COMPUTER CHOSE ROCK! YOU WON THE ROUND!`;
        playerWins++;
    } if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        moves.textContent = `COMPUTER CHOSE ROCK! YOU LOST THE ROUND!`;
        computerWins++;
    } if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        moves.textContent = `COMPUTER CHOSE PAPER! YOU WON THE ROUND!`;
        playerWins++;
    } if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        moves.textContent = `COMPUTER CHOSE PAPER! YOU LOST THE ROUND`;
        computerWins++;
    } if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        moves.textContent = `COMPUTER CHOSE SCISSORS! YOU WON THE ROUND!`;
        playerWins++;
    } if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        moves.textContent = `COMPUTER CHOSE SCISSORS! YOU LOST THE ROUND!`;
        computerWins++;
    }
    roundsUpdater();
    checkWinner();

}  

function checkWinner() {
    if (computerWins == 5 || playerWins == 5) {
        results();
    }
}

function results() {
    console.log("Computer:" + " " + computerWins)
    console.log("Player:" + " " + playerWins)
    if (computerWins > playerWins) {
        resultsTxt.textContent = "COMPUTER WINS";
    } if (playerWins > computerWins) {
        resultsTxt.textContent = "YOU WIN";
    } if (playerWins == computerWins) {
        resultsTxt.textContent = "NO WINNERS, YOU TIED";
    }
    console.log("Results");
    rockButton.removeEventListener ("click", playRock);
    paperButton.removeEventListener ("click", playPaper);
    scissorsButton.removeEventListener ("click", playScissors);
    restart.classList.remove("hidden");
    restart.addEventListener("click", restartGame);
    

}

function roundsUpdater() {    
            roundsPlayed++;
            currentRound++;   
        roundsTxt.textContent = `${currentRound}`;
        playerWinsTxt.textContent = `${playerWins}`;
        computerWinsTxt.textContent = `${computerWins}`;
        console.log(roundsPlayed);
        console.log(currentRound);
    
}


//game();
