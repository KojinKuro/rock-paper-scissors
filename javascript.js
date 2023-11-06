//main gameloop runs once
let playerChoice = prompt('Rock, paper, or scissors?','');
let result = playRound(playerChoice, getComputerChoice());
alert(result);

function getComputerChoice() {
    //generate a number between 1 to 3
    let compNumChoice = Math.floor(Math.random() * 3) + 1;
    //assign that number to an outcome
    switch (compNumChoice) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            console.warn('Computer was not able to generate a valid choice.');
            return;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    // whatever the player types gets converted into 'Rock', 'Paper', 'Scissors'
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    // gameResult will end up in the format of "You Lose! Paper beats Rock"
    let gameText = "You ";
    let gameResult = rpsSolver(playerSelection, computerSelection);
    if (gameResult === playerSelection) {
        gameText += `won! ${playerSelection} beats ${computerSelection}.`;
    } else if (gameResult === computerSelection) {
        gameText += `lost! ${playerSelection} loses to ${computerSelection}.`;
    } else {
        // if you get errors in the code will default to a draw.
        gameText += `drew! ${playerSelection} and ${computerSelection} are the same.`;
    } return gameText;
}

function rpsSolver(res1, res2) {
    switch (res1) {
        case 'Rock':
            if (res2 == 'Scissors') {
                return res1;
            } else if (res2 == 'Paper') {
                return res2;
            } else {
                return;
            } break;
        case 'Paper':
            if (res2 == 'Rock') {
                return res1;
            } else if (res2 == 'Scissors') {
                return res2;
            } else {
                return;
            } break;
        case 'Scissors':
            if (res2 == 'Paper') {
                return res1;
            } else if (res2 == 'Rock') {
                return res2;
            } else {
                return;
            } break;
        default:
            console.warn('rpsWinner() was not able to determine a winner');
            return;
            break;
    }
}