var startTimerBtn = document.getElementById("start-timer-btn");
var resetBtn = document.getElementById("reset-btn");
let sets = 0;

startTimerBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetSetCount);

function startTimer() {
  document.getElementById("start-timer-btn").disabled = true;
  document.getElementById("reset-btn").disabled = true;
  let counter = document.getElementById("rest-time").value;
  console.log(counter);

  const interval = setInterval(() => {
    document.getElementById("timer").innerHTML = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      sets++;
      document.getElementById("sets").innerHTML = sets;
      document.getElementById("start-timer-btn").disabled = false;
      document.getElementById("reset-btn").disabled = false;
    }
  }, 1000);
}

function resetSetCount() {
  sets = 0;
  document.getElementById("sets").innerHTML = sets;
}
