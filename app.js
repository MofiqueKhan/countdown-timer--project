const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekday} , ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms

const futureTime = futureDate.getTime();

function getremainingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHours = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHours);
  let minutes = Math.floor((t % oneHours) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

   // set values array
   const values = [days, hours, minutes, seconds];
   function format(item) {
     if (item < 10) {
       return (item = `0${item}`);
     }
     return item;
   }
 
   items.forEach(function (item, index) {
     item.innerHTML = format(values[index]);
   });
 
   if (t < 0) {
     clearInterval(countdown);
     deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
 }
 // countdown;
 let countdown = setInterval(getremainingTime, 1000);
 //set initial values
 getremainingTime();
 
