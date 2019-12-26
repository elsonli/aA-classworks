import React from "react";

const TodoListItem = (props) => {
  return (
    <li>
      {props.todo.title}
      <button onClick={() => {
          props.store.dispatch(props.removeTodo(props.todo))
        }
      }>Delete</button>
    </li>
  )
};

export default TodoListItem;