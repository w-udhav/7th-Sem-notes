let todos = [
  { id: 1, title: "Learn JavaScript", desc: "Learn JavaScript", done: false },
  { id: 2, title: "Learn React", desc: "Learn React", done: false },
  { id: 3, title: "Learn Node", desc: "Learn Node", done: false },
];
let todoContainer = document.querySelector("#todo_container");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let desc = document.querySelector("#desc").value;
  if (!title || !desc) {
    alert("Please fill all the fields");
    return;
  }
  let id = todos.length + 1;
  let done = false;

  let todo = { id, title, desc, done };
  addTodo(todo);
  form.reset();
});

function addTodo(todo) {
  todos.push(todo);
  showTodos();
}

function showTodo(todo) {
  const { id, title, desc, done } = todo;
  let div = document.createElement("div");
  div.classList.add("todo");
  div.innerHTML = `
		<h1>${title}</h1>
		<p>${desc}</p>
	`;
  if (done) {
    div.classList.add("done");
  }
  todoContainer.appendChild(div);
}

function showTodos() {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    showTodo(todo);
  });
}

document.addEventListener("DOMContentLoaded", showTodos);
