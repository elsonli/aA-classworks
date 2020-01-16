import * as SessionActions from "../actions/session_actions";

const _nullUser = { id: null }

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id });
    case SessionActions.LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  };
};

export default sessionReducer;