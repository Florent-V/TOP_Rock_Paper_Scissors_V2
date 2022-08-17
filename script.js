
let choice = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();

function getComputerChoice() {
    return choice[Math.floor(Math.random()*3)]
}
  
const result = {
    player : 0,
    computer : 0,
    msg1 : "",
    msg2 : ""
}

function playRound(playerSelection, computerSelection) {
    display_choice(playerSelection, computerSelection);
    console.log(`You choose ${playerSelection}`);
    console.log(`Computer choose ${computerSelection}`);
    if (playerSelection === "rock") {
      switch (computerSelection) {
        case "rock":
          result.computer++;
          result.player++
          result.msg1 = "Tie Game !";
          result.msg2 = "One point each";
          return result;
          break;
        case "paper":
          result.computer++;
          result.msg1 = "You Lose !";
          result.msg2 = "Paper beats Rock !"
          return result;
          break;
        case "scissors":
          result.player++;
          result.msg1 = "You Win !";
          result.msg2 = "Rock beats Scissors !"
          return result;
          break;
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "rock":
          result.player++;
          result.msg1 = "You Win !";
          result.msg2 = "Paper beats Rock !"
          return result;
          break;
        case "paper":
          result.computer++;
          result.player++;
          result.msg1 = "Tie Game !";
          result.msg2 = "One point each";
          return result;
          break;
        case "scissors":
          result.computer++;
          result.msg1 = "You Lose !";
          result.msg2 = "Scissors beats Paper !"
          return result;  
          break;
      }
    } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case "rock":
          result.computer++;
          result.msg1 = "You Lose !";
          result.msg2 = "Rock beats Scissors !"
          return result;
          break;
        case "paper":
          result.player++;
          result.msg1 = "You Win !";
          result.msg2 = "Scissors beats Paper !"
          return result;
          break;
        case "scissors":
          result.computer++;
          result.player++
          result.msg1 = "Tie Game !";
          result.msg2 = "One point each";
          return result;
          break;
      }
    }
}

function update_score() {
    document.getElementById("score_player").innerText = result.player;
    document.getElementById("score_computer").innerText = result.computer;
    document.getElementById("score_player").innerText = result.player;
    document.querySelector(".title > h2").innerText = result.msg1;
    document.querySelector(".title > h3").innerText = result.msg2;
}

function display_choice(player, computer) {
    document.querySelector("#player > img").setAttribute('src', "img/"+player+".svg");
    document.querySelector("#computer > img").setAttribute('src', "img/"+computer+".svg");
}

function display_end() {
    document.getElementById('end_game').classList.toggle('invisible');
    document.getElementById('end_game').classList.toggle('visible');
    document.querySelector("#player > img").setAttribute('src', "");
    document.querySelector("#computer > img").setAttribute('src', "");
}

function check_end() {
    if (result.player === 5 || result.computer==5) {
        display_end()
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
    update_score();
    check_end();
}

document.getElementById("rock").addEventListener('click', function(){
    start("rock");
});

document.getElementById("paper").addEventListener('click', function(){
    start("paper");
});

document.getElementById("scissors").addEventListener('click', function(){
    start("scissors");
});

document.querySelector('#end_popup > button').addEventListener('click', function() {
    result.computer = 0;
    result.player = 0;
    result.msg1 = "Man VS Computer";
    result.msg2 = "First to score 5 points wins the game !";
    update_score();
    display_end();
})
