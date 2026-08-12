// =====================================
// QUIZ.JS
// =====================================


// =====================================
// CURRENT CATEGORY
// =====================================

const category = document.body.dataset.category;


// =====================================
// CURRENT QUESTION
// =====================================

let currentQuestion = 0;


// =====================================
// QUESTIONS
// =====================================

let questions = [];


// Select questions according to category

if (category === "web") {

    questions = webQuestions;

}
else if (category === "ds") {

    questions = dsQuestions;

}
else if (category === "react") {

    questions = reactQuestions;

}
else if (category === "javascript") {

    questions = javascriptQuestions;

}
else if (category === "python") {

    questions = pythonQuestions;

}
else if (category === "sql") {

    questions = sqlQuestions;

}


// Check category in browser console
console.log("Selected Category:", category);
console.log("Questions:", questions);


// =====================================
// STORE USER ANSWERS
// =====================================

let userAnswers = [];


// =====================================
// SCORE
// =====================================

let score = 0;


// =====================================
// TIMER
// =====================================

let timeLeft = 120;

let timer;


// =====================================
// GET HTML ELEMENTS
// =====================================

const questionText =
    document.querySelector(".question-card h2");

const options =
    document.querySelectorAll(".option");

const currentQuestionDisplay =
    document.getElementById("currentQuestion");

const progressBar =
    document.querySelector(".progress");

const timeDisplay =
    document.getElementById("time");

const questionButtons =
    document.querySelectorAll(".question-grid button");

const previousButton =
    document.querySelector(".prev-btn");

const nextButton =
    document.querySelector(".next-btn");

const submitButton =
    document.getElementById("submitQuiz");


// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {


    // Get current question
    const question =
        questions[currentQuestion];


    // Display question
    questionText.textContent =
        question.question;


    // Display options
    options.forEach(function(option, index) {


        const optionText =
            option.querySelector("p");


        optionText.textContent =
            question.options[index];


        // Remove selected class
        option.classList.remove("selected");


        // Remove old check icon
        const checkIcon =
            option.querySelector(".fa-circle-check");


        if (checkIcon) {

            checkIcon.remove();

        }

    });


    // =====================================
    // SHOW PREVIOUS ANSWER
    // =====================================

    if (userAnswers[currentQuestion] !== undefined) {


        const selectedOption =
            options[userAnswers[currentQuestion]];


        selectedOption.classList.add("selected");


        const icon =
            document.createElement("i");


        icon.className =
            "fa-solid fa-circle-check";


        selectedOption.appendChild(icon);

    }


    // =====================================
    // QUESTION NUMBER
    // =====================================

    currentQuestionDisplay.textContent =
        currentQuestion + 1;


    // =====================================
    // PROGRESS
    // =====================================

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        progress + "%";


    // =====================================
    // NAVIGATION
    // =====================================

    updateNavigation();


    // =====================================
    // STATISTICS
    // =====================================

    updateStats();


    // =====================================
    // PREVIOUS BUTTON
    // =====================================

    if (currentQuestion === 0) {

        previousButton.disabled = true;

    }
    else {

        previousButton.disabled = false;

    }

}


// =====================================
// SELECT ANSWER
// =====================================

options.forEach(function(option, index) {


    option.addEventListener("click", function() {


        // Remove selected from all options
        options.forEach(function(item) {


            item.classList.remove("selected");


            const oldIcon =
                item.querySelector(".fa-circle-check");


            if (oldIcon) {

                oldIcon.remove();

            }

        });


        // Select clicked option
        option.classList.add("selected");


        // Add check icon
        const icon =
            document.createElement("i");


        icon.className =
            "fa-solid fa-circle-check";


        option.appendChild(icon);


        // Save answer
        userAnswers[currentQuestion] =
            index;


        // Update navigation
        updateNavigation();


        // Update statistics
        updateStats();

    });

});


// =====================================
// NEXT BUTTON
// =====================================

nextButton.addEventListener("click", function() {


    if (currentQuestion < questions.length - 1) {


        currentQuestion++;


        loadQuestion();

    }

});


