import * as APIUtil from "../util/todo_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

// Action Type Constants
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// Action Creators
export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
}

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
}

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo
  }
}

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    todo: todo
  }
}

// Thunk Action Creators
// Calling these functions creates another function that takes in a dispatch,
// called with the store's dispatch function when it passes through the thunk
// (called "immediately", but can be delayed with setTimeout or setInterval)
export const fetchTodos = () => (dispatch) => {
  const fetchedTodos = APIUtil.fetchTodos();
  fetchedTodos.then(res => dispatch(receiveTodos(res)));
  return fetchedTodos;
}

export const createTodo = (todo) => (dispatch) => {
  const createdTodo = APIUtil.createTodo(todo);
  createdTodo.then(
    res => {
      dispatch(clearErrors());
      dispatch(receiveTodo(res));
    },
    err => dispatch(receiveErrors(err))
  );
  return createdTodo;
}