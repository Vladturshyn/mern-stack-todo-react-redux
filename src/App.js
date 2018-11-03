import React, { Component } from 'react'
import ContainerForm from './containers/ContainerForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import combineReducerADD from './reducers'


class App extends Component {
  render() {
    return (
       <ContainerForm />
    );
  }
}

export default App;