// =====================================
// PREVIOUS BUTTON
// =====================================

previousButton.addEventListener("click", function() {


    if (currentQuestion > 0) {


        currentQuestion--;


        loadQuestion();

    }

});


// =====================================
// QUESTION NAVIGATION
// =====================================

questionButtons.forEach(function(button, index) {


    button.addEventListener("click", function() {


        currentQuestion = index;


        loadQuestion();

    });

});


// =====================================
// UPDATE QUESTION NAVIGATION
// =====================================

function updateNavigation() {


    questionButtons.forEach(function(button, index) {


        // Remove current class
        button.classList.remove("current");


        // Current question
        if (index === currentQuestion) {

            button.classList.add("current");

        }


        // Answered question
        if (userAnswers[index] !== undefined) {

            button.classList.add("answered");

        }
        else {

            button.classList.remove("answered");

        }

    });

}


// =====================================
// UPDATE QUIZ STATS
// =====================================

function updateStats() {


    let answered = 0;


    // Count answered questions
    userAnswers.forEach(function(answer) {


        if (answer !== undefined) {

            answered++;

        }

    });


    const remaining =
        questions.length - answered;


    const statBoxes =
        document.querySelectorAll(".stats div");


    if (statBoxes.length >= 2) {


        statBoxes[0].querySelector("span").textContent =
            answered;


        statBoxes[1].querySelector("span").textContent =
            remaining;

    }

}


// =====================================
// TIMER
// =====================================

function startTimer() {


    timer = setInterval(function() {


        timeLeft--;


        const minutes =
            Math.floor(timeLeft / 60);


        const seconds =
            timeLeft % 60;


        timeDisplay.textContent =
            String(minutes).padStart(2, "0")
            + ":"
            + String(seconds).padStart(2, "0");


        // Time finished
        if (timeLeft <= 0) {


            clearInterval(timer);


            alert("Time is up!");


            finishQuiz();

        }

    }, 1000);

}


// =====================================
// CALCULATE SCORE
// =====================================

function calculateScore() {


    score = 0;


    userAnswers.forEach(function(answer, index) {


        if (
            answer !== undefined &&
            answer === questions[index].answer
        ) {

            score++;

        }

    });


    return score;

}


// SUBMIT QUIZ

submitButton.addEventListener("click", function() {


    finishQuiz();

});


// =====================================
// FINISH QUIZ
// =====================================

function finishQuiz() {


    // Stop timer
    clearInterval(timer);


    // Calculate score
    calculateScore();


    // Calculate time taken
    const timeTaken =
        300 - timeLeft;


    // =====================================
    // SAVE SCORE
    // =====================================

    localStorage.setItem(
        "score",
        score
    );


    // =====================================
    // SAVE TOTAL QUESTIONS
    // =====================================

    localStorage.setItem(
        "totalQuestions",
        questions.length
    );


    // =====================================
    // SAVE ANSWERS WITHOUT JSON
    // =====================================

    localStorage.setItem(
        "answerCount",
        userAnswers.length
    );


    userAnswers.forEach(function(answer, index) {

        localStorage.setItem(
            "answer" + index,
            answer
        );

    });


    // =====================================
    // SAVE TIME
    // =====================================

    localStorage.setItem(
        "timeTaken",
        timeTaken
    );


    // =====================================
    // SAVE CATEGORY
    // =====================================

    let categoryName = "";


    if (category === "web") {

        categoryName = "Web Technology";

    }
    else if (category === "ds") {

        categoryName = "Data Science";

    }
    else if (category === "react") {

        categoryName = "React";

    }
    else if (category === "javascript") {

        categoryName = "JavaScript";

    }
    else if (category === "python") {

        categoryName = "Python";

    }
    else if (category === "sql") {

        categoryName = "SQL";

    }


    localStorage.setItem(
        "quizCategory",
        categoryName
    );


    // =====================================
    // GO TO RESULT
    // =====================================

    window.location.href =
        "result.html";

}


// =====================================
// START QUIZ
// =====================================

loadQuestion();

startTimer();