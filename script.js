
const Choices = ['rock','paper','scissors'];


function getComputerChoice() {

return Choices[Math.floor(Math.random()*3)];

}


let playerSelection = (window.prompt("please write your choice")).toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {




    if(playerSelection===computerSelection) {

        return "Tie";
    }

    if(playerSelection=="rock"&&computerSelection=="paper") {

        return "You Lost! Paper beats Rock."
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors") {

        return "You Win! Rock beats Scissors"
    }

    if(playerSelection=="paper"&&computerSelection=="rock") {

        return "You Win! Paper beats Rock."
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors") {

        return "You Lost! Scissors beats Paper"
    }

    if(playerSelection=="scissors"&&computerSelection=="rock") {

        return "You Lost! Rock beats Scissors."
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper") {

        return "You Win! Scissors beats Paper"
    }



}

console.log(playRound(playerSelection, computerSelection));

for(let i=0; i<5; i++) {

    console.log(playRound(playerSelection, computerSelection));

}