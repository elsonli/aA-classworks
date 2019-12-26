import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// Window Testing
import * as Actions from "./actions/todo_actions";
import * as Selectors from "./reducers/selectors";

// Document Ready Callback
document.addEventListener("DOMContentLoaded", () => {

  // Window Testing
  window.store = configureStore;
  window.RECEIVE_TODO = Actions.RECEIVE_TODO;
  window.RECEIVE_TODOS = Actions.RECEIVE_TODOS;
  window.receiveTodo = Actions.receiveTodo;
  window.receiveTodos = Actions.receiveTodos;
  window.allTodos = Selectors.allTodos;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={configureStore} />, root);
});