import { ADD_NEW_TODO_REQUEST, 
         ADD_NEW_TODO_REQUEST_SUCCESS, 
         ADD_NEW_TODO_REQUEST_FAILED } from '../actions/actionTypes';
import { FETCH_TODOS_REQUEST, 
         FETCH_TODOS_SUCCESS, 
         FETCH_TODOS_FAILED } from '../actions/actionTypes';

const initialState = {
    todos: [],
    todo: null,
    isFetching: false,
    error: null,
    successMsg: null,
    newTodo: null
}

export const todoReducer = (state = initialState, action) => {
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
          const nextState = {
            ...state,
            todos: [...state.todos, action.todo],
            todo: null,
            isFetching: false,
            error: null,
            successMsg: action.message,
            newTodo: action.todo
          }
          return nextState;

        case FETCH_TODOS_REQUEST:
          return {
            ...state,
            todos:[],
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
          }

        case FETCH_TODOS_SUCCESS:
          return {
            ...state,
            todos:action.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
          }

        case FETCH_TODOS_FAILED:
          return {
            ...state,
            todos:[],
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
          }

        default:
            return state;
    }    
}