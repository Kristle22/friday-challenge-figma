setInterval(myClock, 1000);

function myClock() {
  const date = new Date();
  document.getElementById('hours').innerHTML = date.toLocaleTimeString('lt');
}

const date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString('lt', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const hello = 'Kristina';
document.getElementById('myName').innerHTML = hello;
