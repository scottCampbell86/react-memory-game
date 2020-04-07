import React, { Component } from 'react';
import '../styles/BoxCard.css'

export default class BoxCard extends Component {
  
  render() {
  let style = {};
  if (this.props.isFlipped) {
  style.backgroundColor = this.props.backgroundColor;
  }
    return (
    <div
      onClick={this.props.onClick}
      className="box-container"
      style={style}
    />
  );
  }
}
