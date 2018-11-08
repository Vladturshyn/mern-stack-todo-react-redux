import React, { Component } from 'react';

export default class TodoEditForm extends Component {
  submitEditTodo = e => {
    e.preventDefault();
    const editForm = document.getElementById('EditTodoForm');
    if (editForm.text.value !== '') {
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('todoText', editForm.name.value);
      data.append('todoDesc', editForm.text.value);
      this.props.editTodo(data);
    }
  };
  render() {
    return (
      <div>
        <form id="EditTodoForm" onSubmit={this.submitEditTodo}>
          <label> TodoText </label>
          <input
            name="text"
            defaultValue={this.props.todoData.todoText}
            type="text"
          />
          <br />
          <label> TodoDesc: </label>
          <input
            name="name"
            defaultValue={this.props.todoData.todoDesc}
            type="text"
          />
          <br />
          <input
            type="hidden"
            defaultValue={this.props.todoData._id}
            name="id"
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
