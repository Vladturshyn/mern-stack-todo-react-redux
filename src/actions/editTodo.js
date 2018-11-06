import * as actionTypes from './actionTypes';

const apiUrl = "/api/";

// Edit todo
export const editTodo = (todo) => {
    return (dispatch) => {
        dispatch(editTodoRequest(todo));
        return fetch(apiUrl, {method:'put',body:todo})
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                    dispatch(editTodoSuccess(data.todo,data.message));
                    })
                }else{
                    response.json().then(error => {
                    dispatch(editTodoFailed(error));
                    })
                }
            })  
    } 
}

export const editTodoRequest = (todo) => {
    return {
      type: actionTypes.EDIT_TODO_REQUEST,
      todo
    }
}
 export const editTodoSuccess = (todo,message) => {
    return {
      type: actionTypes.EDIT_TODO_SUCCESS,
      todo:todo,
      message:message
    }
}

export const editTodoFailed = (error) => {
    return {
      type: actionTypes.EDIT_TODO_FAILED,
      error
    }
}

export const showEditModal = (todoToEdit) => {
    return {
      type: actionTypes.SHOW_EDIT_MODAL,
      todo:todoToEdit
    }
}
  
export const hideEditModal = () => {
    return {
      type: actionTypes.HIDE_EDIT_MODAL
    }
}