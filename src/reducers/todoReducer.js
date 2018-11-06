import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    todo: null,
    isFetching: false,
    error: null,
    successMsg: null,
    newTodo: null,
    todoToDelete: null,
    showDeleteModal: false,
    showEditModal: false,
    todoToEdit: null,
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_TODO_REQUEST:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg: null,
            newTodo: action.todo
          }

        case actionTypes.ADD_NEW_TODO_REQUEST_FAILED:
          return {
            ...state,
            todos: state.todos,
            todo: null,
            isFetching: true,
            error: action.error,
            successMsg: null,
            newTodo: null
          }

        case actionTypes.ADD_NEW_TODO_REQUEST_SUCCESS:
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

        case actionTypes.FETCH_TODOS_REQUEST:
          return {
            ...state,
            todos:[],
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
          }

        case actionTypes.FETCH_TODOS_SUCCESS:
          return {
            ...state,
            todos:action.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
          }

        case actionTypes.FETCH_TODOS_FAILED:
          return {
            ...state,
            todos:[],
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
          }

        case actionTypes.FETCH_TODO_REQUEST:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

        case actionTypes.FETCH_TODO_SUCCESS:
          return {
            ...state,
            todos: state.todos,
            todo:action.todo,
            isFetching: false,
            error: null,
            successMsg: action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

        case actionTypes.FETCH_TODO_FAILED:
          return {
            ...state,
            todos:[],
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

        case actionTypes.DELETE_TODO_REQUEST:
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

        case actionTypes.DELETE_TODO_SUCCESS:
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

        case actionTypes.DELETE_TODO_FAILED:
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

        case actionTypes.SHOW_DELETE_MODAL:
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

        case actionTypes.HIDE_DELETE_MODAL:
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

        case actionTypes.SHOW_EDIT_MODAL:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: action.todo,
            newTodo: null
          }

        case actionTypes.HIDE_EDIT_MODAL:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
            newTodo: null
          }

        case actionTypes.EDIT_TODO_REQUEST:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: action.todo,
            newTodo: null
          }
          
        case actionTypes.EDIT_TODO_SUCCESS:
          const updatedTodos = state.todos.map((todo) => {
            if(todo._id !== action.todo._id){
             //This is not the item we care about, keep it as is
              return todo;
            }
           //Otherwise, this is the one we want to return an updated value
            return { ...todo, ...action.todo }
          })
          return {
            ...state,
            todos: updatedTodos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: action.todo,
            newTodo: null
          }

        case actionTypes.EDIT_TODO_FAILED:
          return {
            ...state,
            todos: state.todos,
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: state.todoToEdit,
            newTodo: null
          }

        default:
            return state;
    }    
}