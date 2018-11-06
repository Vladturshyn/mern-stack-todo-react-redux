import React from 'react';

export default class Todo extends React.Component {
  componentDidMount(){
   this.props.fetchTodoById();
  }

  render(){
      console.log(this.props)
    const todoState = this.props.state.todoReducer;
    return(
      <div>
       <h2>Todo Detail</h2>
         {!todoState.todo && todoState.isFetching &&
           <div>
             <p>Loading todo....</p>
           </div>
         }
       {todoState.todo && !todoState.isFetching &&
         <div>
           <h3>{todoState.todo.todoText}</h3>
           <p>{todoState.todo.todoDesc}</p>
         </div>
       }
      </div>
    );
  }
}
