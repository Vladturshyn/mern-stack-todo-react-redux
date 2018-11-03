import React, { Component } from 'react'

class Form extends Component {
  onAdd = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    if(form.name.value !== '' && form.text.value !== ''){
      const data = {
        name: form.name.value,
        text: form.text.value
      }
      this.props.addNewTodo(data);
    }
    form.reset();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3> ToDo :</h3>
        <div>
          <form onSubmit={this.onAdd}>
          <label>Name: </label>
            <input name='name' type="text" /><br/>
          <label>Text: </label>
            <input name='text' type="text" /><br/>
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}



export default Form;