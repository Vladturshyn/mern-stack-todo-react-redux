import { ADD_NEW_TODO_REQUEST, 
         ADD_NEW_TODO_REQUEST_SUCCESS, 
         ADD_NEW_TODO_REQUEST_FAILED } from './actionTypes';

const apiUrl = "http://localhost:3000/api";

// Create an action generator to create a new todo
// Add New ToDo
export const addNewTodo = (todo) => {
    console.log(todo);
    return (dispatch) => {
        dispatch(addNewTodoRequest(todo));
        return fetch(apiUrl, {method:'POST', body:todo})
                .then(response => {
                    if(response.ok){
                        response.json().then(data => {
                            dispatch(addNewTodoRequestSuccess(data.todo, data.message))
                        })
                    }else{
                        response.json().then(error => {
                            dispatch(addNewTodoRequestFailed(error))
                        })
                    }
                })
    }
}

export const addNewTodoRequest = (todo) => {
    return {
      type: ADD_NEW_TODO_REQUEST,
      todo
    }
}

export const addNewTodoRequestSuccess = (todo,message) => {
    return {
      type: ADD_NEW_TODO_REQUEST_SUCCESS,
      todo: todo,
      message: message
    }
}

export const addNewTodoRequestFailed = (error) => {
    return {
      type: ADD_NEW_TODO_REQUEST_FAILED,
      error
    }
}