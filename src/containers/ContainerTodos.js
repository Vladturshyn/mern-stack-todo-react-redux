import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { fetchTodos } from '../actions/fetchTodos';
import { deleteTodo, showDeleteModal, hideDeleteModal } from '../actions/deleteTodo';

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
       hideDeleteModal: ()=>(dispatch(hideDeleteModal()))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerTodos);
