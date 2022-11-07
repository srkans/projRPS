
const Choices = ['rock','paper','scissors'];
let playerSelection = "";
let computerSelection = "";
let result = "";
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {

return Choices[Math.floor(Math.random()*3)];

}


function playRound(playerSelection,computerSelection) {

    playerSelection = (window.prompt("please write your choice")).toLowerCase();
    computerSelection = getComputerChoice();

    if(playerSelection===computerSelection) {

        return "Tie";
    }

    if(playerSelection=="rock"&&computerSelection=="paper") {
        computerScore+=1;
        return "You Lost! Paper beats Rock."
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors") {

        userScore +=1;
        return "You Win! Rock beats Scissors"
    }

    if(playerSelection=="paper"&&computerSelection=="rock") {
        userScore +=1;
        return "You Win! Paper beats Rock."
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors") {
        computerScore+=1;
        return "You Lost! Scissors beats Paper"
    }

    if(playerSelection=="scissors"&&computerSelection=="rock") {
        computerScore+=1;
        return "You Lost! Rock beats Scissors."
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper") {
        userScore +=1;
        return "You Win! Scissors beats Paper"
    }



}

function game() {
   
    for(let i=0; i<5; i++) {

    console.log(playRound(playerSelection,computerSelection));
    
    }

    if(userScore===computerScore) {

        console.log("Draw");
    }
    else if (userScore>computerScore) {

        console.log("You Win the Game!");
    }
    else {
        console.log("You Lose the Game!")
    }


    }




game();
