import * as SessionAPIUtil from "../util/session_api_util";

const _nullUser = { id: null }

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionAPIUtil.RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id });
    case SessionAPIUtil.LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  };
};

export default sessionReducer;