var question = document.querySelector(".question");

var choices = document.querySelector(".choice");
var op1 = document.querySelector(".op1");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var status;
var timer;
var timerCount;

// the score varriables have purpose as follows
// the displayed score
var score = document.querySelector(".score")
// the previous score;
var highScore = 0;

// redundant?
var storedScore = 0;

// the current score;
var currentScore = 0;

// if isRight is true, then the answer is correct.  But this doesn't seem right right now...
var isRight = false;

// when the game is done, "finished" will be true
var finished = false



// currently do not know how to have questions with matched answers.  
var quests = [""]

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
    score.textContent = currentScore;
}

// The 'completed' function is called when the condition is met
function completed() {
    status.textContent = "Game over ";
    
    startButton.disabled = false;
    
}

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
    finished = false;
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    doQuiz()
    startTimer()
  }


  // Creates questions on screen
function doQuiz() {
    //I need to figure out how to make the questions
}
  