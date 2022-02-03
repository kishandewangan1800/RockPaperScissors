const start = document.getElementById("start");

const gameContainer = document.querySelector(".game-container");
const startContainer = document.querySelector(".start-container");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choies = ["rock", "paper", "scissors"];
const heading = document.getElementById("heading");


const result = document.querySelector(".result");
const playerResult = document.querySelector(".player-result");
const computerResult = document.querySelector(".computer-result");


let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
var gameStart = false;

start.addEventListener("click", () => {
    gameContainer.style.display = "block";
    startContainer.style.display = "none";
    gameStart = true;
    playerScore = 0;
    computerScore = 0;
    maxScore = 5;
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore
    heading.innerHTML ="WELCOME TO ROCK PAPER SCISSORS GAME!"
    heading.style.color = "rgb(15, 27, 99)"
    result.style.display ="block"
    result.innerHTML ="Result Here";
    result.style.color = "rgb(15, 27, 99)"

});



rock.addEventListener("click", () => {
    startGame("rock");
});
paper.addEventListener("click", () => {
    startGame("paper");
});
scissors.addEventListener("click", () => {
    startGame("scissors")
});

function randomChoice() {
    let num = Math.floor(Math.random() * choies.length);
    return choies[num];
}

function winnigOne(pc, cs) {
    if (pc === cs) {
        return "draw"
    } else if ((pc === "rock" && cs === "paper") || (pc === "paper" && cs === "scissors") || (pc === "scissors" && cs === "rock")) {
        return "computer"
    } else {
        return "player";
    }

}


function startGame(playerChoice) {
    const computerChoice = randomChoice();
    playerResult.innerHTML=`<i class="fas fa-hand-${playerChoice} icon"></i>`
    computerResult.innerHTML=`<i class="fas fa-hand-${computerChoice} icon"></i>`

    const won = winnigOne(playerChoice, computerChoice)
    if (won === "player") {
        result.innerHTML = "Player Won!"
        result.style.color = "green"
        playerScore++;


    } else if (won === "computer") {
        result.innerHTML = "Computer Won!"
        result.style.color = "red"
        computerScore++;
    } else {
        result.innerHTML = "Draw!"
        result.style.color = "Black"
    }

    playerResult.innerHTML += playerScore;
    computerResult.innerHTML += computerScore;
   

    if (computerScore >= maxScore) {
        gameContainer.style.display = "none";
        startContainer.style.display = "block";
        start.innerHTML = "Play Again"
        heading.innerHTML = "Opps! You lost :("
        heading.style.color = "red";
        gameStart = false
        result.innerHTML="";
    }

    if (playerScore >= maxScore) {
        gameContainer.style.display = "none";
        startContainer.style.display = "block";
        start.innerHTML = "Play Again"
        heading.innerHTML = "Congrats! You won :)"
        heading.style.color = "green"
        gameStart = false
        result.innerHTML=""
    }

}
