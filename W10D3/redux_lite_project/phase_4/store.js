class Store {
  // Phase 3 - Subscribing to the Store
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer({}, { type: "DEFAULT_TYPE" });
    this.subscriptions = [];
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

  dispatch(action) {
    const nextState = this.rootReducer(this.state, action);
    this.state = nextState;
    this.subscriptions.forEach(subscription => {
      subscription();
    })
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
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

// Phase 4 Testing
const actionCreator1 = value => ({
  type: "add",
  value
});

const actionCreator2 = value => ({
  type: "subtract",
  value
});

const actionCreator3 = value => ({
  type: "no change",
  value
});

const numberReducer = (num = 0, action) => {
  switch (action.type) {
    case "add":
      return num + action.value;
    case "subtract":
      return num - action.value;
    default:
      return num;
  }
}

const rootReducer = combineReducers({
  number: numberReducer
});

const store = new Store(rootReducer);

store.getState() // => { number: 0 }

const announceStateChange = nextState => {
  console.log(`That action changed the state! Number is now ${nextState.number}`);
}

store.subscribe(announceStateChange);

store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 5"
store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 10"
store.dispatch(actionCreator2(7)); // => "That action changed the state! Number is now 3"
store.dispatch(actionCreator3(7)); // => Nothing should happen! The reducer doesn't do anything for type "no change"
store.dispatch(actionCreator1(0)) // => Nothing should happen here either. Even though the reducer checks for the "add" action type, adding 0 to the number won't result in a state change.

store.getState(); // => { number: 3 }