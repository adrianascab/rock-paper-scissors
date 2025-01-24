function getComputerChoice() {
    const number = Math.random();
    if (number < 0.3) {
        return "rock";
    }
    else if (0.3 <= number && number < 0.6) {
        return "paper";
    }
    else if (number >= 0.6) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: rock paper or scissors");
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        console.log("Invalid answer")
        choice = prompt("Choose: rock paper or scissors");
    }
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "DRAW!!";
    }
    else {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore += 1;
                return "Computer WINS!";
            }
            else if (computerChoice == "scissors") {
                humanScore += 1;
                return "Human WINS!";
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore += 1;
                return "Human WINS!";
            }
            else if (computerChoice == "scissors") {
                computerScore += 1;
                return "Computer WINS!";
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore += 1;
                return "Computer WINS!";
            }
            else if (computerChoice == "paper") {
                humanScore += 1;
                return "Human WINS!";
            }
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    }
    else if (humanScore > computerScore) {
        console.log("Human wins the game");
    }
    else if (humanScore == computerScore) {
        console.log("DRAW!!!!!!!")
    }
}

playGame();