import React from 'react';

export default class TodoById extends React.Component {
  componentDidMount(){
    this.props.fetchTodoById("5be1be6afa451cdfdc7fb84c");
  }

  render(){
    const todoState = this.props.mappedState;
    return(
      <div>
       <h2>Todo Detail</h2>
         {!todoState.todo && todoState.isFetching &&
           <div>
             <p>Loading todo....</p>
           </div>}
       {todoState.todo && !todoState.isFetching &&
         <div>
           <h3>{todoState.todo.todoText}</h3>
           <p>{todoState.todo.todoDesc}</p>
         </div>}
      </div>
    );
  }
}
