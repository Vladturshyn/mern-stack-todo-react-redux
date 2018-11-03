import { combineReducers } from 'redux'

const initialState = {
    todos:[],
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

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_TODO_REQUEST':
            return {
                ...state,
                todos: state.todos,
                todo: null,
                isFetching: true,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                todoToDelete: null,
                showEditModal: false,
                todoToEdit: null,
                newTodo: action.todo
        }

}

const combineReducerADD = combineReducers({
    todoReducer
})
  
export default combineReducerADD;