import * as SessionAction from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionAction.RECEIVE_CURRENT_USER:    
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  };
};

export default usersReducer;