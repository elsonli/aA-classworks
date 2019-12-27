import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../reducers/errors_reducer";

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}