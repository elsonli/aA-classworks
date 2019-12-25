import React from "react";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo, idx) => <TodoListItem todo={todo} key={idx} />)
      }
    </ul>
  )
}

export default TodoList;