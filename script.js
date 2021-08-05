var keepCounting = true;
var timerElem = document.getElementById("timer-container");
var periodLength = 25;
var nextPomo = 0;
var mode = "focus";
var paused = false;

function startTimer() {
    if (!paused) {
      var timeLeft = periodLength*60;
    }
    var int = setInterval(countDownSecs, 1000);
    document.querySelector("#start-btn").disabled = true;
    keepCounting = true;
    

    function countDownSecs() {
      
      if (keepCounting) {
        console.log(timeLeft);
        timeLeft-=1;
        var secs = timeLeft%60;
        var mins = Math.floor(timeLeft/60);
        document.querySelector("#secs-display").innerHTML = secs > 9 ? secs : "0" + secs;
        document.querySelector("#mins-display").innerHTML = mins > 9 ? mins + " :" : "0" + mins + " :";
        if (timeLeft == 0 && mode == "focus") {
          pomoComplete();
        }
      } else {
        clearInterval(int);
        keepCounting = true;
      }
      
        
        
    }
}

function pauseTimer() {
  document.querySelector("#start-btn").disabled = false;
  keepCounting = false;
  paused = true;
}

function focusTime() {
  timerElem.style.backgroundColor = "palevioletred";
  periodLength = 25;
  document.querySelector("#mode-title").innerHTML = "Focus";
  document.querySelector("#toggle-btn").innerHTML = "Break";
  document.querySelector("#mins-display").innerHTML = periodLength < 10 ? "0" + periodLength +" : " : periodLength + " : ";
  console.log("focus time");
}

function breakTime() {
  timerElem.style.backgroundColor = "rgb(141, 130, 211)";
  periodLength = 5;
  document.querySelector("#mode-title").innerHTML = "Break";
  document.querySelector("#toggle-btn").innerHTML = "Focus";
  document.querySelector("#mins-display").innerHTML = periodLength < 10 ? "0" + periodLength +" : " : periodLength + " : ";
  console.log(document.querySelector("#mins-display").innerHTML);
  document.querySelector("#secs-display").innerHTML = "00";
  console.log("break time");
}

function toggleMode() {
  if (mode=="focus") {
    mode = "break";
    breakTime();
  } else if (mode == "break") {
    mode = "focus";
    focusTime();
  }
}

function pomoComplete() {
  var pomoDiv = document.querySelectorAll(".pomo")[nextPomo];
  pomoDiv.classList.add("complete");
  pomoDiv.classList.remove("incomplete");
  nextPomo++;
  mode = "break";
}


document.querySelector("#start-btn").addEventListener("click", startTimer);
document.querySelector("#pause-btn").addEventListener("click", pauseTimer);
document.querySelector("#toggle-btn").addEventListener("click", toggleMode);