import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import ContainerForm from './containers/ContainerForm'


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerForm />
      </Provider>
    );
  }
}

export default App;
