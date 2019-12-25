import { connect } from "react-redux";
import TodoList from "./todo_list";
import * as Selectors from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  todos: Selectors.allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);