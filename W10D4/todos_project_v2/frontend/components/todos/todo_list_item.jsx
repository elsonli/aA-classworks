import React from "react";

const TodoListItem = (props) => {
  const doneValue = props.todo.done ? "Undo" : "Done";
  return (
    <li>
      {props.todo.title}

      <button onClick={() => {
        props.removeTodo(props.todo)
      }}>Delete</button>
    
      <button onClick={() => {
        props.updateTodo(props.todo)
      }}>{doneValue}</button>
    </li>
  )
};

export default TodoListItem;