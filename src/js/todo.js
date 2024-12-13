const todoForm = document.querySelector(".todo-form");
const todoText = document.querySelector(".todo-form__text");
const todoDate = document.querySelector(".todo-form__date");
const todosNotPlanned = document.querySelector(".todo-list ul:first-child");
const todosPlanned = document.querySelector(".todo-list ul:last-child");
const savedPlanned = localStorage.getItem("todosPlanned");
const savedNotPlanned = localStorage.getItem("todosNotPlanned");
let arrayPlanned = [];
let arrayNotPlanned = [];

// 메모리 누수 방지용 interval 관리 map
const timerMap = new Map();

function printTodoNotPlanned(event) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = event.id;
  span.innerText = event.text;
  button.innerText = "×";
  button.addEventListener("click", deleteNotPlanned);
  li.appendChild(span);
  li.appendChild(button);
  todosNotPlanned.appendChild(li);
}

// li 추가 함수
function printTodoPlanned(event) {
  const li = document.createElement("li");
  const todoThing = document.createElement("p");
  const bigBox = document.createElement("div");
  const dateBox = document.createElement("div");
  const timeToDate = document.createElement("p");
  const theDate = document.createElement("p");
  const button = document.createElement("button");
  li.id = event.id;
  todoThing.innerText = event.text;
  theDate.innerText = todoDate.value;
  timeToDate.innerText = "임시";
  button.innerText = "×";
  li.appendChild(todoThing);
  li.appendChild(bigBox);
  bigBox.appendChild(dateBox);
  bigBox.appendChild(button);
  dateBox.appendChild(timeToDate);
  dateBox.appendChild(theDate);
  button.addEventListener("click", deletePlanned);
  todosPlanned.appendChild(li);
  const dday = todoDate.value;
  todoTimer(dday, timeToDate, event.id);
}
function printTodoPlanned(event) {
  const li = document.createElement("li");
  const todoThing = document.createElement("p");
  const bigBox = document.createElement("div");
  const dateBox = document.createElement("div");
  const timeToDate = document.createElement("p");
  const theDate = document.createElement("p");
  const button = document.createElement("button");
  li.id = event.id;
  todoThing.innerText = event.text;
  theDate.innerText = todoDate.value;
  button.innerText = "×";
  li.appendChild(todoThing);
  li.appendChild(bigBox);
  bigBox.appendChild(dateBox);
  bigBox.appendChild(button);
  dateBox.appendChild(timeToDate);
  dateBox.appendChild(theDate);
  button.addEventListener("click", deletePlanned);
  todosPlanned.appendChild(li);
  const dday = todoDate.value;
  todoTimer(dday, timeToDate, event.id);
}

// 불러오기용 함수
function printTodoPlanned2(savedId, savedText, savedDate) {
  const li = document.createElement("li");
  const todoThing = document.createElement("p");
  const bigBox = document.createElement("div");
  const dateBox = document.createElement("div");
  const timeToDate = document.createElement("p");
  const theDate = document.createElement("p");
  const button = document.createElement("button");
  li.id = Number(savedId);
  todoThing.innerText = savedText;
  theDate.innerText = savedDate;
  button.innerText = "×";
  li.appendChild(todoThing);
  li.appendChild(bigBox);
  bigBox.appendChild(dateBox);
  bigBox.appendChild(button);
  dateBox.appendChild(timeToDate);
  dateBox.appendChild(theDate);
  button.addEventListener("click", deletePlanned);
  todosPlanned.appendChild(li);
  todoTimer(savedDate, timeToDate, Number(savedId));
}

// 삭제 함수
function deletePlanned(event) {
  const li = event.target.closest("li");
  const timerId = Number(li.id);
  clearInterval(timerMap.get(timerId));
  timerMap.delete(timerId);
  li.remove();
  arrayPlanned = arrayPlanned.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo(true);
}
function deleteNotPlanned(event) {
  const li = event.target.closest("li");
  li.remove();
  arrayNotPlanned = arrayNotPlanned.filter(
    (todo) => todo.id !== parseInt(li.id)
  );
  saveTodo(false);
}
function saveTodo(planned) {
  //true면 planned, false면 notPlanned
  if (planned) {
    localStorage.setItem("todosPlanned", JSON.stringify(arrayPlanned));
  } else {
    localStorage.setItem("todosNotPlanned", JSON.stringify(arrayNotPlanned));
  }
}
// 타이머 함수
function todoTimer(dueDate, sentence, timerId) {
  function updater() {
    const date = new Date();
    const dDate = new Date(dueDate);
    const dDate2 = dDate.getTime();
    const dueTo = dDate2 - date;
    if (dueTo > 1000 * 60 * 60 * 24) {
      const dayTo = Math.floor(dueTo / (1000 * 60 * 60 * 24));
      sentence.innerText = `D-${dayTo}`;
    } else if (dueTo < 1000 * 60 * 60 && dueTo > 1000 * 60) {
      const minuteTo = Math.floor(dueTo / (1000 * 60));
      sentence.innerText = `${minuteTo}분`;
    } else if (dueTo <= 0) {
      sentence.innerText = "만료";
      clearInterval(timerMap.get(timerId));
      timerMap.delete(timerId);
    } else if (dueTo <= 1000 * 60 && dueTo > 0) {
      const secondTo = Math.floor((dueTo / 1000) % 60);
      sentence.innerText = `${secondTo}초`;
    } else {
      const hourTo = Math.floor(dueTo / (1000 * 60 * 60));
      const minuteTo = Math.floor((dueTo / (1000 * 60)) % 60);
      sentence.innerText = `${hourTo}시간 ${minuteTo}분`;
    }
  }
  const timeInterval = setInterval(updater, 1000);
  timerMap.set(timerId, timeInterval);
  updater();
}

function submitTodo(event) {
  event.preventDefault();
  // datetime-local 값이 있으면 Planned로, 없으면 NotPlanned로 등록
  if (todoDate.value) {
    const item = {
      text: todoText.value,
      theDate: todoDate.value,
      id: Date.now(),
    };
    arrayPlanned.push(item);
    printTodoPlanned(item);
    todoText.value = "";
    todoDate.value = "";
    saveTodo(true);
  } else {
    const item = { text: todoText.value, id: Date.now() };
    printTodoNotPlanned(item);
    arrayNotPlanned.push(item);
    todoText.value = "";
    saveTodo(false);
  }
}

// localStorage 불러오기
if (savedNotPlanned !== null) {
  const parsedNotPlanned = JSON.parse(savedNotPlanned);
  arrayNotPlanned = parsedNotPlanned;
  parsedNotPlanned.forEach(printTodoNotPlanned);
}
if (savedPlanned !== null) {
  const parsedPlanned = JSON.parse(savedPlanned);
  arrayPlanned = parsedPlanned;
  parsedPlanned.forEach(({ id, text, theDate }) => {
    printTodoPlanned2(id, text, theDate);
  });
}

todoForm.addEventListener("submit", submitTodo);
