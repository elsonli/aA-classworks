let todos = [];
let todosUl = document.querySelector('.todos');
let todosForm = document.querySelector('.add-todo-form');

function ToDo() {}

function addTodo() {
  let inputName = document.getElementsByName("add-todo")[0];
  let newToDo = new ToDo();
  newToDo.value = inputName.value;
  newToDo.done = false;
  todos.push(newToDo);
  inputName.value = "";
}

function populateList(todos) {
  // for (let idx = 0; idx < todos.length; idx++) {
  //   const checkboxTag = document.createElement("input");
  //   checkboxTag.setAttribute("type", "checkbox");
  //   const labelTag = document.createElement("label");
  //   const liTag = document.createElement("li");
  //   liTag.appendChild(checkboxTag);
  //   liTag.append(labelTag);
  
  //   todosUl.push(liTag);
  // }
}
