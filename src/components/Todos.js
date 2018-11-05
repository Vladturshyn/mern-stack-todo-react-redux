import React, { Component } from 'react'
import DeleteModal from './DeleteModal'
//import Popup from 'reactjs-popup'


export default class Todos extends Component {
  componentWillMount(){
    this.props.fetchTodos();
  }
  showDeleteModal(todoToDelete){
    this.props.showDeleteModal(todoToDelete);
  }

  render() {
    //console.log(this.props.state.todoReducer.showDeleteModal)
    const todoState = this.props.state.todoReducer;
    const todos = todoState.todos;
    // const editTodo = todoState.todoToEdit;
    // console.log(this.props.state.todoReducer.todoToDelete);
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
      </div>
    )
  }
}
