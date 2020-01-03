import * as SessionAPIUtil from "../util/session_api_util";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionAPIUtil.RECEIVE_CURRENT_USER:    
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  };
};

export default usersReducer;