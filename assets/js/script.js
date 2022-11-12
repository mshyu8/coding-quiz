var startButton = document.querySelector("#strtbtn");
var realStart = document.querySelector("#realStart");
var card = document.querySelector(".card");
var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var timerCount = 75;
var h4 = document.querySelector('#status');
var quizzed = false;
var h5 = document.querySelector('#form');



function endScreen(event) {
    h1.textContent = "All done!";
    //h2.textContent = "Your final score is" + timeLeft + ".";
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    quizzed = true;
    h2.textContent = "Your final score is " + timerCount;
    var label = document.createElement('label');
    label.setAttribute("id", "label");
    h5.appendChild(label);
    label.textContent = ("Enter username: ");
    var username = document.createElement('input');
    username.setAttribute("id", "username");
    h5.appendChild(username);
    var userButton = document.createElement('button');
    userButton.setAttribute("id", "userButton");
    h5.appendChild(userButton);
    userButton.textContent = ("Submit");
    
    userButton.addEventListener("click", leaderboard);
}

function leaderboard() {
    var rank = username.value + " --- " + timerCount;
    localStorage.setItem("rank", rank);
    //var record = username.value + " " + timerCount;
    //h2.textContent = username.value + " --- " + timerCount;
    //console.log(record);
    h1.textContent = ("High Scores");
    label.remove();
    username.remove();
    userButton.remove();
    h4.remove();
    renderLastRegistered();
}

function renderLastRegistered() {
    var rank = localStorage.getItem("rank");
   
  
    h2.textContent = rank;
   
  }


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = "Time left: " + timerCount;
        
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            h4.textContent = "You lost"
        } else if (quizzed === true) {
            clearInterval(timer);
      }
    }, 1000);
  }




function start() {
    if (realStart) {     
        h1.textContent = "Commonly used data types DO Not include";
        h2.textContent = "";
        realStart.remove();
        var answer1 = document.createElement('button');
        answer1.setAttribute('id', 'answer1');
        h2.appendChild(answer1);
        answer1.textContent = "1. Strings";
        var answer2 = document.createElement('button');
        answer2.setAttribute('id', 'answer2');
        h2.appendChild(answer2);
        answer2.textContent = "2. Booleans";
        var answer3 = document.createElement('button');
        answer3.setAttribute('id', 'answer3');
        h2.appendChild(answer3);
        answer3.textContent = "3. Alerts";
        var answer4 = document.createElement('button');
        answer4.setAttribute('id', 'answer4');
        h2.appendChild(answer4);
        answer4.textContent = "4. Numbers";      
        answer1.addEventListener("click", wrong1);  
        answer2.addEventListener("click", correct1);
        answer3.addEventListener("click", wrong1);
        answer4.addEventListener("click", wrong1);
        startTimer();
    } 
}


function q2() {
    h1.textContent = "The condition in an if / else statement is enclosed with __________.";
    h2.textContent = "";
    realStart.remove();
    var answer1 = document.createElement('button');
    answer1.setAttribute('id', 'answer1');
    h2.appendChild(answer1);
    answer1.textContent = "1. Quotes";
    var answer2 = document.createElement('button');
    answer2.setAttribute('id', 'answer2');
    h2.appendChild(answer2);
    answer2.textContent = "2. Curly Brackets";
    var answer3 = document.createElement('button');
    answer3.setAttribute('id', 'answer3');
    h2.appendChild(answer3);
    answer3.textContent = "3. Parenthesis";
    var answer4 = document.createElement('button');
    answer4.setAttribute('id', 'answer4');
    h2.appendChild(answer4);
    answer4.textContent = "4. Square Brackets";      
    answer1.addEventListener("click", wrong2);  
    answer2.addEventListener("click", correct2);
    answer3.addEventListener("click", wrong2);
    answer4.addEventListener("click", wrong2);
} 

