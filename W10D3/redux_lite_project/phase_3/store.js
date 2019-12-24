class Store {
  // Phase 3 - Dispatch
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer({}, { type: "DEFAULT_TYPE" });
  }

  getState() {
    const newState = {};
    const stateKeys = Object.keys(this.state);
    for (const key of stateKeys) {
      if (this.state[key] !== null) {
        newState[key] = this.state[key];
      }
    }
    return newState;
  }

  // Phase 3 - Dispatch
  dispatch(action) {
    const nextState = this.rootReducer(this.state, action);
    this.state = nextState;
  }
}

// Phase 3 - Dispatch
const combineReducers = (reducersObj) => (prevState, action) => {
  Object.freeze(prevState);

  // Initialize a newState that contains ALL of the keys in the reducersObj
  // with the value contained in prevState, and null otherwise
  const newState = {};
  const reducersObjKeys = Object.keys(reducersObj);
  for (const key of reducersObjKeys) {
    newState[key] = prevState[key] || null;
  }

  // Same logic as combineReducers of Phase 2
  const prevStateKeys = Object.keys(prevState);
  for (const key of prevStateKeys) {
    const oldValue = prevState[key];
    const newValue = reducersObj[key](oldValue, action);
    newState[key] = newValue;
  }
  return newState;
}

// Phase 3 Testing
const userReducer = (oldUser = null, action) => {
  if (action.type === "new user") {
    return action.user;
  }
  return oldUser;
};

const rootReducer = combineReducers({
  user: userReducer
});

const store = new Store(rootReducer);

store.getState(); // => { users: null }

const action = {
  type: "new user",
  user: "Jeffrey Fiddler"
};

store.dispatch(action);
store.getState(); // => { user: "Jeffrey Fiddler" }