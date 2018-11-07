import * as actionTypes from './actionTypes';

const apiUrl = '/api/';

// delete todo
export const deleteTodo = todo => {
  return dispatch => {
    dispatch(deleteTodoRequest(todo));
    return fetch(apiUrl + todo._id, { method: 'DELETE' }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteTodoSuccess(data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(deleteTodoFailed(error));
        });
      }
    });
  };
};

export const deleteTodoRequest = todo => {
  return {
    type: actionTypes.DELETE_TODO_REQUEST,
    todo,
  };
};

export const deleteTodoSuccess = message => {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    message: message,
  };
};

export const deleteTodoFailed = error => {
  return {
    type: actionTypes.DELETE_TODO_FAILED,
    error,
  };
};
export const showDeleteModal = todoToDelete => {
  return {
    type: actionTypes.SHOW_DELETE_MODAL,
    todo: todoToDelete,
  };
};

export const hideDeleteModal = () => {
  return {
    type: actionTypes.HIDE_DELETE_MODAL,
  };
};
