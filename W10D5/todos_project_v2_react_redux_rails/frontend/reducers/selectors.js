export const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos);
  return todoKeys.map(key => state.todos[key]);
};