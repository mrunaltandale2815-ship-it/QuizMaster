// =====================================
// WEB TECHNOLOGY QUESTIONS
// =====================================

const webQuestions = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It is used to create the structure of web pages."
    },

    {
        question: "What is used to style a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 1,
        explanation: "CSS (Cascading Style Sheets) is used to style and design HTML web pages."
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<href>",
            "<a>",
            "<url>"
        ],
        answer: 2,
        explanation: "The <a> tag is used to create hyperlinks in HTML."
    },

    {
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2,
        explanation: "The CSS color property is used to change the color of text."
    },

    {
        question: "Which tag is used to insert an image in HTML?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1,
        explanation: "The <img> tag is used to display an image on a web page."
    },

    {
        question: "Which language is mainly used to add interactivity to a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2,
        explanation: "JavaScript is used to add dynamic behavior and interactivity to web pages."
    },

    {
        question: "Which HTML tag is used for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: 2,
        explanation: "The h1 tag represents the largest and most important heading in HTML."
    },

    {
        question: "Which CSS property is used to change the background color?",
        options: [
            "color",
            "background-color",
            "bg-color",
            "background"
        ],
        answer: 1,
        explanation: "The background-color property is used to set the background color of an element."
    },

    {
        question: "Which HTML tag is used to create an unordered list?",
        options: [
            "<ol>",
            "<li>",
            "<ul>",
            "<list>"
        ],
        answer: 2,
        explanation: "The <ul> tag creates an unordered list, while <li> defines each list item."
    },

    {
        question: "Which CSS property is used to make text bold?",
        options: [
            "font-style",
            "font-weight",
            "text-bold",
            "font-bold"
        ],
        answer: 1,
        explanation: "The font-weight property is used to control the thickness of text."
    }

];
const dsQuestions = [

    {
        question: "What is Data Science?",
        options: [
            "A field that uses data to extract useful insights",
            "A programming language",
            "A web development framework",
            "A database software"
        ],
        answer: 0,
        explanation: "Data Science is a field that uses statistics, programming, and machine learning to analyze data and extract useful insights."
    },

    {
        question: "Which programming language is widely used in Data Science?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "XML"
        ],
        answer: 1,
        explanation: "Python is widely used in Data Science because of its simple syntax and powerful libraries."
    },

    {
        question: "Which Python library is mainly used for data analysis?",
        options: [
            "NumPy",
            "Pandas",
            "Flask",
            "Django"
        ],
        answer: 1,
        explanation: "Pandas provides powerful data structures and tools for data analysis and manipulation."
    },

    {
        question: "What is a dataset?",
        options: [
            "A collection of related data",
            "A programming language",
            "A computer processor",
            "A web page"
        ],
        answer: 0,
        explanation: "A dataset is a collection of related data that can be analyzed."
    },

    {
        question: "Which library is commonly used for numerical computing in Python?",
        options: [
            "NumPy",
            "React",
            "Bootstrap",
            "Express"
        ],
        answer: 0,
        explanation: "NumPy is a Python library used for numerical computing and working with arrays."
    },

    {
        question: "What is Machine Learning?",
        options: [
            "A method where computers learn patterns from data",
            "Creating websites",
            "Designing databases",
            "Writing HTML pages"
        ],
        answer: 0,
        explanation: "Machine Learning allows computers to learn patterns from data and make predictions or decisions."
    },

    {
        question: "What is data visualization?",
        options: [
            "Representing data using charts and graphs",
            "Deleting data",
            "Encrypting passwords",
            "Writing code"
        ],
        answer: 0,
        explanation: "Data visualization represents information using charts, graphs, and other visual methods."
    },

    {
        question: "Which of these is an example of a classification problem?",
        options: [
            "Predicting house price",
            "Predicting whether an email is spam",
            "Calculating average",
            "Sorting numbers"
        ],
        answer: 1,
        explanation: "Spam detection is a classification problem because the result belongs to categories such as spam or not spam."
    },

    {
        question: "What is the purpose of data cleaning?",
        options: [
            "To remove or correct incorrect data",
            "To create a website",
            "To increase internet speed",
            "To install software"
        ],
        answer: 0,
        explanation: "Data cleaning involves finding and correcting inaccurate, incomplete, duplicate, or inconsistent data."
    },

    {
        question: "Which chart is commonly used to show trends over time?",
        options: [
            "Pie chart",
            "Line chart",
            "Histogram",
            "Scatter plot"
        ],
        answer: 1,
        explanation: "Line charts are commonly used to show changes and trends over time."
    }

];
const javascriptQuestions = [

    {
        question: "What is JavaScript?",
        options: [
            "A programming language used to make web pages interactive",
            "A database",
            "A CSS framework",
            "An operating system"
        ],
        answer: 0,
        explanation: "JavaScript is a programming language commonly used to add interactivity and dynamic behavior to web pages."
    },

    {
        question: "Which keyword is used to declare a constant?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2,
        explanation: "The const keyword is used to declare a variable whose binding cannot be reassigned."
    },

    {
        question: "Which symbol is used for a single-line comment?",
        options: [
            "<!-- -->",
            "//",
            "/* */",
            "#"
        ],
        answer: 1,
        explanation: "Two forward slashes // are used to create a single-line comment in JavaScript."
    },

    {
        question: "Which method displays a message in the browser console?",
        options: [
            "console.log()",
            "print()",
            "display()",
            "show()"
        ],
        answer: 0,
        explanation: "console.log() is used to display information in the browser's developer console."
    },

    {
        question: "Which method is used to select an element by its ID?",
        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "findId()"
        ],
        answer: 0,
        explanation: "document.getElementById() selects an HTML element using its id attribute."
    },

    {
        question: "Which of these is an array?",
        options: [
            "let x = 10;",
            "let x = 'Hello';",
            "let x = [10, 20, 30];",
            "let x = true;"
        ],
        answer: 2,
        explanation: "An array stores multiple values in a single variable. [10, 20, 30] is an array."
    },

    {
        question: "Which operator is used for strict equality?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: 2,
        explanation: "The === operator checks both value and data type."
    },

    {
        question: "Which method adds an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "remove()"
        ],
        answer: 0,
        explanation: "The push() method adds one or more elements to the end of an array."
    },

    {
        question: "Which event occurs when a user clicks an element?",
        options: [
            "onload",
            "onclick",
            "onchange",
            "onsubmit"
        ],
        answer: 1,
        explanation: "The click event occurs when the user clicks an HTML element."
    },

    {
        question: "Which function converts a string into an integer?",
        options: [
            "parseInt()",
            "toString()",
            "parseString()",
            "integer()"
        ],
        answer: 0,
        explanation: "parseInt() converts a string into an integer value."
    }

];
const pythonQuestions = [

    {
        question: "What is Python?",
        options: [
            "A high-level programming language",
            "A database",
            "A web browser",
            "An operating system"
        ],
        answer: 0,
        explanation: "Python is a high-level, general-purpose programming language known for its simple syntax."
    },

    {
        question: "Which symbol is used to write a comment in Python?",
        options: [
            "//",
            "#",
            "/* */",
            "<!-- -->"
        ],
        answer: 1,
        explanation: "The # symbol is used to write a single-line comment in Python."
    },

    {
        question: "Which function is used to display output in Python?",
        options: [
            "display()",
            "console.log()",
            "print()",
            "show()"
        ],
        answer: 2,
        explanation: "The print() function is used to display output in Python."
    },

    {
        question: "Which keyword is used to define a function?",
        options: [
            "function",
            "def",
            "func",
            "define"
        ],
        answer: 1,
        explanation: "The def keyword is used to define a function in Python."
    },

    {
        question: "Which of these is a Python list?",
        options: [
            "(1, 2, 3)",
            "{1, 2, 3}",
            "[1, 2, 3]",
            "<1, 2, 3>"
        ],
        answer: 2,
        explanation: "Square brackets [ ] are used to create a list in Python."
    },

    {
        question: "Which data type stores True or False?",
        options: [
            "String",
            "Boolean",
            "Integer",
            "Float"
        ],
        answer: 1,
        explanation: "The Boolean data type stores either True or False."
    },

    {
        question: "Which operator is used for exponentiation in Python?",
        options: [
            "^",
            "**",
            "//",
            "%%"
        ],
        answer: 1,
        explanation: "The ** operator is used for exponentiation in Python."
    },

    {
        question: "Which keyword is used for a conditional statement?",
        options: [
            "if",
            "check",
            "condition",
            "when"
        ],
        answer: 0,
        explanation: "The if keyword is used to execute code based on a condition."
    },

    {
        question: "Which function returns the length of an object?",
        options: [
            "length()",
            "size()",
            "len()",
            "count()"
        ],
        answer: 2,
        explanation: "The len() function returns the number of items in an object such as a list or string."
    },

    {
        question: "Which keyword is used to create a class in Python?",
        options: [
            "object",
            "class",
            "struct",
            "create"
        ],
        answer: 1,
        explanation: "The class keyword is used to define a class in Python."
    }

];
const reactQuestions = [

    {
        question: "What is React?",
        options: [
            "A JavaScript library for building user interfaces",
            "A database",
            "A CSS framework",
            "A programming language"
        ],
        answer: 0,
        explanation: "React is a JavaScript library used to build interactive user interfaces, especially for web applications."
    },

    {
        question: "Who developed React?",
        options: [
            "Google",
            "Microsoft",
            "Facebook",
            "Amazon"
        ],
        answer: 2,
        explanation: "React was developed by Facebook, now known as Meta."
    },

    {
        question: "What is JSX?",
        options: [
            "A database language",
            "A syntax extension for JavaScript",
            "A CSS property",
            "A server"
        ],
        answer: 1,
        explanation: "JSX is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript."
    },

    {
        question: "What is a component in React?",
        options: [
            "A reusable UI building block",
            "A database table",
            "A CSS file",
            "A server"
        ],
        answer: 0,
        explanation: "React components are reusable building blocks used to create user interfaces."
    },

    {
        question: "Which hook is used to manage state in a functional component?",
        options: [
            "useState",
            "useHTML",
            "useStyle",
            "useComponent"
        ],
        answer: 0,
        explanation: "The useState hook allows functional components to create and manage state."
    },

    {
        question: "Which hook is commonly used for side effects?",
        options: [
            "useState",
            "useEffect",
            "useHTML",
            "useData"
        ],
        answer: 1,
        explanation: "useEffect is commonly used to perform side effects such as fetching data or updating the document."
    },

    {
        question: "What is the Virtual DOM?",
        options: [
            "A lightweight representation of the real DOM",
            "A database",
            "A CSS framework",
            "A browser"
        ],
        answer: 0,
        explanation: "The Virtual DOM is a lightweight representation of the real DOM that helps React efficiently update the interface."
    },

    {
        question: "How are data passed from a parent component to a child component?",
        options: [
            "Using props",
            "Using CSS",
            "Using HTML",
            "Using SQL"
        ],
        answer: 0,
        explanation: "Props are used to pass data from a parent component to a child component."
    },

    {
        question: "Which command is commonly used to create a React application with Vite?",
        options: [
            "npm create vite",
            "react start",
            "create html",
            "npm react new"
        ],
        answer: 0,
        explanation: "The npm create vite command can be used to create a new React project using Vite."
    },

    {
        question: "What does SPA stand for?",
        options: [
            "Single Page Application",
            "Simple Programming Application",
            "Single Program Access",
            "System Page Application"
        ],
        answer: 0,
        explanation: "SPA stands for Single Page Application, where the application dynamically updates content without loading completely new pages."
    }

];
const sqlQuestions = [

    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Language",
            "Structured Question Language"
        ],
        answer: 0,
        explanation: "SQL stands for Structured Query Language and is used to communicate with relational databases."
    },

    {
        question: "Which SQL command is used to retrieve data?",
        options: [
            "GET",
            "SELECT",
            "FETCH DATA",
            "SHOW DATA"
        ],
        answer: 1,
        explanation: "The SELECT statement is used to retrieve data from a database."
    },

    {
        question: "Which command is used to add new data to a table?",
        options: [
            "ADD",
            "INSERT",
            "CREATE",
            "PUT"
        ],
        answer: 1,
        explanation: "The INSERT INTO statement is used to add new records to a table."
    },

    {
        question: "Which command is used to modify existing records?",
        options: [
            "CHANGE",
            "MODIFY",
            "UPDATE",
            "EDIT"
        ],
        answer: 2,
        explanation: "The UPDATE statement is used to modify existing records in a table."
    },

    {
        question: "Which command removes records from a table?",
        options: [
            "REMOVE",
            "DELETE",
            "DROP",
            "CLEAR"
        ],
        answer: 1,
        explanation: "DELETE is used to remove records from a table."
    },

    {
        question: "Which SQL clause is used to filter records?",
        options: [
            "FILTER",
            "WHERE",
            "IF",
            "CHECK"
        ],
        answer: 1,
        explanation: "The WHERE clause is used to filter records based on a specified condition."
    },

    {
        question: "Which key uniquely identifies each record in a table?",
        options: [
            "Foreign Key",
            "Primary Key",
            "Unique Table",
            "Main Key"
        ],
        answer: 1,
        explanation: "A primary key uniquely identifies each record in a database table."
    },

    {
        question: "Which SQL command creates a new table?",
        options: [
            "NEW TABLE",
            "MAKE TABLE",
            "CREATE TABLE",
            "ADD TABLE"
        ],
        answer: 2,
        explanation: "CREATE TABLE is used to create a new table in a database."
    },

    {
        question: "Which function counts the number of records?",
        options: [
            "TOTAL()",
            "COUNT()",
            "NUMBER()",
            "SUM()"
        ],
        answer: 1,
        explanation: "The COUNT() aggregate function counts rows or records."
    },

    {
        question: "Which clause is used to sort query results?",
        options: [
            "SORT BY",
            "ORDER BY",
            "GROUP BY",
            "ARRANGE BY"
        ],
        answer: 1,
        explanation: "The ORDER BY clause is used to sort the result of a query in ascending or descending order."
    }

];