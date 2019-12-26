// Action Type Constants
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

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