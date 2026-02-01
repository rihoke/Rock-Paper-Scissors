
function getComputerChoice(){
    
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

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


function getHumanChoice(){

    let choice = prompt("rock, paper or scissors?");

    return choice.toLowerCase();

}


let humanScore = "0";

let computerScore = "0";


function playRound(humanchoice, computerchoice) {


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (computerSelection === "rock" && humanSelection === "rock") {
        console.log("draw")
    }

    else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("paper beats rock!")
    humanScore ++ 
    }
   
    else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("rock beats scissors!")
       computerScore ++
    }
    

    else if (computerSelection === "paper" && humanSelection === "paper") {
        console.log("draw")
    }

    else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("paper beats rock!")
       computerScore ++
    }
    

    else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("scissors beats paper!")
    humanScore ++
    }

    else if (computerSelection === "scissors" && humanSelection === "scissors") {
    console.log("draw")
    }

   else if (computerSelection === "scissors" && humanSelection === "rock") {
    console.log("rock beats scissors!")
    humanScore ++
    }

    else if(computerSelection === "scissors" && humanSelection === "paper") {
        console.log("scissors beats paper!")
        computerScore ++
    }
}


playRound()
console.log(humanScore)
console.log(computerScore)

playRound()
console.log(humanScore)
console.log(computerScore)

playRound()
console.log(humanScore)
console.log(computerScore)

playRound()
console.log(humanScore)
console.log(computerScore)

playRound()
console.log(humanScore)
console.log(computerScore)



function endScore() {

    if (humanScore > computerScore) {
        console.log("You won, gongratulations!")
    }

    else {
        console.log("Computer won, better luck next time")
    }
}

endScore()



// console.log(playRound(humanSelection, computerSelection));

