import { connect } from "react-redux";
import * as Actions from "../../actions/todo_actions";
import TodoDetailView from "./todo_detail_view";

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(Actions.removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);