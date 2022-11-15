
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

    if (userScore<5 && computerScore<5) {
        if(playerSelection===computerSelection) {

            result="Tie";
        }

        if(playerSelection=="rock"&&computerSelection=="paper") {
            computerScore +=1;
            result="You Lost! Paper beats Rock.";
        }
        else if(playerSelection=="rock"&&computerSelection=="scissors") {

            userScore+=1;
            result="You Win! Rock beats Scissors";
        }

        if(playerSelection=="paper"&&computerSelection=="rock") {
            userScore+=1;
            result="You Win! Paper beats Rock.";
        }
        else if(playerSelection=="paper"&&computerSelection=="scissors") {
            computerScore +=1;
            result="You Lost! Scissors beats Paper";
        }

        if(playerSelection=="scissors"&&computerSelection=="rock") {
            computerScore +=1;
            result = "You Lost! Rock beats Scissors.";
        }
        else if(playerSelection=="scissors"&&computerSelection=="paper") {
            userScore+=1;
            result ="You Win! Scissors beats Paper";

        }
    }

}

function updateScore() {
     scoreComputer.textContent = computerScore;
     scoreUser.textContent = userScore;
     roundResult.textContent = result;
}


function endGame () {

    if (userScore==5) {

        resMessage.innerHTML = "You win the Game!!! Do you wanna play again?" 
        restartButton.innerText = "OK!";

    
    }
    else if(computerScore==5) {
        resMessage.innerHTML = "You lost the Game!!! Do you wanna play again?" 
        restartButton.innerText = "OK!";
 
    }

}

function restartGame() {

    userScore = 0;
    computerScore = 0;
    document.body.removeChild(resMessage);
    document.body.removeChild(restartButton);
    resMessage.innerHTML ="";
    restartButton.innerText = "";
    result = "";
    document.body.appendChild(resMessage);
    document.body.appendChild(restartButton);

}





//Interface for DOM
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const scoreComputer = document.querySelector(".cscore");
const scoreUser = document.querySelector(".uscore");
const roundResult = document.querySelector("#round");
const resMessage = document.createElement("p");
const restartButton = document.createElement("button");




rockBtn.addEventListener("click", function(){playRound("rock");});
paperBtn.addEventListener("click", function(){playRound("paper");});
scissorsBtn.addEventListener("click", function(){playRound("scissors");});
rockBtn.addEventListener("click", function(){updateScore();});
paperBtn.addEventListener("click", function(){updateScore();});
scissorsBtn.addEventListener("click", function(){updateScore();});


 rockBtn.addEventListener("click", function(){endGame();});
 paperBtn.addEventListener("click", function(){endGame();});
 scissorsBtn.addEventListener("click", function(){endGame();});


document.body.appendChild(resMessage);
document.body.appendChild(restartButton);

restartButton.addEventListener("click",function(){restartGame(),updateScore()});

    
  
    