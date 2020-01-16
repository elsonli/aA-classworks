import * as SessionActions from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState);
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return oldState;
  };
};

export default usersReducer;