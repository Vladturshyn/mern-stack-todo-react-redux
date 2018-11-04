import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import ContainerForm from './containers/ContainerForm'
import ContainerTodos from './containers/ContainerTodos';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ContainerForm />
          <ContainerTodos />
        </div>
      </Provider>
    );
  }
}

export default App;
