const today = document.querySelector(".time p:first-child");
const time = document.querySelector(".time p:last-child");

function clockFunction() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  today.innerText = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  time.innerText = `${hour}:${minute}:${second}`;
}

clockFunction();
setInterval(clockFunction, 1000);
