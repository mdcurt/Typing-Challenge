export function timer() {
  let time = 0;

  const timerEl = document.getElementById('timer-display');

  setInterval(updatedTimer, 1000);

  function updatedTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds <10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time++;
  }

  }