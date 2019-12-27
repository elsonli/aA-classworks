import { connect } from "react-redux";
import TodoList from "./todo_list";
import * as Selectors from "../../reducers/selectors";
import * as TodoActions from "../../actions/todo_actions";
import * as ErrorActions from "../../actions/error_actions";

const mapStateToProps = (state) => ({
  todos: Selectors.allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(TodoActions.receiveTodo(todo)),
  removeTodo: (todo) => dispatch(TodoActions.removeTodo(todo)),
  updateTodo: (todo) => dispatch(TodoActions.updateTodo(todo)),
  fetchTodos: () => dispatch(TodoActions.fetchTodos()),
  createTodo: (todo) => dispatch(TodoActions.createTodo(todo)),
  receiveErrors: (errors) => dispatch(ErrorActions.receiveErrors(errors)),
  clearErrors: () => dispatch(ErrorActions.clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);