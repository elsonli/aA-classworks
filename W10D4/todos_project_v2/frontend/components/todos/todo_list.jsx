import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";
import * as Actions from "../../actions/todo_actions";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map((todo, idx) => <TodoListItem todo={todo} key={idx} />)
        }
      </ul>
      <TodoForm store={store} receiveTodo={Actions.receiveTodo} />
    </div>
  )
}

export default TodoList;