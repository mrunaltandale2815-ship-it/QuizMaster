//  storage


//Save Category
function saveCategory(category){
    localStorage.setItem("categoryName",category);
};

//get category
function getCategory(){
    return localStorage.getItem("categoryName");
};

// Save Quiz Score
function saveScore(score) {
    localStorage.setItem("score", score);
};

// Get Quiz Score
function getScore() {
    return localStorage.getItem("score");
};

