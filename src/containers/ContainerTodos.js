import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {fetchTodos} from '../actions/fetchTodos';

class ContainerTodos extends Component {
    render() {
      return (
        <div>
          <Todos fetchTodos={this.props.fetchTodos} state={this.props.state}/>
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
      fetchTodos: ()=>(dispatch(fetchTodos()))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerTodos);
