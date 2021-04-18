var quest = document.querySelector(".question");
// above selects spot for question text

var startButton = document.getElementById('start-button')
// bove selects the start button

var choices = document.querySelector(".choice");
// selects the various answers as a whole

var op1 = document.querySelector(".op1");
var op2 = document.querySelector(".op2");
var op3 = document.querySelector(".op3");
var op4 = document.querySelector(".op4");
// selects the various options

var timerElement = document.querySelector(".timer-count");
// the displayed time


var scores = document.querySelector(".scores");

// correct or incorrect status
var status;
var timer;
var timerCount = 0;

var hidden = document.querySelector(".hide")

// the score varriables have purpose as follows
// the displayed score
var Hscore = document.querySelector(".Hscore")
// the previous score;
var highScore = 0;

// redundant?
var storedScore = 0;

// the current score;
var currentScore = 0;

// if isRight is true, then the answer is correct.  But this doesn't seem right right now...
// var isRight = false;

// when the game is done, "finished" will be true
var finished = false



// Questions and answers are in a large array of arrays.  

var askedQuestions = [
    {
        question:"What color is a Banana?",
        answers: {
            a: "Red",
            b: "Blue",
            c: "Yellow",
            d: "turquoise"
        },
        correctAnswer: "c"

    },
    {
      question: "What is JavaScript for?",
      answers: {
        a: "Cooking with Penguins",
        b: "Sheryl Sandberg",
        c: "User interactions and events",
        d: "they don't pay me to care"
      },
      correctAnswer: "c"
    },
    {
      question: "Is CSS the same thing as Javascript?",
      answers: {
        a: "No",
        b: "Banana",
        c: "Yes",
        d: "they don't pay me to care"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "What can be made with javascript??",
        answers: {
          a: "The internet",
          b: "jQuery",
          c: "An avacado",
          d: "New HTML"
        },
        correctAnswer: "d"
      }
  ];
  
// selector for question
var questionNumber = 0

// The init function is called when the page loads 
function init() {
    getScore();

}


// These functions are used by init
function getScore() {
    // Get stored value from client storage, if it exists
    var storedScore = localStorage.getItem("highScore");
    // If stored value doesn't exist, set counter to 0
    if (storedScore === null) {
        score = 0;
    } else {
        // If a value is retrieved from client storage set the score to that value
        currentScore = storedScore;
    }
    //Render  to page
    Hscore.textContent = currentScore;
}

// // The 'completed' function is called when the condition is met
// function completed() {
//     status.textContent = "Game over ";
    
//     startButton.disabled = false;
    
// }

// The setTimer function starts and stops the timer and triggers correctAnswer and wrongAnswer
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met or time runs out
            if (finished || timerCount === 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                completed();
            }
        }
       
        }
    , 1000);
}

// The startGame function is called when the start button is clicked
function startGame() {
    console.log("startGame")
    startButton.classList.add('hide')
    finished = false;
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    doQuiz()
    startTimer()
  }


  // Creates questions on screen
function doQuiz() {
    quest.classList.remove('hide')
    choice.classList.remove('hide')
    console.log("do quiz")
    quest.textContent = askedQuestions[questionNumber].question;
    problem();
   

    
  }

  function problem(){
    askedQuestion.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
  }
  function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })

    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  

startButton.addEventListener('click', startGame())
button.addEventListener('click', selectAnswer())