var keepCounting = true;
var timerElem = document.getElementById("timer-container");
var periodLength = 25;
var timeLeft = periodLength*60;
var mode = "focus";

function startTimer() {
    var int = setInterval(countDownSecs, 1000);
    
    document.querySelector("#start-btn").disabled = true;
    keepCounting = true;
    

    function countDownSecs() {
      if (keepCounting) {
        mode == "focus" ? periodLength = 25 : periodLength = 5;

        timeLeft-=1;
        var secs = timeLeft%60;
        var mins = Math.floor(timeLeft/60);
        console.log(secs + mins);
        
        document.querySelector("#secs-display").innerHTML = secs > 9 ? secs : "0" + secs;
        document.querySelector("#mins-display").innerHTML = mins > 9 ? mins + " :" : "0" + mins + " :";
      } else {
        clearInterval(int);
        keepCounting = true;
      }
      
        
        
    }
}

function stopTimer() {
  document.querySelector("#start-btn").disabled = false;
  keepCounting = false;
}

function focusTime() {
  timerElem.style.backgroundColor = "palevioletred";
  periodLength = 25;
  document.querySelector("#mode-title").innerHTML = "Focus";
  document.querySelector("#toggle-btn").innerHTML = "Break";
  document.querySelector("#mins-display").innerHTML = periodLength + " : ";
  console.log("focus time");
}

function breakTime() {
  timerElem.style.backgroundColor = "rgb(141, 130, 211)";
  periodLength = 5;
  document.querySelector("#mode-title").innerHTML = "Break";
  document.querySelector("#toggle-btn").innerHTML = "Focus";
  document.querySelector("#mins-display").innerHTML = "0" + periodLength + " : ";
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



document.querySelector("#start-btn").addEventListener("click", startTimer);
document.querySelector("#pause-btn").addEventListener("click", stopTimer);
document.querySelector("#toggle-btn").addEventListener("click", toggleMode);