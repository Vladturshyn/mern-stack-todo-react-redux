import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ContainerMainForm from './containers/ContainerMainForm';
import ContainerTodos from './containers/ContainerTodos';
import ContainerTodoById from './containers/ContainerTodoById';

export default (
  <Route path="/a" component={ContainerMainForm}>
    <IndexRoute component={ContainerTodos} />
    <Route path="/:id" component={ContainerTodoById} />
  </Route>
);
