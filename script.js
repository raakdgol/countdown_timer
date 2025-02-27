const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");

const newYears = "1 Jan 2026";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  secondsElement.innerHTML = formatTime(seconds);
  minutesElement.innerHTML = formatTime(minutes);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial timer call
countdown();

setInterval(countdown, 1000);
