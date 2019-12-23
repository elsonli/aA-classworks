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

// Phase 2 - Run in Chrome console
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

console.log(userReducer(state, userAction)); // => {user: "Ronil Bhatia", role: "Student"}
console.log(roleReducer(state, roleAction)); // => {user: "Ronil", role: "Instructor"}