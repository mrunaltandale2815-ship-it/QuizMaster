// RESULT.JS

// Get data from localStorage
const score = Number(localStorage.getItem("score")) || 0;

const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 0;

const timeTaken = Number(localStorage.getItem("timeTaken")) || 0;

// CALCULATE RESULT
let percentage = 0;

if (totalQuestions > 0) {

    percentage = Math.round((score / totalQuestions) * 100);

}
const passingPercentage = 50; 
const resultStatus = document.getElementById("resultStatus"); 
const statusText = document.getElementById("statusText"); 
if (percentage >= passingPercentage) { 
    statusText.textContent = "PASS"; 
    resultStatus.classList.add("pass"); 
} else { 
    statusText.textContent = "FAIL"; 
    resultStatus.classList.add("fail"); 

}

    const wrongAnswers = totalQuestions - score;

// DISPLAY PERCENTAGE
document.getElementById("percentage").textContent = percentage + "%";

// UPDATE PROGRESS CIRCLE
const progressCircle = document.getElementById("progressCircle");

// Convert percentage to degrees
const degree = (percentage / 100) * 360;

// Apply progress to circle
progressCircle.style.background =
    `conic-gradient(
        rgb(118, 2, 194) ${degree}deg,
        #e5e5e5 ${degree}deg
    )`;

// DISPLAY SCORE
document.getElementById("score").textContent = score;

// DISPLAY TOTAL QUESTIONS
document.getElementById("totalQuestions").textContent = totalQuestions;

// If you have another element with totalDisplay
const totalDisplay = document.getElementById("totalDisplay");
if (totalDisplay) {

    totalDisplay.textContent = totalQuestions;

}

// DISPLAY CORRECT ANSWERS
document.getElementById("correctAnswers").textContent = score;

// DISPLAY WRONG ANSWERS
document.getElementById("wrongAnswers").textContent = wrongAnswers;


// DISPLAY TIME
const minutes = Math.floor(timeTaken / 60);

const seconds = timeTaken % 60;

document.getElementById("timeTaken").textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

// CHECK DATA IN CONSOLE
console.log("Score:", score);
console.log("Total Questions:", totalQuestions);
console.log("Percentage:", percentage);
console.log("Correct Answers:", score);
console.log("Wrong Answers:", wrongAnswers);
console.log("Time Taken:", timeTaken);