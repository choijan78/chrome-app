const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
// const toDoLine = docuemnt.querySelector("#todo-list input");

const TODOS_KEY = "todos";

let toDos = [];

// function handleToDoCheckBox(event) {
//   console.log(event.target.parentElement.name);
// }

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li_id = event.target.parentElement.name;
  const li_todo = document.getElementById(li_id);
  li_todo.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li_todo.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const divA = document.createElement("div");
  const divB = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.value = newTodo.text;
  input.name = newTodo.id;
  const label = document.createElement("label");
  label.for = newTodo.id;
  label.innerText = newTodo.text;
  const button = document.createElement("button");
  button.name = newTodo.id;
  const i = document.createElement("i");
  i.className = "fa-regular fa-trash-can";
  button.addEventListener("click", deleteToDo);
  li.appendChild(divA);
  li.appendChild(divB);
  divA.appendChild(input);
  divA.appendChild(label);
  button.appendChild(i);
  divB.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// toDoLine.addEventListener("click", handleToDoCheckBox);

function sayHello(item) {
  console.log("this is the turn of ", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
