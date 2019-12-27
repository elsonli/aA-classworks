import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, idx) => {
              return <TodoListItem
                key={idx}
                todo={todo}
                store={store}
                removeTodo={this.props.removeTodo}
                updateTodo={this.props.updateTodo}
                receiveTodo={this.props.receiveTodo} />
            })
          }
        </ul>
        <TodoForm
          store={store}
          receiveTodo={this.props.receiveTodo}
          createTodo={this.props.createTodo} />
      </div>
    )
  }
}

export default TodoList;