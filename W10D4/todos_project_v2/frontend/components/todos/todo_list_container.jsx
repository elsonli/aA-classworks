import { connect } from "react-redux";
import TodoList from "./todo_list";
import * as Selectors from "../../reducers/selectors";
import * as Actions from "../../actions/todo_actions";

const mapStateToProps = (state) => ({
  todos: Selectors.allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(Actions.receiveTodo(todo)),
  removeTodo: (todo) => dispatch(Actions.removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);