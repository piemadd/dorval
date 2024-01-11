import "@fontsource/montserrat/400.css";
import './style.css';

const counterHolder = document.getElementById('counterHolder');
const counterElement = document.getElementById('counter');

const start = new Date('2015-05-13T12:00:00-0500').valueOf();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365;

const updateDate = () => {
  const now = Date.now();
  let diff = now - start;

  /*
  let years = 0;
  let weeks = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  //subtracting years
  years = Math.floor(diff / year);
  diff -= years * year;

  //subtracting weeks
  weeks = Math.floor(diff / week);
  diff -= weeks * week;

  //subtracting days
  days = Math.floor(diff / day);
  diff -= days * day;

  //subtracting hours
  hours = Math.floor(diff / hour);
  diff -= hours * hour;

  //subtracting minutes
  minutes = Math.floor(diff / minute);
  diff -= minutes * minute;

  //subtracting seconds
  seconds = Math.floor(diff / second);
  diff -= seconds * second;
  
  console.log(`${years} years, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${diff} ms`)
  */
  
  document.getElementById('counter').innerText = `${((now - start) / day).toLocaleString([], {
    style: "decimal",
    minimumFractionDigits: 5
  })} days`;
}

updateDate();

setInterval(() => updateDate(), 100);