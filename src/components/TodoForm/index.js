import React, { Component } from 'react'

export default class Form extends Component {
  addTodo = (e)=>{
    e.preventDefault();
    const form = document.getElementById('addTodoForm');
    if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
        const data = {
          todoText: form.todoText.value,
          todoDesc: form.todoDesc.value
        }
        console.log(data)
        form.reset();
    }
  }
  render() {
    return (
      <form id="addTodoForm" onSubmit={this.addTodo}>
          <h3>Add Your Todo</h3>
        <div>
          <label>Todo: </label>
          <input
            type="text" 
            placeholder="Enter todo"
            name="todoText"
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text" 
            placeholder="Enter description"
            name="todoDesc"
          />
        </div>
         <button type="submit">Submit</button>
      </form>
    )
  }
}
