import React, { Component } from 'react'
import ContainerForm from './containers/ContainerForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducerADD from './reducers'

let store = createStore(combineReducerADD)

class App extends Component {
  render() {
    console.log(store.getState())
    return (
    <Provider store={store}>
       <ContainerForm />
    </Provider>
    );
  }
}

export default App;
