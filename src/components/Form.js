import React, { Component } from 'react'
import Show from './InputShow'

class Form extends Component {
  onAdd = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    const text = form.text.value;
    this.props.canChangeStore(text);
    form.reset();
  }

  render() {
    console.log()
    return (
      <div>
        <div>
          <form onSubmit={this.onAdd}>
            <input name='text' type="text" />
            <button type='submit'>SUBMIT</button>

            <Show data={this.props.propsFromStore} />
          </form>
        </div>
      </div>
    )
  }
}



export default Form;