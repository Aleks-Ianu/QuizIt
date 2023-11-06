// created an object that holds questions and answers.
const questions = [
    {   
        id: 1,
        ask: "What is JavaScript primarily used for?",
        option : [
            "a) Styling web pages",
            "b) Server-side programming",
            "c) Enhancing interactivity on websites",
            "d) Managing databases"],
            trueAnswer : "Enhancing interactivity on websites"
    },
    {
        id: 2,
        ask: "How do you declare a variable in JavaScript?",
        option : [
            "a) variable myVar;",
            "b) var myVar;",
            "c) v myVar;",
            "d) let myVar;",
        ],
        trueAnswer : "var myVar;"
    },
    {
        id: 3,
        ask: "What does the if statement do in JavaScript?",
        option : [
            "a) Iterates through a loop",
            "b) Declares a variable",
            "c) Checks a condition and executes code if it's true",
            "d) Displays an alert message",
        ],
        trueAnswer : "c) Checks a condition and executes code if it's true"
    },
    {
        id: 4,
        ask: "How do you create a comment in JavaScript?",
        option : [
            "a) --This is a comment--",
            "b) <!--This is a comment-->",
            "c) // This is a comment",
            "d) /* This is a comment */",
        ],
        trueAnswer : "c) // This is a comment"
    },
    {
        id: 5,
        ask: "Which operator is used for assigning a value to a variable in JavaScript?",
        option : [
            "a) =",
            "b) ==",
            "c) ===",
            "d) :=",
        ],
        trueAnswer : "a) ="
    },
    {
        id: 6,
        ask: "How can you concatenate two strings in JavaScript?",
        option : [
            "a) concat()",
            "b) plus()",
            "c) add()",
            "d) +",
        ],
        trueAnswer : "d) +"
    },
    {
        id: 7,
        ask: "What is the result of the expression 3 > 5 in JavaScript?",
        option : [
            "a) true",
            "b) false",
            "c) undefined",
            "d) error",
        ],
        trueAnswer : "b) false"
    },
    {
        id: 8,
        ask: "How do you access the last element of an array in JavaScript?",
        option : [
            "a) arr[length - 1]",
            "b) arr[0]",
            "c) arr[last]",
            "d) arr[-1]",
        ],
        trueAnswer : "a) arr[length - 1]"
    },
    {
        id: 9,
        ask: "What is the purpose of the else statement in JavaScript?",
        option : [
            "a) It terminates the program.",
            "b) It defines a loop.",
            "c) It provides an alternative code block to execute when the if condition is false.",
            "d) It displays an error message.",
        ],
        trueAnswer : "c) It provides an alternative code block to execute when the if condition is false."
    }


]


var choicesDiv = document.querySelector("#choices");
var startQue = 0;

// console.log(question1);
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

choicesDiv.addEventListener("click", function(event) {
    if(event.target.tagName === "BUTTON") {
        if(event.target.textContent === questions[startQue].trueAnswer) {
            document.querySelector("#feedback").classList.remove("hide");
            document.querySelector("#feedback").textContent = "correct answer";
        } else {
            document.querySelector("#feedback").classList.remove("hide");
            document.querySelector("#feedback").textContent = "wrong answer";
            decurtSeconds();
        }
        if (startQue < questions.length -1) {
            startQue++;
            choicesDiv.innerHTML = "";
            renderQuestions();
        }  else {
            allQuestionsAnswered = true;
        }
    }
})

// function that runs if the answer is wrong and takes 10 seconds out
function decurtSeconds () {
    seconds = seconds - 10;
}

// create a function that gets called when the timer starts
// in the first function we put details of the first object
// we then take an event listener that checks for clicks 
// condintional if the button pressed is the key value that we say its the answer
// run the second function
// else we take 10 seconds 

// var quest = function questions(){
//     return(
//         questions.map((question) => (
//             {question.ask}
//             {question.option1}
//             {question.option2}
//             {question.option3}
//             {question.option4}
//         )
//     )
// }