import React, { Component } from 'react';
import '../styles/BoxList.css';
import Box from '../components/Box'

export default class BoxList extends Component {
  render() {
    let mappedBoxes = this.props.boxes.map(box => (
      <Box  id={box.id} CardState={box.CardState} backgroundColor={box.backgroundColor} />
    ))
    return (
      <div>
        {mappedBoxes}
      </div>
    )
  }
}
