// An action takes in the store's dispatch argument which will be used
// to dispatch the function action later on
const thunk = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
}

export default thunk;