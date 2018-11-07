import { connect } from 'react-redux';
import TodoById from '../components/TodoById';
import { fetchTodoById } from '../actions/fetchTodoById';

const mapStateToProps = state => {
  return {
    mappedState: state.todoReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoById: todoId => dispatch(fetchTodoById(todoId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoById);
