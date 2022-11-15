
const Choices = ['rock','paper','scissors'];
let playerSelection = "";
let computerSelection = "";
let result = "";
let userScore = 0;
let computerScore = 0;





function getComputerChoice() {

    return Choices[Math.floor(Math.random()*3)];

}


function playRound(playerSelection) {

    
    computerSelection = getComputerChoice();

    if(playerSelection===computerSelection) {

        return console.log("Tie");
    }

    if(playerSelection=="rock"&&computerSelection=="paper") {
        computerScore +=1;
        return console.log("You Lost! Paper beats Rock.");
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors") {

        userScore+=1;
        return console.log("You Win! Rock beats Scissors");
    }

    if(playerSelection=="paper"&&computerSelection=="rock") {
        userScore+=1;
        return console.log("You Win! Paper beats Rock.");
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors") {
        computerScore +=1;
        return console.log("You Lost! Scissors beats Paper");
    }

    if(playerSelection=="scissors"&&computerSelection=="rock") {
        computerScore +=1;
        return console.log("You Lost! Rock beats Scissors.");
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper") {
        userScore+=1;
        return console.log("You Win! Scissors beats Paper");

    }



}

function updateScore() {
     scoreComputer.textContent = computerScore;
     scoreUser.textContent = userScore;
}

//Interface for DOM
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const scoreComputer = document.querySelector(".cscore");
const scoreUser = document.querySelector(".uscore");



rockBtn.addEventListener("click", function(){playRound("rock");});
paperBtn.addEventListener("click", function(){playRound("paper");});
scissorsBtn.addEventListener("click", function(){playRound("scissors");});
rockBtn.addEventListener("click", function(){updateScore();});
paperBtn.addEventListener("click", function(){updateScore();});
scissorsBtn.addEventListener("click", function(){updateScore();});

    
  
    