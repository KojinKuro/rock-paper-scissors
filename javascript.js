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