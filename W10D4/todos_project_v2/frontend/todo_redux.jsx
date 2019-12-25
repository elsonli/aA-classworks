import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

// Window Testing
import * as Actions from "./actions/todo_actions";

// Document Ready Callback
document.addEventListener("DOMContentLoaded", () => {
  
  // Window Testing
  window.store = configureStore;
  window.RECEIVE_TODO = Actions.RECEIVE_TODO;
  window.RECEIVE_TODOS = Actions.RECEIVE_TODOS;
  window.receiveTodo = Actions.receiveTodo;
  window.receiveTodos = Actions.receiveTodos;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1>, root);
});