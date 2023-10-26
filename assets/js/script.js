

// Basic App flow
/* 
Start screen w/ intro and instructions
Once button is clicked:
Start timer
Show Spanish word
Show English Alternatives
User picks an answer
Show result (right/wrong)
Update user score
Show next Question (if there are no more game over.)
*/


let question = [
    {
        title: "Gato",
        choices: ["dog", "cat", "bird", "fish"],
        correct: 1
    }
]

var currentQuestionIndex = 0;


function showFirstQuestion(q) {

    // 1. select dom element
    let titleEl = document.getElementById("questionTitle");

    // 2. Give titleEl a value.
    titleEl.textContent = q.title;

    // select all choices
    let choices = document.querySelectorAll(".choices");

    choices.forEach(function(element, index){
        element.textContent = q.choices[index];
    });


}


showFirstQuestion(question[0])