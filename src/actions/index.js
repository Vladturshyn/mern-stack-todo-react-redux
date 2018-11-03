export const ADD = 'ADD';
export const SHOW = 'SHOW'

export function addTodo(text) {
    return { 
        type: ADD, 
        text 
    }
}
export function showTodo(text) {
    return {
        type: SHOW,
        text
    }
}