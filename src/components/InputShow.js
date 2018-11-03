import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    return (
      <div>
        <ul>
            {this.props.data.map((t,index)=> <li key={index}>{t}</li>)}
        </ul>
      </div>
    )
  }
}