const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");
const usernameInput = document.querySelector(".login-form input");
const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");
let username = localStorage.getItem("username");
const greetingArray = ["안녕하세요", "반갑습니다", "환영합니다"];

function greetingFunction() {
  const randomNumber = Math.floor(Math.random() * greetingArray.length);
  greeting.innerText = `${greetingArray[randomNumber]} ${username}`;
  greeting.classList.remove("hidden");
  screenOne.classList.remove("fullscr");
  screenTwo.classList.remove("shrink");
}

function loginFunction(event) {
  event.preventDefault();
  const newName = usernameInput.value;
  username = usernameInput.value;
  localStorage.setItem("username", newName);
  loginForm.classList.add("hidden");
  greetingFunction();
}

function logoutFunction() {
  localStorage.removeItem("username");
  greeting.classList.add("hidden");
  loginForm.classList.remove("hidden");
  screenOne.classList.add("fullscr");
  screenTwo.classList.add("shrink");
}

if (username === null) {
  loginForm.classList.remove("hidden");
} else {
  greetingFunction();
}

loginForm.addEventListener("submit", loginFunction);
greeting.addEventListener("click", logoutFunction);
