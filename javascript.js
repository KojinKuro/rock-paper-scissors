game();

function game() {
    const NUM_PLAYS = 5;

    console.log(`You are about to play ${NUM_PLAYS} rounds of Rock Paper Scissors.`)
    for (let i = 1; i <= NUM_PLAYS; i++) {
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
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
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
    // player values might not come in the right format. following code will format everything correctly.
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    let gameText = "You ";
    let gameResult = solveRPS(playerSelection, computerSelection);
    if (gameResult === playerSelection) {
        gameText += `won! ${playerSelection} beats ${computerSelection}.`;
        addPlayerScore();
    } else if (gameResult === computerSelection) {
        gameText += `lost! ${playerSelection} loses to ${computerSelection}.`;
        addComputerScore();
    } else {
        // if you get errors in the code will default to a draw.
        gameText += `drew! ${playerSelection} and ${computerSelection} are the same.`;
    } return gameText;
}

function solveRPS(res1, res2) {
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
    } return;
}