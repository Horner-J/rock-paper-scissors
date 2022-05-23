const compDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('game-result');

document.getElementById('user-rock').addEventListener('click', userRock)
document.getElementById('user-paper').addEventListener('click', userPaper)
document.getElementById('user-scissors').addEventListener('click', userScissors)


function computerChoice () {
    let compChoice
    let ranNum = Math.floor(Math.random() * 3) + 1;
        if (ranNum === 1) {
            compChoice = "Rock";
            console.log("rock");
        }
        if (ranNum === 2) {
            compChoice = "Paper";
            console.log("paper");
        }
        if (ranNum === 3) {
            compChoice = "Scissors";
            console.log("scissors");
        }
    compDisplay.innerHTML = compChoice
}

function userRock() {
    let compChoice
    let ranNum = Math.floor(Math.random() * 3) + 1;
        if (ranNum === 1) {
            compChoice = "Rock";
            console.log("rock");
            result = "Tie snooze";
            console.log(result);
        }
        if (ranNum === 2) {
            compChoice = "Paper";
            console.log("paper");
            result = "Paper covers rock loser";
            console.log(result);
        }
        if (ranNum === 3) {
            compChoice = "Scissors";
            console.log("scissors");
            result = "Smash those puny scissors!";
            console.log(result);
        }
    compDisplay.innerHTML = compChoice
    resultDisplay.innerHTML = result
}

function userPaper() {
    let compChoice
    let ranNum = Math.floor(Math.random() * 3) + 1;
        if (ranNum === 1) {
            compChoice = "Rock";
            console.log("rock");
            result = "You Win!";
            console.log(result);
        }
        if (ranNum === 2) {
            compChoice = "Paper";
            console.log("paper");
            result = "Tie - Lame!";
            console.log(result);
        }
        if (ranNum === 3) {
            compChoice = "Scissors";
            console.log("scissors");
            result = "Scissors cut paper loser";
            console.log(result);
        }
    compDisplay.innerHTML = compChoice
    resultDisplay.innerHTML = result
}

function userScissors() {
    let compChoice
    let ranNum = Math.floor(Math.random() * 3) + 1;
        if (ranNum === 1) {
            compChoice = "Rock";
            console.log("rock");
            result = "Rock Smash You!";
            console.log(result);
        }
        if (ranNum === 2) {
            compChoice = "Paper";
            console.log("paper");
            result = "Sweet You Finally Won!";
            console.log(result);
        }
        if (ranNum === 3) {
            compChoice = "Scissors";
            console.log("scissors");
            result = "Tie - boring!";
            console.log(result);
        }
    compDisplay.innerHTML = compChoice
    resultDisplay.innerHTML = result
}

