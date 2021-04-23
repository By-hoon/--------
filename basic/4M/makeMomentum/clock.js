const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector("h2");

const calcDate = 24 * 60 * 60 * 1000;
function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  const tmpHour = xmasDay.getHours() - date.getHours(),
    tmpMinute = xmasDay.getMinutes() - date.getMinutes(),
    tmpSecond = xmasDay.getSeconds() - date.getSeconds();
  const dates = Math.ceil((xmasDay.getTime() - date.getTime()) / calcDate);

  const hours = tmpHour < 0 ? 23 + tmpHour : tmpHour;

  const minutes = tmpMinute < 0 ? 59 + tmpMinute : tmpMinute;

  const seconds = tmpSecond < 0 ? 60 + tmpSecond : tmpSecond;

  printTime(dates, hours, minutes, seconds);
}

function printTime(d, h, m, s) {
  clockTitle.innerText = `${d < 10 ? `0${d}d` : `${d}d`} ${
    h < 10 ? `0${h}h` : `${h}h`
  } ${m < 10 ? `0${m}m` : `${m}m`} ${s < 10 ? `0${s}s` : `${s}s`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
