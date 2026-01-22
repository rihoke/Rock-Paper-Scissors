
function getComputerChoice(){
    
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    console.log(getRandomInt(3))

    for (let i = getRandomInt; i <=3; i++) {
        if (i === 0) {
            return rock
        }
        else if (i === 1) {
            return paper
        }
        else if (i === 2) {
            return scissors
        }
        else {
            return "Incorrect input"
        }
    }


    // const 0 ="rock";
    // const 1 ="paper";
    // const 2 ="scissors";
    
}

console.log(getComputerChoice());