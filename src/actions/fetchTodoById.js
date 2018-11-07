import * as actionTypes from './actionTypes';

const apiUrl = '/api/';

//Fetch todo by Id
export const fetchTodoById = todoId => {
  return dispatch => {
    dispatch(fetchTodoRequest());
    return fetch(apiUrl + todoId).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchTodoSuccess(data.todo[0], data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchTodoFailed(error));
        });
      }
    });
  };
};

export const fetchTodoRequest = () => {
  return {
    type: actionTypes.FETCH_TODO_REQUEST,
  };
};

export const fetchTodoSuccess = (todo, message) => {
  return {
    type: actionTypes.FETCH_TODO_SUCCESS,
    todo: todo,
    message: message,
    receivedAt: Date.now,
  };
};

export const fetchTodoFailed = error => {
  return {
    type: actionTypes.FETCH_TODO_FAILED,
    error,
  };
};
