console.log("Hello from src/index.js!");

const list2 = document.querySelector("#players");
const element = list2.querySelector(".red");
console.log(element.innerText);

const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText);
});

const list = document.querySelector('#fifa-wins');
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

const hint = document.querySelector("#console-hint");
hint.style.display = "none";


const emailInput = document.getElementById("email");

// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";

const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML

const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);

const clickButton = document.getElementById("event");

clickButton.addEventListener('click', (event) => {
  console.log("click click");
});


// const romain = document.getElementById("romain");
// romain.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget);
//   event.currentTarget.classList.toggle("img-circle");
// });

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    // debugger
    event.currentTarget.classList.toggle("img-circle");
  });
});
