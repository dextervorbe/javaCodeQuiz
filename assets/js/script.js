var questionsSelector = document.querySelector(".title");
var words = document.querySelector(".words");
var startBtn = document.querySelector(".start-btn");
var btn1 = document.querySelector(".Option-1");
var btn2 = document.querySelector(".Option-2");
var btn3 = document.querySelector(".Option-3");
var btn4 = document.querySelector(".Option-4");
var timerElement = document.querySelector(".timer-count");
var intBox = document.querySelector(".initBox");
var submit = document.querySelector(".submit");
var nameSelector = document.querySelector("#nameS");
var clearScore =  document.querySelector(".clear");
var startNQ = document.querySelector(".goBack");


var isWin = false;
var timer;
var timerCount = 75;
var i = 0;

var pWord = "Try to answer the following code-related questions within the time limit\nKeep in mind that incorrect answers will penalize your score time by ten seconds!"
words.textContent = pWord;
 
var questions = [
    {
        title: "Commonly used data type DO NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'booleans' 
    },
        
    {
        title: "The condition in an if/else statement is enclosed within ____.",
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses' 
    },

    {
        title: "Arrays in JavaScript can be used to store ___.",
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above' 
    },

   {
    title: "String values must be enclosed within ___ when being assigned to variables.",
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'curly brackets' 
   },

   {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
    answer: 'for loops'  
   }
];

function startquiz() {
    isWin = false;
    firstQuestion()
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount <= 0 || isWin) {
            clearInterval(timer);
        } 

        
    }, 1000);
}

function firstQuestion() {
    if(i !== 5) {
    questionsSelector.textContent = questions[i].title;
    words.style.display = "none";
    startBtn.style.display = "none";
    btn1.style.display = "inline";
    btn2.style.display = "inline";
    btn3.style.display = "inline";
    btn4.style.display = "inline";
    btn1.textContent = questions[i].choices[0];
    btn2.textContent = questions[i].choices[1]
    btn3.textContent = questions[i].choices[2]
    btn4.textContent = questions[i].choices[3]
    } else {
        resultLog()
    }

}

function resultLog() {
    isWin = true;
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    words.style.display = "flex";
    intBox.style.display = "inline";
    submit.style.display = "inline";
    questionsSelector.textContent = "All Done";
    words.textContent = "Your final score is " + (timerCount - 1); 
}

btn1.addEventListener("click",function(e){
    e.preventDefault();
    var ansCheck = e.target.textContent;
    if(ansCheck === questions[i].answer){
        i = i + 1;
        firstQuestion()
    } else if(ansCheck !== questions[i].answer) {
        i = i + 1;
        alert('Wrong');
    timerCount = timerCount - 10;
        firstQuestion()
        
   }
});

btn2.addEventListener("click",function(e){
    e.preventDefault();
    var ansCheck = e.target.textContent;
    if(ansCheck === questions[i].answer){
        i = i + 1;
        firstQuestion()
    } else if(ansCheck !== questions[i].answer) {
        i = i + 1;
        alert('Wrong');
        timerCount = timerCount - 10;
        firstQuestion()
        
   }
});

btn3.addEventListener("click",function(e){
    e.preventDefault();
    var ansCheck = e.target.textContent;
    if(ansCheck === questions[i].answer){
        i = i + 1;
        firstQuestion()
    } else if(ansCheck !== questions[i].answer) {
        i = i + 1;
        alert('Wrong');
        timerCount = timerCount - 10;
        firstQuestion()
        
   }
});

btn4.addEventListener("click",function(e){
    e.preventDefault();
    var ansCheck = e.target.textContent;
    if(ansCheck === questions[i].answer){
        var tempString = `1,2,${i},a,b,c`;
        var tempString =  "1,2,"+ i +",a,b,c";
        i = i + 1;
        firstQuestion();
    } else if(ansCheck !== questions[i].answer) {
        i = i + 1;
        alert('Wrong');
        timerCount = timerCount - 10;
        firstQuestion();
   }
});

clearScore.addEventListener("click", function(e){
    e.preventDefault();

});

startNQ.addEventListener("click", function(e){
    e.preventDefault();
});

submit.addEventListener("click",function(e){
    e.preventDefault();
    window.localStorage.setItem(intBox.value, timerCount);

    const scores = showScores();
    nameSelector.innerHTML = "";
    nameSelector.appendChild(scores);
});

const showScores = () => {
    intBox.style.display = "none";
    submit.style.display = "none";
    
    const names = Object.keys(localStorage);

    const list = document.createElement('ul');

    names.forEach(name => {
        const li = document.createElement('li'); 
        const score = window.localStorage.getItem(name);
        
        li.innerHTML = name + ': ' + score;

        list.appendChild(li);
    });

    return list;
};



startBtn.addEventListener("click", startquiz);
