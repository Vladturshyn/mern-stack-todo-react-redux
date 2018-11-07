import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class DeleteModal extends Component {
  closeDeleteModal(){
    this.props.todoData.hideDeleteModal();
  }
  cofirmDeleteTodo(){
    this.props.todoData.deleteTodo(this.props.todoData.mappedState.todoToDelete);
  }

    render() {
        const todoState = this.props.todoData.mappedState;
      return (
      <div>
        <Popup
        open={this.props.todoData.mappedState.showDeleteModal}
        onClose={this.closeDeleteModal.bind(this)}
        >
          {close => (
              <div>
                <div> Modal Title </div>
                <div>
                {todoState.todoToDelete && !todoState.error && !todoState.isFetching &&
            <span>
            Are you sure you want to delete this todo <strong>{todoState.todoToDelete.todoText} </strong> ?
            </span>
            }
            {todoState.todoToDelete && todoState.error &&
            <span>
            Failed. <strong>{todoState.error} </strong>
            </span>
            }
            {todoState.todoToDelete && !todoState.error && todoState.isFetching &&
            <span>
                    <strong>Deleting.... </strong>
                </span>
            }
            {!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
            <span>
                    Todo <strong>{todoState.successMsg} </strong>
            </span>
            }{!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
              <span>
                      Todo <strong>{todoState.successMsg} </strong>
              </span>
              }
              {!todoState.successMsg && !todoState.isFetching &&
            <div>
            <button onClick={this.cofirmDeleteTodo.bind(this)}>Yes</button>
            <button onClick={this.closeDeleteModal.bind(this)}>No</button>
            </div>
            }
            {todoState.successMsg && !todoState.isFetching &&
            <button onClick={this.closeDeleteModal.bind(this)}>Close</button>
            }
                  <button
                    className="button"
                    onClick={() => {
                      this.closeDeleteModal()
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
      </Popup>
    </div>
    )
  }
}
