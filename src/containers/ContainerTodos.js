import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { fetchTodos } from '../actions/fetchTodos';
import { deleteTodo, showDeleteModal, hideDeleteModal } from '../actions/deleteTodo';
import { showEditModal,hideEditModal, editTodo } from '../actions/editTodo';

class ContainerTodos extends Component {
    render() {
        return (
        <div>
          <Todos 
            fetchTodos={this.props.fetchTodos} 
            state={this.props.state}
            deleteTodo={this.props.deleteTodo}
            showDeleteModal={this.props.showDeleteModal}
            hideDeleteModal={this.props.hideDeleteModal}
            showEditModal={this.props.showEditModal}
            hideEditModal={this.props.hideEditModal}
            editTodo={this.props.editTodo}
          />
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
    return {
        state: state
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchTodos: ()=>(dispatch(fetchTodos())),
       deleteTodo: (todoToDelete)=>(dispatch(deleteTodo(todoToDelete))),
       showDeleteModal: (todoToDelete)=>(dispatch(showDeleteModal(todoToDelete))),
       hideDeleteModal: ()=>(dispatch(hideDeleteModal())),
       showEditModal: (todoToEdit)=>(dispatch(showEditModal(todoToEdit))),
       hideEditModal: ()=>(dispatch(hideEditModal())),
       editTodo: todoToEdit => dispatch(editTodo(todoToEdit)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerTodos);
