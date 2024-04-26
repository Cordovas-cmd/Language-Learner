

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
    },
    {
        title: 'ave',
        choices: ['mouse', 'hamster', 'lizard', 'bird'],
       correct: 3
    },
    {
        title: 'rata',
        choices: ['cat', 'fish', 'rat', 'shark'],
       correct: 2
    },
    {
        title: 'mosca',
        choices: ['fly', 'puma', 'fish', 'dog'],
       correct: 0
    }
];


let app = {

    start: function () {

        this.currentQuestionIndex = 0
        let choices = document.querySelectorAll(".choices");

        // use arrow function to keep context for the check answer method
            choices.forEach((element, index) => {

                element.addEventListener('click', () => {
                    console.log("show first question");
                    this.checkAnswer(index)
                });
            });

        // show question
        this.showQuestion(question[this.currentQuestionIndex]);
    },

    showQuestion: function (q) {
        // show title
        let titleEl = document.getElementById("questionTitle");
        titleEl.textContent = q.title;

        // create all choices
        let choices = document.querySelectorAll(".choices");

        choices.forEach(function (element, index) {
            element.textContent = q.choices[index];
        });
    },

    checkAnswer: function (userChoice) {
        let currentQuestionIndex = question[this.currentQuestionIndex]
        if (currentQuestionIndex.correct == userChoice) {
            // correct
            console.log("correct")
        } else {
            // notcorrect
            console.log("wrong")
        }

        // change question
        this.changeQuestion();

        // show next question
        this.showQuestion(question[this.currentQuestionIndex]);

    },

    changeQuestion: function() {
        this.currentQuestionIndex++;

        if(this.currentQuestionIndex == question.length) {
            this.currentQuestionIndex = 0;
        }
    }
};


// function selectAnswer(event) {
//     console.log('hello')
// }


// submitBtn.addEventListener('click', selectAnswer)

app.start();