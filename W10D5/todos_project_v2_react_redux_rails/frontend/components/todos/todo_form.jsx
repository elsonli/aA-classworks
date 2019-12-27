import React from "react";
import * as Util from "../../util/util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      errors: []
    }
    this.defaultState = Object.assign({}, this.state);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleTitle(event) {
    event.preventDefault()
    this.setState({
      title: event.target.value
    });
  }

  handleBody(event) {
    event.preventDefault();
    this.setState({
      body: event.target.value
    });
  }

  handleDone(event) {
    event.preventDefault();
    this.setState({
      done: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: Util.uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: this.state.done
    }
    this.props.createTodo(newTodo)
      .then(
        (success) => this.setState(this.defaultState),
        (error) => this.setState({ errors: error.responseJSON })
      );
  }

  render() {
    let errors = (this.state.errors) ? this.state.errors : [];
    return (
      <div>
        <ul>
          {
            errors.map((error, idx) => <li key={idx}>{error}</li>)
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              placeholder="Buy milk"
              onChange={this.handleTitle}/>
          </label>
          <br/>
          <label>Body
            <input
              type="text"
              value={this.state.body}
              placeholder="Whatever is on sale!"
              onChange={this.handleBody}/>
          </label>
          <br/>
          <label>Done
            <select onChange={this.handleDone} value={this.state.done}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="Create Todo!"/>
        </form>
      </div>
    )
  }
}

export default TodoForm;