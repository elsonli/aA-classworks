import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from "./todo_form";
import { uniqueId } from '../../util/util';

class TodoList extends React.Component {

    render () {
        return (
            <div>
                <ul>
                {
                    this.props.todos.map(todo => {
                        return <TodoListItem todo={todo} key={todo.id} />
                    })
                }
                </ul>
                <TodoForm uniqueId={uniqueId} receiveTodo={this.props.receiveTodo}/>
            </div>
        )
    }
    
    componentDidMount() {
        this.props.fetchTodos()
    }
}

export default TodoList;




