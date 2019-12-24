// Phase 1
class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};
  }

  getState() {
    return Object.assign({}, this.state);
  }
}

// Phase 2 - Reducers and Actions (Run in Chrome console)
let state = {
  user: "Ronil",
  role: "Student"
};

const userAction = {
  type: "UPDATE_USER",
  user: "Ronil Bhatia"
}

const roleAction = {
  type: "UPDATE_ROLE",
  role: "Instructor"
}

const userRoleAction = {
  type: "UPDATE_USER_AND_ROLE",
  user: "Ronil Bhatia",
  role: "Instructor"
}

const userReducer = (prevState, action) => {
  Object.freeze(prevState);
  const newState = Object.assign({}, prevState);
  switch (action.type) {
    case "UPDATE_USER":
      newState.user = action.user;
      return newState;
    default:
      return newState;
  }
}

const roleReducer = (prevState, action) => {
  Object.freeze(prevState);
  const newState = Object.assign({}, prevState);
  switch (action.type) {
    case "UPDATE_ROLE":
      newState.role = action.role;
      return newState;
    default:
      return newState;
  }
}

console.log(userReducer(state, userAction)); // => { user: "Ronil Bhatia", role: "Student" }
console.log(roleReducer(state, roleAction)); // => { user: "Ronil", role: "Instructor" }
console.log(userReducer(state, userRoleAction)) // => { user: "Ronil", role: "Student" }
console.log(roleReducer(state, userRoleAction)) // => { user: "Ronil", role: "Student" }

// Phase 2 - Combining Reducers (Run in Chrome console)
const combineReducers = (reducersObj) => (prevState, action) => {
  Object.freeze(prevState);
  const newState = Object.assign({}, prevState);
  const prevStateKeys = Object.keys(prevState);
  for (const key of prevStateKeys) {
    const oldValue = prevState[key];
    const newValue = reducersObj[key](oldValue, action);
    newState[key] = newValue;
  }
  return newState;
}

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch (action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

const myNoisyAction = {
  type: "noisy action",
  noise: "Car alarm"
};

const myInconsequentialAction = {
  type: "a type no one cares about",
  data: {
    thisThing: "will not get used anyway"
  }
};

const myInitialState = {
  noise: "peace and quiet"
};

const myRootReducer = combineReducers({
  noise: myNoiseReducer,
});

// The first time you call `myRootReducer` with `myInconsequentialAction`, it
// returns the initial state. This is because the only reducer, `myNoiseReducer`,
// doesn't respond to that action type. When we invoke it with `newState` and
// `myNoisyAction`, however, the `noise` key is modified because `myNoiseReducer`
// returns something other than its `prevState` for the `"noisy action"` action
// type. When we invoke the `rootReducer`, with `myInconsequentialAction` the
// second time, the `noise` property doesn't revert back to it's default value,
// it just doesn't change.
let newState = myRootReducer(myInitialState, myInconsequentialAction);
console.log(newState); // => { noise: "peace and quiet" }
newState = myRootReducer(newState, myNoisyAction);
console.log(newState); // => { noise: "Car alarm" }
myRootReducer(newState, myInconsequentialAction); // => { noise: "Car alarm" }