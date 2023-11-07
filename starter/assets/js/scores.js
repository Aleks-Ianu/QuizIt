function getScores() {
  var highscoresList = document.querySelector("#highscores");
  highscoresList.innerHTML = "";
  var storedScores = localStorage.getItem("userScores") || [];
  var userData = JSON.parse(storedScores);

  // Loop through the userScores array and display each user's score
  userData.forEach(function (userScore) {
    var listItem = document.createElement("li");
    listItem.textContent = userScore.initials + ": " + userScore.higherScore;
    highscoresList.appendChild(listItem);
  });
}
getScores();

document.querySelector("#clear").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
    
})
