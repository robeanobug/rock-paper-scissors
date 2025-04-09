function getComputerChoice() { 
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    }
    else if (random == 1) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, scissors, shoot!");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You both picked ${humanChoice}. Try again.`)
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Computer wins!")
        } else {
            console.log("You win!")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win!")
        } else {
            console.log("Computer wins!")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Computer wins!")
        } else {
            console.log("You win!")
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        console.log(humanChoice);
        let computerChoice = getComputerChoice();
        console.log(computerChoice)

        playRound(humanChoice, computerChoice);
    }
}

playGame();