import * as actionTypes from './actionTypes';

const apiUrl = "/api";

// Fetch all todos
// Returns a dispatcher function
// that dispatches an action at later time
// than it returns a promise
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        return fetch(apiUrl)
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                        dispatch(fetchTodosSuccess(data.todos,data.message));
                    })
                }else{
                    response.json().then(error => {
                        dispatch(fetchTodosFailed(error));
                    })
                }
            })
    }
}

export const fetchTodosRequest = () => {
    return {
      type: actionTypes.FETCH_TODOS_REQUEST
    }
}
  
export const fetchTodosSuccess = (todos,message) => {
    return {
      type: actionTypes.FETCH_TODOS_SUCCESS,
      todos: todos,
      message: message,
      receivedAt: Date.now
    }
}

export const fetchTodosFailed = (error) => {
    return {
      type: actionTypes.FETCH_TODOS_FAILED,
      error
    }
}