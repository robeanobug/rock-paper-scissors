let computerChoice = '';

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

// function getHumanChoice() {
//     const humanChoice = prompt("Rock, paper, scissors, shoot!");
//     return humanChoice;
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    getComputerChoice();
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`)

    if (humanChoice === computerChoice) {
        console.log(`You both picked ${humanChoice}. Try again.`)
        return;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++;
            console.log(`Computer wins!`);
            console.log(`Score is You: ${humanScore} Computer: ${computerScore}.`);
    } else {
        humanScore++;
        console.log(`You win!`);
        console.log(`Score is You: ${humanScore} Computer: ${computerScore}.`);
    }
}

function playGame() {

    for (let i = 0; i < 1; i++) {
        playRound(humanChoice, computerChoice);
    }
}
