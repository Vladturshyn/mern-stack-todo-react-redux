import { ADD_NEW_TODO_REQUEST, 
         ADD_NEW_TODO_REQUEST_SUCCESS, 
         ADD_NEW_TODO_REQUEST_FAILED } from '../actions/actionTypes';
import { FETCH_TODOS_REQUEST, 
         FETCH_TODOS_SUCCESS, 
         FETCH_TODOS_FAILED } from '../actions/actionTypes';
import { DELETE_TODO_REQUEST, 
         DELETE_TODO_SUCCESS, 
         DELETE_TODO_FAILED } from '../actions/actionTypes';

const initialState = {
    todos: [],
    todo: null,
    isFetching: false,
    error: null,
    successMsg: null,
    newTodo: null,
    todoToDelete: null,
    showDeleteModal: false
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
        case DELETE_TODO_REQUEST:
          return {
            ...state,
            todos: state.todos,
            todo: null,
            isFetching: true,
            error: null,
            successMsg: null,
            todoToDelete: action.todo,
            newTodo: null
        }
        case DELETE_TODO_SUCCESS:
          const filteredTodos = state.todos.filter((todo) => todo._id !== state.todoToDelete._id)
          return {
            ...state,
            todos: filteredTodos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg: action.message,
            todoToDelete: null,
            newTodo: null
          }
        case DELETE_TODO_FAILED:
          return {
            ...state,
            todos: state.todos,
            todo: null,
            isFetching: false,
            error: action.error,
            successMsg: null,
            todoToDelete: null,
            newTodo: null
          }
        case 'SHOW_DELETE_MODAL':
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: true,
            todoToDelete: action.todo,
            newTodo: null
          }
        case 'HIDE_DELETE_MODAL':
              return {
                ...state,
                todos: state.todos,
                todo:null,
                isFetching: false,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                todoToDelete: null,
                newTodo: null
              }
        default:
            return state;
    }    
}