function q3() {
    h1.textContent = "Arrays in JavaScript can be used to store ______.";
    h2.textContent = "";
    realStart.remove();
    var answer1 = document.createElement('button');
    answer1.setAttribute('id', 'answer1');
    h2.appendChild(answer1);
    answer1.textContent = "1. Numbers and Strings";
    var answer2 = document.createElement('button');
    answer2.setAttribute('id', 'answer2');
    h2.appendChild(answer2);
    answer2.textContent = "2. Other Arrays";
    var answer3 = document.createElement('button');
    answer3.setAttribute('id', 'answer3');
    h2.appendChild(answer3);
    answer3.textContent = "3. Booleans";
    var answer4 = document.createElement('button');
    answer4.setAttribute('id', 'answer4');
    h2.appendChild(answer4);
    answer4.textContent = "4. All of the above";      
    answer1.addEventListener("click", wrong3);  
    answer2.addEventListener("click", correct3);
    answer3.addEventListener("click", wrong3);
    answer4.addEventListener("click", wrong3);
} 

function q4() {
    h1.textContent = "Strings values must be encolsed within ______ when being assigned to variables.";
    h2.textContent = "";
    realStart.remove();
    var answer1 = document.createElement('button');
    answer1.setAttribute('id', 'answer1');
    h2.appendChild(answer1);
    answer1.textContent = "1. Commas";
    var answer2 = document.createElement('button');
    answer2.setAttribute('id', 'answer2');
    h2.appendChild(answer2);
    answer2.textContent = "2. Curly Brackets";
    var answer3 = document.createElement('button');
    answer3.setAttribute('id', 'answer3');
    h2.appendChild(answer3);
    answer3.textContent = "3. Quotes";
    var answer4 = document.createElement('button');
    answer4.setAttribute('id', 'answer4');
    h2.appendChild(answer4);
    answer4.textContent = "4. Parenthesis";      
    answer1.addEventListener("click", wrong4);  
    answer2.addEventListener("click", correct4);
    answer3.addEventListener("click", wrong4);
    answer4.addEventListener("click", wrong4);
} 

function q5() {
    h1.textContent = "A very useful tool used during development and devugging for printing content to the debugger is: ";
    h2.textContent = "";
    realStart.remove();
    var answer1 = document.createElement('button');
    answer1.setAttribute('id', 'answer1');
    h2.appendChild(answer1);
    answer1.textContent = "1. JavaScript";
    var answer2 = document.createElement('button');
    answer2.setAttribute('id', 'answer2');
    h2.appendChild(answer2);
    answer2.textContent = "2. Terminal/Bash";
    var answer3 = document.createElement('button');
    answer3.setAttribute('id', 'answer3');
    h2.appendChild(answer3);
    answer3.textContent = "3. For loops";
    var answer4 = document.createElement('button');
    answer4.setAttribute('id', 'answer4');
    h2.appendChild(answer4);
    answer4.textContent = "4. Console.log";      
    answer1.addEventListener("click", wrong5);  
    answer2.addEventListener("click", correct5);
    answer3.addEventListener("click", wrong5);
    answer4.addEventListener("click", wrong5);
} 





function correct1() {
    q2();
    h4.textContent = ("Correct");
    timerCount += 10;
}

function wrong1() {
    q2();
    h4.textContent= ("Wrong");
    timerCount += -20;
}

function correct2() {
    q3();
    h4.textContent = ("Correct");
    timerCount += 10;
}

function wrong2() {
    q3();
    h4.textContent = ("Wrong");
    timerCount += -20;
}

function correct3() {
    q4();
    h4.textContent = ("Correct");
    timerCount += 10;
}

function wrong3() {
    q4();
    h4.textContent= ("Wrong");
    timerCount += -20;
}

function correct4() {
    q5();
    h4.textContent = ("Correct");
    timerCount += 10;
}

function wrong4() {
    q5();
    h4.textContent= ("Wrong");
    timerCount += -20;
}

function correct5() {
    endScreen();
    h4.textContent = ("Correct");
    timerCount += 10;
}

function wrong5() {
    endScreen();
    h4.textContent= ("Wrong");
    timerCount += -20;
}



realStart.addEventListener("click", start);
