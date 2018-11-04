import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/Form'
import {addNewTodo} from '../actions/addNewTodo'

class ContainerForm extends Component {
    render() {
        return (
        <div>
            <Form addNewTodo={this.props.addNewTodo} state={this.props.state}/>
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
        addNewTodo: (data)=>(dispatch(addNewTodo(data)))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ContainerForm);