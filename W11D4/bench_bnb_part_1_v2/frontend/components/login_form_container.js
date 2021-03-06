import { connect } from "react-redux";
import SessionForm from "./session_form";
import * as SessionActions from "../actions/session_actions";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Log In",
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(SessionActions.userLogin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);