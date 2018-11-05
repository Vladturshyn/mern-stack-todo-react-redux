import React, { Component } from 'react'
//import DeleteModal from './DeleteModal'
import Popup from 'reactjs-popup'


export function DeleteModal() {
  return (
    <div>
      <Popup
        modal
      >
        <span> Modal content </span>
  </Popup>
    </div>
  )
}


export default class Todos extends Component {
  componentWillMount(){
    this.props.fetchTodos();
  }
  closeDeleteModal(){
    this.props.hideDeleteModal();
  }
  showDeleteModal(todoToDelete){
    this.props.showDeleteModal(todoToDelete);
  }
  cofirmDeleteTodo(){
    this.props.deleteTodo(this.props.state.todoReducer.todoToDelete);
  }

  render() {
    //console.log(this.props.state.todoReducer.showDeleteModal)
    const todoState = this.props.state.todoReducer;
    const todos = todoState.todos;
    // const editTodo = todoState.todoToEdit;
    // console.log(this.props.state.todoReducer.todoToDelete);
    return (
      <div>
        <Popup
        open={this.props.state.todoReducer.showDeleteModal}
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
            <button onClick={this.closeDeleteModal}>Close</button>
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
      <hr/>
      <div>
        <h3>Todos</h3>
        {!todos && todoState.isFetching && <p>Loading todos....</p>}
         {todos.length <= 0 && !todoState.isFetching && 
          <p>No Todos Available. Add A Todo to List here.</p>}
         {todos && todos.length > 0 && !todoState.isFetching &&
          <table style={{border: "2px solid #2e8b57" }}>
            <thead>
              <tr><th>Todo</th><th>Edit</th><th>Delete</th><th>View</th></tr>
            </thead>
            <tbody>
              {todos.map((todo,i) => 
                <tr key={i}>
                  <td>{todo.todoText}</td>
                    <td style={{border: "2px solid #2e8b57"}}><button onClick={() => this.showEditModal(todo)}>edit</button></td>
                    <td style={{border: "2px solid #2e8b57"}}><button onClick={() => this.showDeleteModal(todo)}>delete</button></td>
                    {/* viwe details */}
                    <td className="textCenter">View Details</td>
                </tr> )}
            </tbody>
          </table>} 
          </div>
      </div>
    )
  }
}
