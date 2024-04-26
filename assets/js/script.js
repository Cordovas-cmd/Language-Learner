

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
let submitBtn = document.getElementById("submitBtn");

let question = [
    {
        title: "Gato",
        choices: ["dog", "cat", "bird", "fish"],
        correct: 1
    }
];
var currentQuestionIndex = 0;


let app = {

    start: function () {
            let choices = document.querySelectorAll(".choices");

            choices.forEach(function (element, index) {
                element.addEventListener('click', function () {
                    console.log("show first question");
                });
            });

            // show first question
            this.showFirstQuestion(question[currentQuestionIndex]);
        },

    showFirstQuestion: function(q){
            let titleEl = document.getElementById("questionTitle");

            // 2. Give titleEl a value.
            titleEl.textContent = q.title;
        
            // select all choices
            let choices = document.querySelectorAll(".choices");
        
            choices.forEach(function (element, index) {
                element.textContent = q.choices[index];
                element.addEventListener('click', function () {
                    if (q.correct == index) {
                        console.log("correct")
                    }
                    else {
                        console.log("wrong")
                    }
                })
        
            });
        
        }
        };



// function start() {
//   // select all choices
//   let choices = document.querySelectorAll(".choices");

//   choices.forEach(function (element, index) {
//       element.addEventListener('click', function () {
//           console.log("show first question")
//       });
//     });
//     showFirstQuestion(question[currentQuestionIndex])
// }

// function showFirstQuestion(q) {

//     // 1. select dom element
//     let titleEl = document.getElementById("questionTitle");

//     // 2. Give titleEl a value.
//     titleEl.textContent = q.title;

//     // select all choices
//     let choices = document.querySelectorAll(".choices");

//     choices.forEach(function (element, index) {
//         element.textContent = q.choices[index];
//         element.addEventListener('click', function () {
//             if (q.correct == index) {
//                 console.log("correct")
//             }
//             else {
//                 console.log("wrong")
//             }
//         })

//     });


// }


// showFirstQuestion(question[currentQuestionIndex])

function selectAnswer(event) {
    console.log('hello')
}


submitBtn.addEventListener('click', selectAnswer)

app.start();