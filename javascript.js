
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



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

