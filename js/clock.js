const current_date = document.querySelector(".daytime_column-kr-day");
const current_time = document.querySelector(".daytime_column-kr-time");
const local_date = document.querySelector(".daytime_column-mty-day");
const local_time = document.querySelector(".daytime_column-mty-time");

function getCurrentClock() {
  const dates = new Date();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const year = String(dates.getFullYear());
  const month = Number(dates.getMonth()) + 1;
  const date = String(dates.getDate());
  const day = String(dates.getDay());
  const hours = Number(dates.getHours());
  const minutes = String(dates.getMinutes()).padStart(2, "0");
  const seconds = String(dates.getSeconds()).padStart(2, "0");
  current_date.innerText = `${year}. ${month}. ${date} ${weekday[day]}`;
  if (hours < 12) {
    current_time.innerText = `AM ${String(hours).padStart(
      2,
      "0"
    )} : ${minutes} : ${seconds}`;
  } else if (hours === 12) {
    current_time.innerText = `PM ${String(hours).padStart(
      2,
      "0"
    )} : ${minutes} : ${seconds}`;
  } else {
    current_time.innerText = `PM ${String(hours - 12).padStart(
      2,
      "0"
    )} : ${minutes} : ${seconds}`;
  }
}

function getLocalClock(utc_diff) {
  // console.log(utc_diff);
  const dates = new Date();
  const utc = dates.getTime() + dates.getTimezoneOffset() * 60 * 1000;
  const mty_time_diff = utc_diff * 60 * 60 * 1000;
  const mty_time = new Date(utc + mty_time_diff);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const year = String(mty_time.getFullYear());
  const month = Number(mty_time.getMonth()) + 1;
  const date = String(mty_time.getDate());
  const day = String(mty_time.getDay());
  const hours = Number(mty_time.getHours());
  const minutes = String(mty_time.getMinutes()).padStart(2, "0");
  const seconds = String(mty_time.getSeconds()).padStart(2, "0");

  local_date.innerText = `${year}. ${month}. ${date} ${weekday[day]}`;
  if (hours <= 12) {
    local_time.innerText = `AM ${String(hours).padStart(
      2,
      "0"
    )} : ${minutes} : ${seconds}`;
  } else {
    local_time.innerText = `PM ${String(hours - 12).padStart(
      2,
      "0"
    )} : ${minutes} : ${seconds}`;
  }
}

getCurrentClock();
getLocalClock(-6);
setInterval(getCurrentClock, 1000);
setInterval(getLocalClock, 1000, -6);
