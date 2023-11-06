//set the scores set to 0
let playerScore = computerScore = 0;
game();

function game() {
    const NUM_PLAYS = 5;
    console.log('You are about to play 5 rounds of Rock Paper Scissors.')
    for (let i = 1; i <= NUM_PLAYS; i++) {
        //main game runs once
        let playerChoice = prompt('Rock, paper, or scissors?','');
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log(`The player:computer score is ${playerScore}:${computerScore}`);
    } console.log(checkWinner(playerScore,computerScore));
}

function checkWinner(score1,score2) {
    let playerResult = (score1 > score2) ? 'won' : (score2 > score1) ? 'lost' : 'drew';
    return `You ${playerResult} against the computer in RPS!`;
}

function addPlayerScore() {
    playerScore += 1;
}

function addComputerScore() {
    computerScore += 1;
}

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
        //add to playerScore
        addPlayerScore();
    } else if (gameResult === computerSelection) {
        gameText += `lost! ${playerSelection} loses to ${computerSelection}.`;
        //add to computerScore
        addComputerScore();
    } else {
        // if you get errors in the code will default to a draw.
        gameText += `drew! ${playerSelection} and ${computerSelection} are the same.`;
    } return gameText;
}

function rpsSolver(res1, res2) {
    //will return the value that wins. if its a draw or incalculable, returns nothing;
    switch (res1) {
        case 'Rock':
            if (res2 == 'Scissors') {
                return res1;
            } else if (res2 == 'Paper') {
                return res2;
            } break;
        case 'Paper':
            if (res2 == 'Rock') {
                return res1;
            } else if (res2 == 'Scissors') {
                return res2;
            } break;
        case 'Scissors':
            if (res2 == 'Paper') {
                return res1;
            } else if (res2 == 'Rock') {
                return res2;
            } break;
    // if cannot resolve will blank return
    } return;
}