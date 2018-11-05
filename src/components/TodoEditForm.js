import React from 'react';

const TodoEditForm = (props) => {
    return (
        <div>
            <form id="EditTodoForm" onSubmit={props.editTodo}>
                <label> Text: </label>
                <input type="hidden" defaultValue={props.todoData._id} name="id"/>
                <input name='text' defaultValue={props.todoData.todoText} type="text" /><br/>
                <label> Description: </label>
                <input name='name' defaultValue={props.todoData.todoDesc} type="text" /><br/>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
  }
  
  export default TodoEditForm;