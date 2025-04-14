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

function playGame(humanChoice) {
    playRound(humanChoice, computerChoice)
}

const playRock = document.querySelector("#playRock");
playRock.addEventListener("click", () => {
    playRound('rock');
})

const playPaper = document.querySelector("#playPaper");
playPaper.addEventListener("click", () => {
    playRound('paper');
})

const playScissors = document.querySelector("#playScissors");
playScissors.addEventListener("click", () => {
    playRound('scissors');
})