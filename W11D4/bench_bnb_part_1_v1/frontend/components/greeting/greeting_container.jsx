import { connect } from "react-redux";
import Greeting from "./greeting";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(SessionActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);