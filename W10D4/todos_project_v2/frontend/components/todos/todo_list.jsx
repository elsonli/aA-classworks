import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map((todo, idx) => {
            return <TodoListItem
              key={idx}
              todo={todo}
              store={store}
              removeTodo={props.removeTodo} />
          })
        }
      </ul>
      <TodoForm store={store} receiveTodo={props.receiveTodo} />
    </div>
  )
}

export default TodoList;