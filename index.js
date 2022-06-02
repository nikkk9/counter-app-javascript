const value = document.querySelector(".value");

let counter = 0;

function decrement() {
  counter--;
  value.innerHTML = counter;
}

function increment() {
  counter++;
  value.innerHTML = counter;
}
