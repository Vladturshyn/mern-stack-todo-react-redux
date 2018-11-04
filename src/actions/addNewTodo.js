import { ADD_NEW_TODO_REQUEST, 
         ADD_NEW_TODO_REQUEST_SUCCESS, 
         ADD_NEW_TODO_REQUEST_FAILED } from './actionTypes';

const apiUrl = "http://localhost:3001/api";

// Create an action generator to create a new todo
// Add New ToDo
export const addNewTodo = (todo) => {
    return (dispatch) => {
        dispatch(addNewTodoRequest(todo));
        return fetch(apiUrl,{method: 'POST', body: todo})
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
      type:'FETCH_TODOS_REQUEST'
    }
}
  
export const fetchTodosSuccess = (todos,message) => {
    return {
      type: 'FETCH_TODOS_SUCCESS',
      todos: todos,
      message: message,
      receivedAt: Date.now
    }
}

export const fetchTodosFailed = (error) => {
    return {
      type:'FETCH_TODOS_FAILED',
      error
    }
}