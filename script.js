class CountDown {
  constructor(seconds, minutes, hours, days) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
  }

  setSeconds(seconds) {
    this.seconds = seconds;
  }

  setMinutes(minutes) {
    this.minutes = minutes;
  }

  setHours(hours) {
    this.hours = hours;
  }

  setDays(days) {
    this.days = days;
  }

  getSeconds() {
    return this.seconds;
  }

  getMinutes() {
    return this.minutes;
  }

  getHours() {
    return this.hours;
  }

  getDays() {
    return this.days;
  }
}

const daysInYear = (now) => {
  const COMMAN_YEAR = 365;
  const LEAP_YEAR = 366;

  const year = now.getFullYear();

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return LEAP_YEAR;
  }

  return COMMAN_YEAR;
};

const currentDayInYear = (now) => {
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const difference = now - startOfYear;

  return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
};

const clock = () => {
  const now = new Date();

  const totalDays = daysInYear(now);

  const currentDay = currentDayInYear(now);

  const daysLeft = totalDays - currentDay;
  const hoursLeft = 23 - now.getHours();
  const minutesLeft = 59 - now.getMinutes();
  const secondsLeft = 59 - now.getSeconds();

  return new CountDown(secondsLeft, minutesLeft, hoursLeft, daysLeft);
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const setCountDown = (countDown) => {
  document.getElementById("days").innerText = countDown.getDays();

  document.getElementById("hours").innerText = formatTime(countDown.getHours());

  document.getElementById("minutes").innerText = formatTime(
    countDown.getMinutes()
  );

  document.getElementById("seconds").innerText = formatTime(
    countDown.getSeconds()
  );
};

setInterval(() => {
  const countDown = clock();
  setCountDown(countDown);
}, 1000);
