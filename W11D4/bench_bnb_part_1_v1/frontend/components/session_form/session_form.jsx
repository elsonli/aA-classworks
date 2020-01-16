import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(stateKey) {
    return (event) => {
      this.setState({
        [stateKey]: event.currentTarget.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const { formType } = this.props;

    if (this.props.currentUserId) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Link to={formType === "signup" ? "login" : "signup"}>{formType === "signup" ? "login" : "signup"}</Link>
        <ul>
          {
            this.props.errors.session.map((error, idx) => <li key={idx}>{error}</li>)
          }
        </ul>
        <h1>{formType}</h1>
        <form id="process-user" onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </label>
          <label>Password
            <input
              type="text"
              value={this.state.password}
              onChange={this.update("password")} />
          </label>
          <input type="submit" value={formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;