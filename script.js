var keepCounting = true;

/*
function startTimer() {
    var id = setInterval(countDown, 1000);

    function countDown() {

      if (keepCounting) {
        seconds--;
        document.querySelector("#start-btn").disabled = true;

        if (seconds >= 60) {
          mins = Math.floor(seconds / 60);
          secondsMod = seconds%60;
          document.querySelector("#timer-display").innerHTML = mins + ":"+ secondsMod;  
        } else {
          document.querySelector("#timer-display").innerHTML = mins + seconds;
        }
        console.log(mins + seconds);
        
      } else {
        clearInterval(id);
        keepCounting = true;
      }
    }
  }


document.querySelector("#start-btn").addEventListener("click", startTimer());
*/
var focusPeriod = 25;
var timeLeft = focusPeriod*60;

function startTimer() {
    var int = setInterval(countDownSecs, 1000);
    
    document.querySelector("#start-btn").disabled = true;
    keepCounting = true;
    

    function countDownSecs() {
      if (keepCounting) {
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



document.querySelector("#start-btn").addEventListener("click", startTimer);
document.querySelector("#pause-btn").addEventListener("click", stopTimer);