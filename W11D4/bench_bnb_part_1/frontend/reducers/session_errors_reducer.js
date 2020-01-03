import * as SessionAPIUtil from "../util/session_api_util";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionAPIUtil.RECEIVE_ERRORS:
      return action.errors
    case SessionAPIUtil.RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;