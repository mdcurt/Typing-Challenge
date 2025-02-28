export let intervalId;
let startTime;

export function timer() {
  let time = 0;
  startTime = Date.now();

  const timerEl = document.getElementById('timer-display');

  intervalId = setInterval(updatedTimer, 1000);

  function updatedTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds <10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time++;
  }
}

export function stopTimer(intervalId) {
  clearInterval(intervalId);
  const elapsedTime = Date.now() - startTime;
  return elapsedTime;
}