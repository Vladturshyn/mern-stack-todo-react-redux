import React, { Component } from 'react'
import DeleteModal from './DeleteModal'
import TodoEditForm from './TodoEditForm'
import Popup from 'reactjs-popup'


export default class Todos extends Component {
  componentWillMount(){
    this.props.fetchTodos();
  }
  showDeleteModal(todoToDelete){
    this.props.showDeleteModal(todoToDelete);
  }
  showEditModal(todoToEdit){
    this.props.showEditModal(todoToEdit);
  }

  closeEditModal(){
      this.props.hideEditModal();
  }

 submitEditTodo=(e)=>{
   e.preventDefault();
   const editForm = document.getElementById('EditTodoForm');
   if(editForm.text.value !== ""){
     const data = new FormData();
     data.append('id', editForm.id.value);
    data.append('todoText', editForm.name.value);
     data.append('todoDesc', editForm.text.value);
     this.props.editTodo(data);
   }
 }

  render() {
    //console.log(this.props.state.todoReducer.showDeleteModal)
    const todoState = this.props.state.todoReducer;
    const todos = todoState.todos;
    const editTodo = this.props.state.todoReducer.todoToEdit;

    console.log(this.props.state.todoReducer.showEditModal);
    return (
      <div>
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
          <DeleteModal props={this.props}/>
          <Popup
          open={this.props.state.todoReducer.showEditModal}
          onClose={this.closeEditModal.bind(this)}
          >
            {close => (
              <div>
            <h3>Edit Your Todo</h3>
            {editTodo && <TodoEditForm todoData={editTodo} editTodo={this.submitEditTodo} />}
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
