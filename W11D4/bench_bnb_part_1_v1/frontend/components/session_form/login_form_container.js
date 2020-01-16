import { connect } from "react-redux";
import SessionForm from "./session_form";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "login",
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(SessionActions.login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);