var startTimerBtn = document.getElementById("start-timer-btn");
startTimerBtn.addEventListener('click', startTimer);

function startTimer() {
  document.getElementById("start-timer-btn").disabled = true;
  let counter = document.getElementById("rest-time").value;
  console.log(counter);

  const interval = setInterval(() => {
    document.getElementById("timer").innerHTML = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      document.getElementById("start-timer-btn").disabled = false;
    }
  }, 1000);
}
