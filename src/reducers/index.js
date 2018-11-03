import { combineReducers } from 'redux'
import { ADD, SHOW} from '../actions/index'

function reduserADD(state = [], action) {
    switch (action.type) {
      case ADD:
        return [...state, action.text]
      case SHOW:
        return [...state]
      default:
        return state
    }
  }
  

const combineReducerADD = combineReducers({
    reduserADD
})
  
  export default combineReducerADD;