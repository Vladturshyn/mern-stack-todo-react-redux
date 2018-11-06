import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ContainerMainForm from './containers/ContainerMainForm';
import ContainerTodos from './containers/ContainerTodos';
import ContainerTodoById from './containers/ContainerTodoById';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ContainerMainForm />
          <ContainerTodos />
          <ContainerTodoById />
        </div>
      </Provider>
    );
  }
}

export default App;
