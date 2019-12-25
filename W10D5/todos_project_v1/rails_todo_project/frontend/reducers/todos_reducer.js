import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const initialState = {
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

export const todosReducer = (state = initialState, action) => {
    let nextState = {};
    switch(action.type) {
        case RECEIVE_TODOS:
            Object.freeze(state);
            const todos = action.todos;
            todos.forEach ((todo) => {
                nextState[todo.id] = todo
            })
            return nextState;
        case RECEIVE_TODO:
            Object.freeze(state);
            nextState = Object.assign({}, state);
            nextState[action.todo.id] = action.todo;
            return nextState;
        default:
            return state;
    }
}

window.todosReducer = todosReducer;