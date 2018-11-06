import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import TodoEditForm from './TodoEditForm'


export default class EditModal extends Component {
    closeEditModal(){
        this.props.props.hideEditModal();
    }
  render() {
    const editTodo = this.props.props.state.todoReducer.todoToEdit;
    const todoState = this.props.props.state.todoReducer;
    return (
      <div>
        <Popup
          open={this.props.props.state.todoReducer.showEditModal}
          onClose={this.closeEditModal.bind(this)}
          >
            {close => (
              <div>
            <h3>Edit Your Todo</h3>
            {editTodo && <TodoEditForm todoData={editTodo} editTodo={this.props.props} />}
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
