// call start button
var startButton = document.querySelector("#start-button");
// call Hscores 
var Hscore = document.querySelector(".Hscore")
// 

// what are available questions;
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


    // Generate first question
var quest = document.querySelector(".question");
var choices = document.querySelector(".choice");
// selects the various answers as a whole

var op1 = document.querySelector(".op1");
var op2 = document.querySelector(".op2");
var op3 = document.querySelector(".op3");
var op4 = document.querySelector(".op4");
// selects the various options


    // generate selectable answers for first question
function problem(){
    console.log(quest)
    var questionNumber = 0;
    quest.textContent =  askedQuestions[questionNumber].question
    op1.textContent= askedQuestions[questionNumber].answers
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
       
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
    }








    function buildQuiz(){
        // variable to store the HTML output
        const output = [];
      
        // for each question...
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
      
            // variable to store the list of possible answers
            const answers = [];
      
            // and for each available answer...
            for(letter in currentQuestion.answers){
      
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
      
            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      }
      









    myQuestions.forEach( (currentQuestion, questionNumber) => {
        // the code we want to run for each question goes here
      });
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

    // define the countdown

      
// Engage start button
startButton.addEventListener("click",problem());
// begin timer 
// countdown();

// hide or replace start button
startButton.style.display = "none"