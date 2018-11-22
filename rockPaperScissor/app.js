let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice() {
  const choices = ['r', 'p', 's'];

  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissor";

}

function win(userChoice, compChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} cover ${convertToWord(compChoice)} ${smallCompWord} . You win! `;
  document.getElementById(userChoice).classList.add('green-glow');

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('green-glow')
  }, 0500);

}



function loss(userChoice, compChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sub();
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(compChoice)} ${smallCompWord} . Bot win! `;
  document.getElementById(userChoice).classList.add('red-glow');

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('red-glow')
  }, 0500);

}

function draw(userChoice, compChoice) {


  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals to ${convertToWord(compChoice)} ${smallCompWord} . It's a DRAW ! `;
  document.getElementById(userChoice).classList.add('gray-glow');

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('gray-glow')
  }, 0500);

}


function Game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      loss(userChoice, compChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }

}


function Main() {
  rock_div.addEventListener('click', function () {
    Game("r");

  })
  paper_div.addEventListener('click', function () {
    Game("p");

  })
  scissor_div.addEventListener('click', function () {
    Game("s");

  })
}

Main();
