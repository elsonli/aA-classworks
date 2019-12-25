import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from "./todo_form";
import { uniqueId } from '../../util/util';

export default (props) => {
    return (
        <div>
            <ul>
            {
                props.todos.map(todo => {
                    return <TodoListItem todo={todo} key={todo.id} />
                })
            }
            </ul>
            <TodoForm uniqueId={uniqueId} receiveTodo={props.receiveTodo}/>
        </div>
    )
}

