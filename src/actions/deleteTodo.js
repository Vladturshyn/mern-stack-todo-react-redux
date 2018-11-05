import { DELETE_TODO_REQUEST, 
         DELETE_TODO_SUCCESS, 
         DELETE_TODO_FAILED } from '../actions/actionTypes';

const apiUrl = "/api/";

export const deleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(deleteTodoRequest(todo));
        return fetch(apiUrl + todo._id ,{method:'DELETE'})
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                    dispatch(deleteTodoSuccess(data.message));
                    })
                }else{
                    response.json().then(error => {
                    dispatch(deleteTodoFailed(error));
                    })
                }
            })
    }
}

export const deleteTodoRequest = (todo) => {
    return {
      type: DELETE_TODO_REQUEST,
      todo
    }
 }
 
export const deleteTodoSuccess = (message) => {
    return {
      type: DELETE_TODO_SUCCESS,
      message:message
    }
}
 
export const deleteTodoFailed = (error) => {
    return {
      type: DELETE_TODO_FAILED,
      error
    }
}
export const showDeleteModal = (todoToDelete) => {
    return {
      type:'SHOW_DELETE_MODAL',
      todo:todoToDelete
    }
  }
  
  export const hideDeleteModal = () => {
    return {
      type:'HIDE_DELETE_MODAL'
    }
  }