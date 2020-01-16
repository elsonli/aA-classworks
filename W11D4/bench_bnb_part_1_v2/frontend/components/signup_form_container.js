import { connect } from "react-redux";
import SessionForm from "./session_form";
import * as SessionActions from "../actions/session_actions";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Sign Up",
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(SessionActions.userSignup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);