import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.scss';

class MainForm extends Component {
  onAdd = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    if (form.todoText.value !== '' && form.todoDesc.value !== '') {
      const data = new FormData();
      data.append('todoText', form.todoText.value);
      data.append('todoDesc', form.todoDesc.value);

      this.props.addNewTodo(data);
    }
    form.reset();
  };

  render() {
    return (
      <div>
        <div className="header">
          <Link to={`/`}> ADD TODO </Link>
          <Link to={`/todos`}> ALL TODOS</Link>
        </div>
        <hr />
        <div className="mainForm-wrap">
        <h3>ADD NEW TODO :</h3>
          <form onSubmit={this.onAdd}>
            <div className="mainForm-border">
              <label> TodoText: </label>
              <input name="todoText" type="text" />
              <br />
              <label> TodoDesc: </label>
              <input name="todoDesc" type="text" />
              <br />
              <button type="submit" className="mainForm-btn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MainForm;
