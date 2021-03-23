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
var mins = 25;

function startTimer() {
    setInterval(countDownSecs, 1000);
    setInterval(countDownMins, 60000);
    var secs = mins*60;
    

    function countDownSecs() {
        
        secs-=1;
        console.log(secs%60);
        document.querySelector("#secs-display").innerHTML = secs%60;
    }
    function countDownMins() {
        mins-=1;
        console.log(mins);
        document.querySelector("#mins-display").innerHTML = mins;
    }
    countDownMins();
}

document.querySelector("#start-btn").addEventListener("click", startTimer);