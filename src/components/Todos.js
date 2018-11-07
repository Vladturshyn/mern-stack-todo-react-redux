import React, { Component } from 'react';
import { Link } from 'react-router';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

export default class Todos extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }
  showDeleteModal(todoToDelete) {
    this.props.showDeleteModal(todoToDelete);
  }
  showEditModal(todoToEdit) {
    this.props.showEditModal(todoToEdit);
  }

  render() {
    const todoState = this.props.mappedState;
    const todos = todoState.todos;
    return (
      <div>
        <hr />
        <div>
          <h3>Todos</h3>
          {!todos && todoState.isFetching && <p>Loading todos....</p>}
          {todos.length <= 0 && !todoState.isFetching && (
            <p>No Todos Available. Add A Todo to List here.</p>
          )}
          {todos && todos.length > 0 && !todoState.isFetching && (
            <table style={{ border: '2px solid #2e8b57' }}>
              <thead>
                <tr>
                  <th>Todo</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, i) => (
                  <tr key={i}>
                    <td>{todo.todoText}</td>
                    <td style={{ border: '2px solid #2e8b57' }}>
                      <button onClick={() => this.showEditModal(todo)}>
                        edit
                      </button>
                    </td>
                    <td style={{ border: '2px solid #2e8b57' }}>
                      <button onClick={() => this.showDeleteModal(todo)}>
                        delete
                      </button>
                    </td>
                    {/* viwe details */}
                    <td>
                      <Link to={`/${todo._id}`}>View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <DeleteModal todoData={this.props} />
        <EditModal todoData={this.props} />
      </div>
    );
  }
}
