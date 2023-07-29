let mainBody = document.querySelector("main");
let timeleft = 60;
let currentSlide = 1;
let scoreArr;
let questionObj = {
    questions : [{
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
};
        

//Remove elements from main section
let clearMain = function() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild)
    }
};

let endGame = function() {
    clearMain();
    // addEndGameScreen();
};


let checkAnswer = function() {
    let answerButtons = document.querySelectorAll(".choices");
    answerButtons.forEach(btn => {
        btn.addEventListener("mousedown", function(event) {
            if (Event.currentTarget.textContent === questionObj.questions[currentSlide - 1].correctAnswer) {
                feedbackHeader.textContent = "correct!";
            } else {
                feedbackHeader.textContent = "Wrong!";
                timeleft = timeleft - 10;
            }
        });
        btn.addEventListener("mouseup".loadQA);
    });
};

let loadQuestion = function() {
    let questionKey = ".question" + currentSlide;
    let currentQuestion = questionObj[questionKey].question;

    return currentQuestion;
};



let loadAnswers = function() {
    let anserButtons = document.querySelector(".answerDiv").children;
    let arr = [];
    let num;
    for(let i = 0; i < answerButtons.length; i++) {
        let randomize = function() {
            num = Math.floor(Math.random() * answerButtons.length) +1;
            if (arr.indexOf(num) >= 0) {
                return randomize();
            };
            return num;
        };
        arr.push(randomize());
    };

    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].id = "answer" + arr[i];
        let questionKey = "question" + currentSlide;
        let cal = arr[i] - 1;
        anserButtons[i].textContent = questionObj.questions[currentSlide - 1].choices[cal]; 
    }
};

let loadQA = function() {
    if (currentSlide <= Object.keys(questionObj).length) {
        let question = document.querySelector(".question");
        question.textContent = loadQuestion();
        loadAnswers();
        currentSlide++;
    } else {
        currentSlide++;
        endGame();
    }
};

//section containing questions
let addQuestionSection = function() {
    newSection = document.createElement("section");
    newSection.className = "questionSection";

    let newDiv = document.createElement("div")
    newDiv.className = "questionDiv";
    newSection.appendChild(newDiv);

    let questionHeader = document.createElement("h1");
    questionHeader.className = "question";
    newDiv.appendChild(questionHeader)

    return newSection;
};

//section containing answers

let addAnswerSection = function() {
    let newSection = document.createElement("section");
    newSection.className = "answerSection";
    let newDiv = document.createElement("div");
    newDiv.className = "answerDiv";
    newSection.appendChild(newDiv);

    for (let i = 0; i < 4; i++) {
        let btn = document.createElement("button");
        btn.className = "choices";
        newDiv.appendChild(btn);
    }
    loadAnswers();

    return newSection;
};

let addFeedbackSection = function() {
    newSection = document.createElement("section");
    newSection.className = "feedbackSection";
    //new element for feedback
    let feedbackHeader = document.createElement("h2");
    feedbackHeader.id = "feedback";
    newSection.appendChild(feedbackHeader);

    return newSection;
};





let startTimer = function() {
    let timer = document.querySelector(".timer");
    timeleft = 60;
    let timerFunction = setInterval(function() {
        if(timeleft < 0) {
            timeleft = 0;
        };

        if(timeleft > 0 && currentSlide < 13) {
            timeleft--;
            timer.textContent = timeleft;
        } else {
            clearInterval(timerFunction);
            timer.textContent = timeleft;
            endGame();
        }
    }, 1000)
};


//begin quiz
let startQuiz = function() {
    clearMain();
    currentSlide = 1;
    timeleft = 60;

    let newSection;
    for(let i = 0; i < 3; i++) {
        if(i == 0) {
            newSection = addQuestionSection();
        } else if(i == 1) {
            newSection = addAnswerSection();
        } else if(i == 2) {
            newSection = addFeedbackSection();
        }
        mainBody.appendChild(newSection);
    }
    loadQA();
    checkAnswer();
    startTimer(mainBody);
};

document.querySelector(".startQuiz").addEventListener("click", startQuiz)

