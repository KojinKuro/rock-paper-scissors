game();

function game() {
    const NUM_PLAYS = 5;
    let playerScore = computerScore = 0;

    let buttonNodes = document.querySelectorAll(`button`);
    buttonNodes.forEach((button) => {
        button.addEventListener('click', () => {
            //debugging code
            console.log(button.innerText);

            let playerChoice = button.innerText;
            let computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
            checkWinner();
        });
    });
}

function checkWinner() {
    let playerScoreNode = document.querySelector(`.player-container .score`);
    let computerScoreNode = document.querySelector(`.computer-container .score`);
    let gameWinnerNode = document.querySelector(`.game-winner`);
    const WIN_SCORE = 5;

    if (+playerScoreNode.innerText >= WIN_SCORE) {
        gameWinnerNode.innerText = 'You won against the computer!';
    } else if (+computerScoreNode.innerText >= WIN_SCORE) {
        gameWinnerNode.innerText = 'You lost against the computer!';
    }
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
    let gameResultMessage = `You `;
    let choiceBeatTxt = '';

    if (gameResult === playerSelection) {
        gameResultMessage += 'won';
        choiceBeatTxt = 'wins';
        addScorePlayer();
    } else if (gameResult === computerSelection) {
        gameResultMessage += 'lost';
        choiceBeatTxt = 'loses';
        addScoreComputer();
    } else {
        gameResultMessage += 'drew';
        choiceBeatTxt = 'draws';
    } gameResultMessage += `! ${playerSelection} ${choiceBeatTxt} against ${computerSelection}.`;

    document.querySelector('.game-result').innerText = gameResultMessage;
}

function addScorePlayer() {
    let playerScore = document.querySelector('.player-container .score');
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
}

function addScoreComputer() {
    let computerScore = document.querySelector('.computer-container .score');
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
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