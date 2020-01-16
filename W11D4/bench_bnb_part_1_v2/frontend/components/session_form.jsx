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
  };

  update(field) {
    return event => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul>
        {
          errors.map(error => {
            return (
              <li>{ error }</li>
            );
          })
        }
      </ul>
    );
  };

  render() {
    const { formType, currentUserId } = this.props;

    if (currentUserId) return <Redirect to="/" />;

    const otherForm = (formType === "Sign Up") ? (
      <Link to="/login">Log In</Link>
    ) : (
      <Link to="/signup">Sign Up</Link>
    )
    return (
      <form onSubmit={ this.handleSubmit }>
        { this.renderErrors() }
        <h1>{ formType } or { otherForm }</h1>
        <label>
          Username:
          <input
            type="text"
            value={ this.state.username }
            onChange={ this.update("username") }/>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={ this.state.password }
            onChange={ this.update("password") }/>
        </label>
        <input type="submit" value={ formType }/>
      </form>
    );
  };
};

export default SessionForm;