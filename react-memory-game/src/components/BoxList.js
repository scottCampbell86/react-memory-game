import React, { Component } from 'react';
import '../styles/BoxList.css';
import BoxCard from './BoxCard';
import shuffle from 'shuffle-array';

export default class BoxList extends Component {

  shuffleBoxes = (array) => {
    return shuffle(array);
  }

  handleClick = (argId) => {
    this.props.onClick(argId);
  }


  render() {
    let mappedBoxes = this.props.boxes.map(box => (
      <BoxCard  id={box.id} 
        isShowing={box.cardState !== box.CardState.HIDING} 
        backgroundColor={box.backgroundColor} 
        onClick={this.handleClick} 
      />
    ))
    let mappedAndShuffled = this.shuffleBoxes(mappedBoxes)
    return (
      <div>
        {mappedAndShuffled}
      </div>
    )
  }
}
