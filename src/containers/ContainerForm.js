import React, { Component } from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'
import {addTodo} from '../actions/index'

class ContainerForm extends Component {
  render() {
    return (
      <div>
        <Form 
            propsFromStore={this.props.propsFromStore}
            canChangeStore={this.props.canChangeStore}
        />
      </div>
    )
  }
}
const mapStateToProps = (store) => {
    return{
      propsFromStore: store.reduserADD
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
      canChangeStore: (text)=>{dispatch(addTodo(text))}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ContainerForm)
