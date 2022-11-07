
const Choices = ['rock','paper','scissors'];


function getComputerChoice() {

    ;

return Choices[Math.floor(Math.random()*2)];

}

let computerSelection = getComputerChoice();
let playerSelection = (window.prompt('please write your choice')).toLowerCase();

function playRound(playerSelection,computerSelection) {

    if(playerSelection===computerSelection) {

        return "Draw";
    }







}

console.log(playRound(playerSelection, computerSelection));
