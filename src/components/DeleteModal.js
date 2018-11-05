import React, { Component } from 'react'
import Popup from 'reactjs-popup'

export default class DeleteModal extends Component {
    
      hideDeleteModal(){
        this.props.mappedhideDeleteModal();
      }
    
      showDeleteModal(todoToDelete){
        this.props.mappedshowDeleteModal(todoToDelete);
      }
    
      cofirmDeleteTodo(){
        this.props.mappedDeleteTodo(this.props.mappedTodoState.todoToDelete);
      }

    render() {
        const a = this.props.state.todoReducer.showDeleteModal;
      return (
      <div>
        <Popup trigger={a} modal>

            <h1 id="contained-modal-title">Delete Your Book</h1>
            <div>
            {/* {todoState.todoToDelete && !todoState.error && !todoState.isFetching &&
            <span bsStyle="warning">
            Are you sure you want to delete this todo <strong>{todoState.todoToDelete.todoText} </strong> ?
            </span>
            }
            {todoState.todoToDelete && todoState.error &&
            <span bsStyle="warning">
            Failed. <strong>{todoState.error} </strong>
            </span>
            }

            {todoState.todoToDelete && !todoState.error && todoState.isFetching &&
            <span bsStyle="success">
                    <strong>Deleting.... </strong>
                </span>
            }

            {!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
            <span bsStyle="success">
                    Todo <strong>{todoState.successMsg} </strong>
            </span>
            }
            </div>
            <div>
            {!todoState.successMsg && !todoState.isFetching &&
            <div>
            <button onClick={this.cofirmDeleteTodo}>Yes</button>
            <button onClick={this.hideDeleteModal}>No</button>
            </div>
            }
            {todoState.successMsg && !todoState.isFetching &&
            <button onClick={this.hideDeleteModal}>Close</button>
            } */}
        </div>
     </Popup>
    </div>
    )
  }
}
