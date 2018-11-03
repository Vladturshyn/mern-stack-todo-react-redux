const apiUrl = "/api/";

// создали явный генератор действий для создания новой todo

export const addNewTodo = (todo) => {
    return (dispatch) => {
        dispatch(addNewTodoRequest(todo));
        return fetch(apiUrl, {mathod: 'POST', body: todo})
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
      type: 'ADD_NEW_TODO_REQUEST',
      todo
    }
}

export const addNewTodoRequestSuccess = (todo,message) => {
    return {
      type: 'ADD_NEW_TODO_REQUEST_SUCCESS',
      todo:todo,
      message:message
    }
}

export const addNewTodoRequestFailed = (error) => {
    return {
      type: 'ADD_NEW_TODO_REQUEST_FAILED',
      error
    }
}