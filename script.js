let hours = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let day = document.querySelector("#day");
setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : " ") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : " ") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : " ") + currentTime.getSeconds();
}, 1000);
let currentTime = new Date();
date.innerText = currentTime.getDate();
month.innerText = currentTime.getMonth();
year.innerText = currentTime.getFullYear();
if (currentTime.getDay() == 0) {
  day.innerText = "Sunday";
}
if (currentTime.getDay() == 1) {
  day.innerText = "Monday";
}
if (currentTime.getDay() == 2) {
  day.innerText = "Tuesday";
}
if (currentTime.getDay() == 3) {
  day.innerText = "Wednesday";
}
if (currentTime.getDay() == 4) {
  day.innerText = "Thursday";
}
if (currentTime.getDay() == 5) {
  day.innerText = "Friday";
}
if (currentTime.getDay() == 6) {
  day.innerText = "Saturday";
}
