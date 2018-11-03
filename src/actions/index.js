export const ADD_NEW_TODO_REQUEST = 'ADD_NEW_TODO_REQUEST';

export const addNewTodoRequest = (todo) => {
    return {
      type: ADD_NEW_TODO_REQUEST,
      todo
    }
  }