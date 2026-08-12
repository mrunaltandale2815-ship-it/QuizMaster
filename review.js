// REVIEW.JS

// GET CATEGORY
const category = localStorage.getItem("quizCategory");

// GET QUESTIONS ACCORDING TO CATEGORY
let questions = [];

if (category === "Web Technology") {

    questions = webQuestions;
}
else if (category === "Data Science") {
    
    questions = dsQuestions;
}
else if (category === "React") {
    
    questions = reactQuestions;
}
else if (category === "JavaScript") {

    questions = javascriptQuestions;

}
else if (category === "Python") {

    questions = pythonQuestions;

}
else if (category === "SQL") {

    questions = sqlQuestions;

}


// Check in console
console.log("Review Category:", category);
console.log("Review Questions:", questions);

// GET USER ANSWERS
let savedAnswers = [];

// Get number of answers
const answerCount = parseInt(localStorage.getItem("answerCount")) || 0;

// Get each answer separately
for (let i = 0; i < answerCount; i++) {

    const answer = localStorage.getItem("answer" + i);

    if (answer !== null) {

        savedAnswers[i] = parseInt(answer);

    }

}

// Check in console
console.log("Saved Answers:", savedAnswers);

// HTML ELEMENTS
const questionList = document.getElementById("questionList");

const reviewCard = document.getElementById("reviewCard");

const filterButtons = document.querySelectorAll(".filter-btn");

// CURRENT QUESTION
let currentQuestion = 0;

// CHECK ANSWER
function isCorrect(index) {

    return (
        savedAnswers[index] !== undefined &&
        savedAnswers[index] === questions[index].answer
    );

}

// DISPLAY QUESTION LIST
function displayQuestionList(filter = "all") {

    questionList.innerHTML = "";
    questions.forEach(function(question, index) {

        const correct = isCorrect(index);

        // Filter questions
        if (filter === "correct" && !correct) {

            return;

        }

        if (filter === "wrong" && correct) {

            return;

        }

        // Create button
        const button = document.createElement("button");

        button.className = "question-item";

        // Active question
        if (index === currentQuestion) {

            button.classList.add("active");

        }

        // Create icon
        const icon = document.createElement("i");

        if (correct) {

            icon.className = "fa-solid fa-circle-check correct";

        }
        else {

            icon.className = "fa-solid fa-circle-xmark wrong";

        }

        // Add icon
        button.appendChild(icon);

        // Add question number
        button.appendChild(document.createTextNode( " Q" + (index + 1)));

        // Click event
        button.addEventListener("click", function() {

                currentQuestion = index;
                displayQuestionList(filter);
                displayReview(index);

            }
        );

        // Add button
        questionList.appendChild(button);

    });

}

// DISPLAY REVIEW
function displayReview(index) {

    const question = questions[index];

    if (!question) {

        return;

    }

    const userAnswer = savedAnswers[index];

    const correctAnswer = question.answer;

    const correct = isCorrect(index);


    // USER ANSWER TEXT
    let userAnswerText;

    if (userAnswer === undefined) {

        userAnswerText = "Not Answered";

    }
    else {

        userAnswerText = String.fromCharCode( 65 + userAnswer) + ". " + question.options[userAnswer];

    }

    // CORRECT ANSWER TEXT
    const correctAnswerText = String.fromCharCode( 65 + correctAnswer) + ". " + question.options[correctAnswer];

    // USER ANSWER STYLE
    let userAnswerClass;
    let userTitleClass;
    let userIcon;

    if (userAnswer === undefined) {

        userAnswerClass = "wrong-answer";
        userTitleClass = "wrong-title";
        userIcon = '<i class="fa-solid fa-minus"></i>';

    }

    else if (correct) {
 
        userAnswerClass = "correct-answer";
        userTitleClass = "correct-title";
        userIcon = '<i class="fa-solid fa-check"></i>';

    }

    else {

        userAnswerClass = "wrong-answer";
        userTitleClass = "wrong-title";
        userIcon = '<i class="fa-solid fa-xmark"></i>';

    }

    // DISPLAY REVIEW CARD
    reviewCard.innerHTML = `

        <h3>Question ${index + 1} : <span>${question.question}</span></h3>

        <div class="answer-box">
            <p class="title ${userTitleClass}">Your Answer</p>
            <div class="answer ${userAnswerClass}">
                ${userAnswerText}
                ${userIcon}
            </div>
        </div>

        <div class="answer-box">
            <p class="title correct-title">Correct Answer</p>
            <div class="answer correct-answer">
                ${correctAnswerText}
                <i class="fa-solid fa-check"></i>
            </div>
        </div>

        <div class="explanation">
            <h4>Explanation :</h4>
            <p>${question.explanation}</p>
        </div>

    `;

}


// FILTER BUTTONS
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

            // Remove active
            filterButtons.forEach(function(btn) {

                    btn.classList.remove("active");

                }
            );

            // Add active
            button.classList.add("active");

            // Get filter
            const filter = button.getAttribute("data-filter");

            // Display questions
            displayQuestionList(filter);

        }
    );

});

// UPDATE FILTER COUNTS
function updateFilterCounts() {

    let correct = 0;
    let wrong = 0;

    questions.forEach(function(question, index) {

            if (isCorrect(index)) {

                correct++;

            }
            else {

                wrong++;

            }

        }
    );


    const allCount = document.getElementById("allCount");

    const correctCount = document.getElementById("correctCount");

    const wrongCount = document.getElementById("wrongCount");

    if (allCount) {

        allCount.textContent = questions.length;

    }

    if (correctCount) {

        correctCount.textContent = correct;

    }

    if (wrongCount) {

        wrongCount.textContent = wrong;

    }

}


// INITIAL LOAD
updateFilterCounts();
displayQuestionList();
displayReview(0);