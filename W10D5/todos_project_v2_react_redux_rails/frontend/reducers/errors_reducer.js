export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

const errorsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = Object.assign({}, prevState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState[errors] = action.errors.slice();
      return newState;
    case CLEAR_ERRORS:
      newState[errors] = [];
      return newState;
    default:
      return prevState;
  }
}

export default errorsReducer;