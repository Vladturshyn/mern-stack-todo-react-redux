import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoById from '../components/TodoById'
import {fetchTodoById} from '../actions/fetchTodoById'

class ContainerTodoById extends Component {
    render() {
        return (
        <div>
            <TodoById state={this.props.state} fetchTodoById={this.props.fetchTodoById} />
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
        fetchTodoById: todoId => dispatch(fetchTodoById(todoId))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ContainerTodoById);