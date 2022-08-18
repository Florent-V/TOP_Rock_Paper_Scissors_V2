const choices = ['Rock', 'Paper', 'Scissors'];
let computerSelection = getComputerChoice();


function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}
  
const result = {
    player : 0,
    computer : 0,
    msg1 : "",
    msg2 : ""
}

function playRound(playerSelection, computerSelection) {
    displayChoice(playerSelection, computerSelection);
    console.log(`You choose ${playerSelection}`);
    console.log(`Computer choose ${computerSelection}`);
    if (playerSelection === computerSelection) {
      result.computer++;
      result.player++;
      result.msg1 = "Tie Game !";
      result.msg2 = "One point each";
      return result;
    } else if (
      (playerSelection === "Paper" && computerSelection === "Rock") || 
      (playerSelection === "Rock" && computerSelection === "Scissors") || 
      (playerSelection === "Scissors" && computerSelection === "Paper")
      ) {
        result.player++;
        result.msg1 = "You Win !";
        result.msg2 = `${playerSelection} beats ${computerSelection} !`
        return result;
    } else if (
      (playerSelection === "Paper" && computerSelection === "Scissors") || 
      (playerSelection === "Rock" && computerSelection === "Paper") || 
      (playerSelection === "Scissors" && computerSelection === "Rock")
      ) {
        result.computer++;
        result.msg1 = "You Lose !";
        result.msg2 = `${computerSelection} beats ${playerSelection} !`
        return result;
    }
}

function updateScore() {
    document.getElementById("score_player").innerText = result.player;
    document.getElementById("score_computer").innerText = result.computer;
    document.getElementById("score_player").innerText = result.player;
    document.querySelector(".title > h2").innerText = result.msg1;
    document.querySelector(".title > h3").innerText = result.msg2;
}

function displayChoice(player, computer) {
    document.querySelector("#player > img").setAttribute('src', "img/"+player.toLowerCase()+".svg");
    document.querySelector("#computer > img").setAttribute('src', "img/"+computer.toLowerCase()+".svg");
}

function displayEnd() {
    document.getElementById('end_game').classList.toggle('invisible');
    document.getElementById('end_game').classList.toggle('visible');
    document.querySelector("#player > img").setAttribute('src', "");
    document.querySelector("#computer > img").setAttribute('src', "");
}

function checkEnd() {
    if (result.player === 5 || result.computer==5) {
        displayEnd()
    }
    if (result.player === result.computer) {
        document.querySelector('#end_popup > p').innerText = "It's time game !"
    } else if (result.player > result.computer) {
        document.querySelector('#end_popup > p').innerText = "You Won !"
    } else {
        document.querySelector('#end_popup > p').innerText = "You lost..."
    }
}

function start(playerchoice) {
    playRound(playerchoice, getComputerChoice());
    updateScore();
    checkEnd();
}

document.getElementById("rock").addEventListener('click', function(){
    start("Rock");
});

document.getElementById("paper").addEventListener('click', function(){
    start("Paper");
});

document.getElementById("scissors").addEventListener('click', function(){
    start("Scissors");
});

document.querySelector('#end_popup > button').addEventListener('click', function() {
    result.computer = 0;
    result.player = 0;
    result.msg1 = "Man VS Computer";
    result.msg2 = "First to score 5 points wins the game !";
    updateScore();
    displayEnd();
})
