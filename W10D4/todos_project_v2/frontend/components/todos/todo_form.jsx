import React from "react";
import { receiveTodo } from "../../actions/todo_actions";
import * as Util from "../../util/util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.defaultState = Object.assign({}, this.state);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle(event) {
    event.preventDefault()
    this.setState({
      title: event.target.value
    });
  }

  updateBody(event) {
    event.preventDefault();
    this.setState({
      body: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    const newTodo = {
      id: Util.uniqueId(),
      title: this.state.title,
      body: this.state.body
    }
    this.props.store.dispatch(receiveTodo(newTodo));
    this.setState(this.defaultState);
    console.log(this.props.store.getState());
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>Title
          <input
            type="text"
            value={this.state.title}
            placeholder="Buy milk"
            onChange={this.updateTitle}/>
        </label>
        <br/>
        <label>Body
          <input
            type="text"
            value={this.state.body}
            placeholder="Whatever is on sale!"
            onChange={this.updateBody}/>
        </label>
        <br/>
        <input type="submit" value="Create Todo!"/>
      </form>
    )
  }
}

export default TodoForm;