let computerChoice = '';
let humanChoice = '';
let roundsPlayed = 0;
let maxRounds = 5;
let humanScore = 0;
let computerScore = 0;

// allows computer to choose between rock paper or scissors
function getComputerChoice() { 
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerChoice = "rock";
    }
    else if (random === 1) {
        computerChoice = "paper"
    } 
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// prompt the user to type in rock paper or scissors
// function getHumanChoice() {
//     humanChoice = prompt("Rock, paper, scissors, shoot!");
//     return humanChoice;
// }

// plays one round and updates UI and score
function playRound(humanChoice) {
    computerChoice = getComputerChoice();

    const whoPlayedWhatDiv = document.getElementById("whoPlayedWhat");
    const resultDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    whoPlayedWhatDiv.textContent = (`You chose ${humanChoice}. Computer chose ${computerChoice}.`);
    
    if (humanChoice === computerChoice) {
        resultDiv.textContent = (`You both picked ${humanChoice}. Try again.`)
        return;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        resultDiv.textContent = `Computer wins this round.`;
    } else {
        humanScore++;
        resultDiv.textContent = `You won this round.`;
    }
    roundsPlayed++;
    scoreDiv.textContent = (`Score is You: ${humanScore} Computer: ${computerScore}.`);
}

// sets up game logic with event listeners
function playGame() {
    const buttons = document.querySelectorAll(".choice-button");
    const winnerDiv = document.querySelector("#winner");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // makes sure game doesn't break after max number of rounds.
            if (roundsPlayed >= maxRounds) return;

            // accesses dataset choice propery and assigns to humanChoice
            const humanChoice = button.dataset.choice;
            // calls playRound with 
            playRound(humanChoice);

            if (roundsPlayed === maxRounds) {
                if (humanScore > computerScore) {
                    winnerDiv.textContent = (`You are the winner!!!`);
                } else if (computerScore > humanScore) {
                    winnerDiv.textContent = (`Computer wins...womp womp.`);
                } else {
                    winnerDiv.textContent = (`It's a tie!`);
                }
            }
        });
    });
}

playGame();