import React from "react";

const TodoDetailView = (props) => {


  <button onClick={() => {
    props.removeTodo(props.todo)
  }}>Delete</button>
};

export default TodoDetailView;