import * as SessionActions from "../actions/session_actions";

const _defaultState = {
  id: null
};

const sessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState);
      nextState["id"] = action.user.id;
      return nextState;
    case SessionActions.LOGOUT_CURRENT_USER:
      return _defaultState;
    default:
      return oldState;
  };
};

export default sessionReducer;