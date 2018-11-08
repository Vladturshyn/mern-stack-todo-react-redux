import React from 'react';
import { Link } from 'react-router';

export default class TodoById extends React.Component {
  componentDidMount() {
    this.props.fetchTodoById(this.props.params.id);
  }

  render() {
    const todoState = this.props.mappedState;
    return (
      <div>
        <div>
          <Link to={`/`}>Home </Link>
          <Link to={`/todos`}> Todos</Link>
        </div>
        <hr/>
        <h2>Todo Detail</h2>
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
    );
  }
}
