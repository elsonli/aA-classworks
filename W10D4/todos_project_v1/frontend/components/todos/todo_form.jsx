import React from 'react';
import { todosReducer } from '../../reducers/todos_reducer';
// import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            tags: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.updateTitle.bind(this)}/>
                </label>
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody.bind(this)} />
                </label>
                <input type="submit" value="Create Todo" />
            </form>
        )
    }

    handleSubmit (e) {
        e.preventDefault();
        const todoAction = this.props.receiveTodo({
                        id: this.props.uniqueId(),
                        title: this.state.title,
                        body: this.state.body
                    });
        todosReducer(store, todoAction);  
        this.setState({
            title: '',
            body: ''
        })     
    }

    updateTitle(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    updateBody(e) {
        e.preventDefault();
        this.setState({
            body: e.target.value
        })
    }
}

export default TodoForm;