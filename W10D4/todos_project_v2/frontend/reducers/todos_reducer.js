import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

// Default State
const defaultState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (prevState = defaultState, action) => {
  Object.freeze(prevState);
  let newState;
  switch (action.type) {
    case RECEIVE_TODO:
      newState = Object.assign({}, prevState);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      newState = {};
      for (const todo of action.todos) {
        newState[todo.id] = todo;
      }
      return newState;
    default:
      return prevState;
  }
};

export default todosReducer;