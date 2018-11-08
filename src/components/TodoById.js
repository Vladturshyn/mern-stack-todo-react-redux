import React from 'react';
import { Link } from 'react-router';

import './style.scss';

export default class TodoById extends React.Component {
  componentDidMount() {
    this.props.fetchTodoById(this.props.params.id);
  }

  render() {
    const todoState = this.props.mappedState;
    return (
      <div>
        <div className="header">
          <Link to={`/`}> ADD TODO </Link>
          <Link to={`/todos`}> ALL TODOS</Link>
        </div>
        <hr />
        <div className="todoDetail">
          <h3>Todo Detail :</h3>
          {!todoState.todo && todoState.isFetching && (
            <div>
              <p>Loading todo....</p>
            </div>
          )}
          {todoState.todo && !todoState.isFetching && (
            <div>
              <h3>{todoState.todo.todoText}</h3>
              <p>{todoState.todo.todoDesc}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
