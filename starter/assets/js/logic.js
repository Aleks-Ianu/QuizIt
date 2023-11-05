var timeEl = document.querySelector("#time");
// access the html button and add an event listener that runs the timer function once clicked
document.getElementById("start").addEventListener("click", function () {
  startCountdown(10); // Start a 120-second countdown, change the duration as needed
});

// countdown  function
// needs to display new page once code runs out...(function?, attach it to the second javascript?)
function startCountdown(seconds) {
    var timerInterval = setInterval(function() {
        seconds--;
        timeEl.textContent = seconds;
        document.querySelector("#start-screen").classList.add("hide")
        document.querySelector("#questions").classList.remove("hide");
        if (seconds === 0 ) {
            clearInterval(timerInterval);
            document.querySelector("#questions").classList.add("hide");
            document.querySelector("#end-screen").classList.remove("hide");
        }
    }, 1000);
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
