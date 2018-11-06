import React, { Component } from 'react'

class MainForm extends Component {
  onAdd = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    if(form.text.value !== '' && form.name.value !== ''){
      const data = new FormData();
      data.append('todoText', form.text.value);
      data.append('todoDesc', form.name.value);

      this.props.addNewTodo(data);
    }
    form.reset();
  }

  render() {
    console.log(this.props.mappedState,'dfsdfs')
    return (
      <div>
        <h3> ToDo :</h3>
        <div>
          <form onSubmit={this.onAdd}>
          <label> Text: </label>
            <input name='text' type="text" /><br/>
          <label> Description: </label>
            <input name='name' type="text" /><br/>
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}



export default MainForm;