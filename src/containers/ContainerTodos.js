import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { fetchTodos } from '../actions/fetchTodos';
import {
  deleteTodo,
  showDeleteModal,
  hideDeleteModal,
} from '../actions/deleteTodo';
import { showEditModal, hideEditModal, editTodo } from '../actions/editTodo';

const mapStateToProps = state => {
  return {
    mappedState: state.todoReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: todoToDelete => dispatch(deleteTodo(todoToDelete)),
    showDeleteModal: todoToDelete => dispatch(showDeleteModal(todoToDelete)),
    hideDeleteModal: () => dispatch(hideDeleteModal()),
    showEditModal: todoToEdit => dispatch(showEditModal(todoToEdit)),
    hideEditModal: () => dispatch(hideEditModal()),
    editTodo: todoToEdit => dispatch(editTodo(todoToEdit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
