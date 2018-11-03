import { ADD_NEW_TODO_REQUEST, 
         ADD_NEW_TODO_REQUEST_SUCCESS, 
         ADD_NEW_TODO_REQUEST_FAILED } from './actionTypes';

const initialState = {
    todos: [],
    todo: null,
    isFetching: false,
    error: null,
    successMsg: null,
    newTodo: null
}

export const newtodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO_REQUEST:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg: null,
            newTodo: action.todo
          }

        case ADD_NEW_TODO_REQUEST_FAILED:
          return {
            ...state,
            todos: state.todos,
            todo: null,
            isFetching: true,
            error: action.error,
            successMsg: null,
            newTodo: null
          }

        case ADD_NEW_TODO_REQUEST_SUCCESS:
          const nextState =  {
            ...state,
            todos: [...state.todos, action.todo],
            todo: null,
            isFetching: false,
            error: null,
            successMsg: action.message,
            newTodo: action.todo
          }
          return nextState;

        default:
            return state;
    }    
}