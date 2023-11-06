game();

function game() {
    const NUM_PLAYS = 5;
    let playerScore = computerScore = 0;

    console.log(`You are about to play ${NUM_PLAYS} rounds of Rock Paper Scissors.`)
    for (let i = 1; i <= NUM_PLAYS; i++) {
        let playerChoice = prompt('Rock, paper, or scissors?','');
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerChoice, computerChoice);
        let gameResultMessage = `You ${gameResult}! `;

        switch(gameResult) {
            case 'won':
                gameResultMessage += `${playerChoice} beats ${computerChoice}`;
                playerScore++;
                break;
            case 'lost':
                gameResultMessage += `${playerChoice} loses to ${computerChoice}`;
                computerScore++;
                break;
            case 'drew':
                gameResultMessage += `${playerChoice} and ${computerChoice} are the same.`
                break;
        }
        
        console.log(gameResultMessage);
        console.log(`The player:computer score is ${playerScore}:${computerScore}`);
    } console.log(checkWinner(playerScore,computerScore));
}

function checkWinner(score1,score2) {
    let playerResult = (score1 > score2) ? 'won' : (score2 > score1) ? 'lost' : 'drew';
    return `You ${playerResult} against the computer in RPS!`;
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
    playerSelection = formatText(playerSelection);
    computerSelection = formatText(computerSelection);

    let gameResult = solveRPS(playerSelection, computerSelection);
    if (gameResult === playerSelection) {
        return 'won';
    } else if (gameResult === computerSelection) {
        return 'lost';
    } else {
        return 'drew';
    }
}

function formatText(text) {
    return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
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