game();

function game() {
    const NUM_PLAYS = 5;
    let playerScore = computerScore = 0;

    let buttonNodes = document.querySelectorAll(`button`);
    buttonNodes.forEach((button) => {
        button.addEventListener('click', () => {
            let playerChoice = button.innerText;
            setPlayerIcon(playerChoice);
            let computerChoice = getComputerChoice();
            setComputerIcon(computerChoice);
            playRound(playerChoice, computerChoice);
            checkWinner();
        });
    });
}

function playAgain() {
    let gameWinnerNode = document.querySelector(`.game-winner`);
    gameWinnerNode.innerHTML += ` <button class="play-again">Play again?</button>`;

    let buttonPANode = document.querySelector(`.play-again`);
    buttonPANode.addEventListener('click', () => {
        document.querySelector(`.game-result`).innerText = '';
        document.querySelector(`.game-winner`).innerText = '';
        setPlayerIcon('?');
        setComputerIcon('?');
        document.querySelector(`.player-container .score`).innerText = '0';
        document.querySelector(`.computer-container .score`).innerText = '0';
    });
}

function checkWinner() {
    let playerScoreNode = document.querySelector(`.player-container .score`);
    let computerScoreNode = document.querySelector(`.computer-container .score`);
    let gameWinnerNode = document.querySelector(`.game-winner`);
    const WIN_SCORE = 5;

    if (+playerScoreNode.innerText >= WIN_SCORE && +playerScoreNode.innerText >= +computerScoreNode.innerText) {
        gameWinnerNode.innerText = 'You won against the computer!';
        playAgain();
    } else if (+computerScoreNode.innerText >= WIN_SCORE && +computerScoreNode.innerText >= +playerScoreNode.innerText) {
        gameWinnerNode.innerText = 'You lost against the computer!';
        playAgain();
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

function setPlayerIcon(text) {
    let playerIconNode = document.querySelector(`.player-container .icon`);
    switch (text) {
        case 'Rock':
            playerIconNode.innerText = '✊';
            break;
        case 'Paper':
            playerIconNode.innerText = '✋';
            break;
        case 'Scissors':
            playerIconNode.innerText = '✌️';
            break;
        default:
            playerIconNode.innerText = '?';
            break;
    }
}

function setComputerIcon(text) {
    let computerIconNode = document.querySelector(`.computer-container .icon`);
    switch (text) {
        case 'Rock':
            computerIconNode.innerText = '✊';
            break;
        case 'Paper':
            computerIconNode.innerText = '✋';
            break;
        case 'Scissors':
            computerIconNode.innerText = '✌️';
            break;
        default:
            computerIconNode.innerText = '?';
            break;
    }
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