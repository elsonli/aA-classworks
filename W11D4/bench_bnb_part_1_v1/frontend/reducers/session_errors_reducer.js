import * as SessionActions from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_ERRORS:
      return action.errors
    case SessionActions.RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;