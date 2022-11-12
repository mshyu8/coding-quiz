var startButton = document.querySelector("#strtbtn");
var realStart = document.querySelector("#realStart");
var card = document.querySelector(".card");
var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var timerCount = 75;

//function hide(event) {
    //    event.currentTarget.style.visibility = 'hidden';
    //    console.log("wassuop");
    //    console.log("wassup");
    //     var question1 = document.createElement('div');
    //    question1.setAttribute('id', 'question1');
    //    card.appendChild(question1);
//    var q1 = document.createElement('h2');
//    q1.setAttribute('id', 'q1');
//    question1.appendChild(q1);
//    q1.textContent = "Commonly used data types DO Not include: ";

//}

//startButton.addEventListener("click", hide, false);


function question1(event) {
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

    
    startButton.addEventListener("click", question2);
}

function question2(event) {
    h1.textContent = "The condition in an if / else statement is enclosed with __________.";
    answer1.textContent = "1. Quotes";
    answer2.textContent = "2. Curly Brackets";
    answer3.textContent = "3. Parenthesis";
    answer4.textContent = "4. Square Brackets";
    startButton.addEventListener("click", question3);

    if (answer1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

function question3(event) {
    h1.textContent = "Arrays in JavaScript can be used to store ______";
    answer1.textContent = "1. Numbers and Strings";
    answer2.textContent = "2. Other Arrays";
    answer3.textContent = "3. Booleans";
    answer4.textContent = "4. All of the above";
    startButton.addEventListener("click", question4);
}

function question4(event) {
    h1.textContent = "Strings values must be encolsed within ______ when being assigned to variables.";
    answer1.textContent = "1. Commas";
    answer2.textContent = "2. Curly Brackets";
    answer3.textContent = "3. Quotes";
    answer4.textContent = "4. Parenthesis";
    startButton.addEventListener("click", question5);
}

function question5(event) {
    h1.textContent = "A very useful tool used during development and devugging for printing content to the debugger is: ";
    answer1.textContent = "1. JavaScript";
    answer2.textContent = "2. Terminal/Bash";
    answer3.textContent = "3. For loops";
    answer4.textContent = "4. Console.log";
    startButton.addEventListener("click", endScreen);
}

function endScreen(event) {
    h1.textContent = "All done!";
    //h2.textContent = "Your final score is" + timeLeft + ".";
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
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
      }
    }, 1000);
  }


//realStart.addEventListener("click", startTimer);



//startButton.addEventListener("click", question1);

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
    } 
}

function q1() {
    if (answer1) {
        console.log("lol yah");
    } else if (answer2) {
        console.log("lol noooo");
    }
}

realStart.addEventListener("click", start);
