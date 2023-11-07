var timeEl = document.querySelector("#time");

// access the html button and add an event listener that runs the timer function once clicked
document.getElementById("start").addEventListener("click", function () {
  document.querySelector("#start-screen").classList.add("hide");
  document.querySelector("#questions").classList.remove("hide");
  startCountdown();
  renderQuestions();
  // Start a 120-second countdown, change the duration as needed
});

var allQuestionsAnswered = false;
var seconds = 120;
// countdown  function
function startCountdown() {
  var timerInterval = setInterval(function () {
    seconds--;
    timeEl.textContent = seconds;
    if (seconds < 0) {
      seconds = 0;
      timeEl.innerHTML = 0;
    }
    if (seconds === 0 || allQuestionsAnswered) {
      clearInterval(timerInterval);
      document.querySelector("#questions").classList.add("hide");
      document.querySelector("#end-screen").classList.remove("hide");
      document.querySelector("#final-score").textContent = seconds;
      document.querySelector("#feedback").classList.add("hide");
    }
  }, 1000);
}

var choicesDiv = document.querySelector("#choices");
var startQue = 0;

function renderQuestions() {
  var question = questions[startQue].ask;
  document.querySelector("#question-title").textContent = question;
  renderOptions();
}

function renderOptions() {
  const options = questions[startQue].option;

  for (let i = 0; i < options.length; i++) {
    const element = options[i];

    const btn = document.createElement("button");
    btn.textContent = element;
    choicesDiv.appendChild(btn);
  }
}

choicesDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === questions[startQue].trueAnswer) {
      document.querySelector("#feedback").classList.remove("hide");
      document.querySelector("#feedback").textContent = "correct answer";
    } else {
      document.querySelector("#feedback").classList.remove("hide");
      document.querySelector("#feedback").textContent = "wrong answer";
      decurtSeconds();
    }
    if (startQue < questions.length - 1) {
      startQue++;
      choicesDiv.innerHTML = "";
      renderQuestions();
    } else {
      allQuestionsAnswered = true;
    }
  }
});

// function that runs if the answer is wrong and takes 10 seconds out
function decurtSeconds() {
  seconds = seconds - 10;
}

function setScores() {
  var userInput = document.getElementById("initials").value;
  var userScore = {
    initials: userInput,
    higherScore: seconds,
  };
  var existingScores = JSON.parse(localStorage.getItem("userScores"));
  // Add the new userScore to the array
  if (existingScores === null) {
    existingScores = [];
  }
  existingScores.push(userScore);

  // Store the updated scores array in local storage
  localStorage.setItem("userScores", JSON.stringify(existingScores));

  loadScoreboard();
}

// load scoreboard html page after inputting initials
function loadScoreboard() {
  window.location.href = "highscores.html";
}

// get the timer working
// as soon as the button gets pressed inside the countdown function display the first question
// if1st question is true run second function
// if its wrong you take 10seconds off and then run the second function
// do everything using javascript and creating and appending elements on the screen with buttons.
// every time you click on one of the buttons use conditionals to check if the answer given is the correct one or not
// if the answer is correct, display the second one
// else take 10 seconds off using seconds - 10 and display the next one
// once the questions are finished
