setInterval(myClock, 1000);

function myClock() {
  const date = new Date();
  document.getElementById("hours").innerHTML = date.toLocaleTimeString();
}

const date = new Date();
document.getElementById("date").innerHTML = date.toDateString("");

const hello = "Kristina";
document.getElementById("myName").innerHTML = hello;
