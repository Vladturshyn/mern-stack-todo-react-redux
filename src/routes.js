import React from 'react';
import { Route } from 'react-router';

import ContainerMainForm from './containers/ContainerMainForm';
import ContainerTodos from './containers/ContainerTodos';
import ContainerTodoById from './containers/ContainerTodoById';

export default (
  <div>
    <Route path="/todos" component={ContainerTodos} />
    <Route path="/" component={ContainerMainForm} />
    <Route path="/:id" component={ContainerTodoById} />
  </div>
);
