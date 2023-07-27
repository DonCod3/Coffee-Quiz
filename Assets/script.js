let mainBody = document.querySelector("main");
let timeleft = 60;
let currentSlide = 1;
let scoreArr;
let questionObj = {
    questions = [{
        question: "What is the purpose of JavaScript (JS) in web development?",
        choices: ["It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.", "It allows us to order coffee while coding.", "It's cute.", "JavaScript is used in place of HTML."],
        correctAnswer: "It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc."
    }, {
        question: "What is not a data type recognized by JavaScript?",
        choices: ["Integer", "Float", "Boolean", "Imaginary Number"],
        correctAnswer: "Imaginary Number"
    },  {
        question: "To check the type of data, use console.log( ___ + variable in question);", 
        choices: ["whatIs", "typeWriter", "typefo", "typeof"],
        correctAnswer: "typeof"
    },  {
        question: "Functions are reusable blocks of code that perform ____",
        choices: ["Acrobatics", "Miracles", "A specific task", "All of the above"],
        correctAnswer: "A specific task"
    },  {
        question: "Function arguments give parameters their ___",
        choices: ["Values", "Morals", "perimeters", "Food"],
        correctAnswer: "Values"
    },  {
        question: "A collection of properties can be grouped by:",
        choices: ["Random", "Class", "Grade", "Objects"],
        correctAnswer: "Objects"
    },  {
        question: "the keyword 'this' refers to the ____ object",
        choices: ["specific", "Global", "Earthly", "Object"],
        correctAnswer: "Global"
    },  {
        question: "Data types have access to specific _____, that allow us to handle instances of that data type.",
        choices: ["Standards", "Methods", "Names", "instances"],
        correctAnswer: "Methods"
    },  {
        question: "Which of the following is an example of a built in method",
        choices: ["Scientific", "Body Wash", "Number.jump()", "Number.isInteger()"],
        correctAnswer: "Number.isInteger"
    },  {
        question: "Let is a keyword update courtesy of ____",
        choices: ["Joe Biden", "ES6", "EQS", "ES5"],
        correctAnswer: "ES6"
    },  {
        question: "There are _ logical operators",
        choices: ["3", "A few", "5"],
        correctAnswer: "3"
    }, {
        question: "Ternary operators can be used to simplify what kind of statments?", 
        choices: ["Public", "if...else", "or...else", "something...else"],
        correctAnswer: "if...else"
    }]
}
        
    


// var startBtnEl = $('#startQuiz');

// (function startQuiz() {
//     DocumentTimeline.querySelector("click", )
// }) ;

// (function Quiz() {
//     var questions = [{
//         question: "What is the purpose of JavaScript (JS) in web development?",
//         choices: ["It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.", "It allows us to order coffee while coding.", "It's cute.", "JavaScript is used in place of HTML."],
//         correctAnswer: "It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc."
//     }, {
//         question: "What is not a data type recognized by JavaScript?",
//         choices: ["Integer", "Float", "Boolean", "Imaginary Number"],
//         correctAnswer: "Imaginary Number"
//     },  {
//         question: "To check the type of data, use console.log( ___ + variable in question);", 
//         choices: ["whatIs", "typeWriter", "typefo", "typeof"],
//         correctAnswer: "typeof"
//     },  {
//         question: "Functions are reusable blocks of code that perform ____",
//         choices: ["Acrobatics", "Miracles", "A specific task", "All of the above"],
//         correctAnswer: "A specific task"
//     },  {
//         question: "Function arguments give parameters their ___",
//         choices: ["Values", "Morals", "perimeters", "Food"],
//         correctAnswer: "Values"
//     },  {
//         question: "A collection of properties can be grouped by:",
//         choices: ["Random", "Class", "Grade", "Objects"],
//         correctAnswer: "Objects"
//     },  {
//         question: "the keyword 'this' refers to the ____ object",
//         choices: ["specific", "Global", "Earthly", "Object"],
//         correctAnswer: "Global"
//     },  {
//         question: "Data types have access to specific _____, that allow us to handle instances of that data type.",
//         choices: ["Standards", "Methods", "Names", "instances"],
//         correctAnswer: "Methods"
//     },  {
//         question: "Which of the following is an example of a built in method",
//         choices: ["Scientific", "Body Wash", "Number.jump()", "Number.isInteger()"],
//         correctAnswer: "Number.isInteger"
//     },  {
//         question: "Let is a keyword update courtesy of ____",
//         choices: ["Joe Biden", "ES6", "EQS", "ES5"],
//         correctAnswer: "ES6"
//     },  {
//         question: "There are _ logical operators",
//         choices: ["3", "A few", "5"],
//         correctAnswer: "3"
//     }, {
//         question: "Ternary operators can be used to simplify what kind of statments?", 
//         choices: ["Public", "if...else", "or...else", "something...else"],
//         correctAnswer: "if...else"
//     }]
// });

// startBtn.addEventListener("click", Quiz () {

// });

// startBtnEl.add('click', Quiz () {
//     var random = Quiz.random(), 
//     console.log(random),
//     return
// })


var timerEl = document.getElementById("timer");

function countdown() {
    var timeleft = 30;

    var timerInterval = setInterval(function () {
        if(timeleft > 0) {
            timerEl.textContent = timeleft + ' seconds left';
            timeleft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}
countdown();

// var msgInterval = setInterval(function () {
//     if (words[wordCount] === undefined) {
//         clearInterval(msgInterval);
//     } else {

//     }
// })

// //keeps track of the time left during quiz
// function setTime() {
//     var timerInterval= setInterval(function () {
//         secondsLeft--;
//         timerEl.textContent= secondsLeft + "seconds left";
//         if(secondsLeft==0) {
//             clearInterval(timerInterval);
//         }
//     },1)
// }
