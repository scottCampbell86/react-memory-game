import React, { Component } from 'react';
import '../styles/Box.css'

export default class Box extends Component {
  render() {
    return (
      <div>
        <div 
          style={{
            height: '7em', 
            width: '7em',
            backgroundColor: this.props.backgroundColor 
          }}
        />
        <button onClick={ this.handleClick }>x</button>
      </div>
    )
  }
}
