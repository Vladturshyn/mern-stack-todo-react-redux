import React, { Component } from 'react'
import Popup from 'reactjs-popup'

export default class DeleteModal extends Component {
  closeDeleteModal(){
    this.props.props.hideDeleteModal();
  }
  cofirmDeleteTodo(){
    this.props.props.deleteTodo(this.props.props.state.todoReducer.todoToDelete);
  }

    render() {
        const todoState = this.props.props.state.todoReducer;
      return (
      <div>
        <Popup
        open={this.props.props.state.todoReducer.showDeleteModal}
        onClose={this.closeDeleteModal.bind(this)}
        >
          {close => (
              <div className="modal">
                <div className="header"> Modal Title </div>
                <div className="actions">
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
