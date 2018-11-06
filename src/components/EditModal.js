import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import TodoEditForm from './TodoEditForm'


export default class EditModal extends Component {
    closeEditModal(){
        this.props.todoData.hideEditModal();
    }
  render() {
    const editTodo = this.props.todoData.mappedState.todoToEdit;
    const todoState = this.props.todoData.mappedState;
    console.log(this.props.todoData.editTodo)
    return (
      <div>
        <Popup
          open={this.props.todoData.mappedState.showEditModal}
          onClose={this.closeEditModal.bind(this)}
          >
            {close => (
              <div>
            <h3>Edit Your Todo</h3>
            {editTodo && <TodoEditForm todoData={editTodo} editTodo={this.props.todoData.editTodo} />}
            {editTodo  && todoState.isFetching &&
              <span>
                <strong>Updating...... </strong>
              </span>
            }
            {editTodo && !todoState.isFetching && todoState.error &&
              <span>
                <strong>Failed. {todoState.error} </strong>
              </span>
            }
            {editTodo && !todoState.isFetching && todoState.successMsg &&
              <span>
                Book <strong> {editTodo.todoText} </strong>{todoState.successMsg}
              </span>
            }
              <div>
                <button onClick={this.closeEditModal.bind(this)}>Close</button>
              </div>
          </div>
            )} 
          </Popup>
      </div>
    )
  }
}
