
function getComputerChoice(){
    
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    // console.log(getRandomInt(3));

    for (let i = getRandomInt(3); i <=3; i++) {
        if (i === 0) {
            return "rock"
        }
        else if (i === 1) {
            return "paper"
        }
        else if (i === 2) {
            return "scissors"
        }
        else {
            return "Incorrect input"
        }
    }
    
    
}

console.log(getComputerChoice())

function getHumanChoice(){

    let choice = prompt("rock, paper or scissors?");

    return choice.toLowerCase();

}

console.log(getHumanChoice());

let humanScore = "0";

let computerScore = "0";


function playRound(computerChoice, humanChoice) {

   

    if (getComputerChoice === "rock" && getHumanChoice === "rock") {
        console.log("draw")
    }

    else if (getComputerChoice === "rock" && getHumanChoice === "paper") {
        console.log("paper beats rock!")
    let humanScore = +1 
    }
   
    else if (getComputerChoice === rock && getHumanChoice === scissors) {
        console.log("rock beats scissors!")
        computerScore = +1
    }

    else if (getComputerChoice === paper && getHumanChoice === paper) {
        console.log("draw")
    }

    else if (getComputerChoice === paper && getHumanChoice === rock) {
        console.log("paper beats rock!")
        computerScore = +1
    }

    else if (getComputerChoice === paper && getHumanChoice === scissors) {
        console.log("scissors beats paper!")
    let humanScore = +1 
    }
    else if (getComputerChoice() === scissors && getHumanChoice === scissors) {
    console.log("draw")
    }

   else if (getComputerChoice === scissors && getHumanChoice === rock) {
    console.log("rock beats scissors!")
    let humanScore = +1 
    }

    else if (getComputerChoice === scissors && getHumanChoice === paper) {
        console.log("scissors beats paper!")
        computerScore = +1
    }
}

playRound(1)
console.log(humanScore)
console.log(computerScore)

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

