import React, { Component } from 'react';
import '../styles/GameBoard.css'
import BoxCard from './BoxCard';
import shuffle from 'shuffle-array';
const CardState = {
  HIDING: 0,
  SHOWING: 1, 
  MATCHING: 2
}

export default class GameBoard extends Component {

  state = {
    noClick: false,
    boxes: [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ],
  }

  onClick = (argId) => {
    this.setState(preState => {
      let boxes = preState.boxes.map(box => (
        box.id === argId ? {
          ...box, 
          cardState: box.cardState === this.props.CardState.HIDING ? this.props.CardState.MATCHING : this.props.CardState.Hiding 
        } : box ));
        return {boxes};
      })
  }

  shuffleBoxes = (array) => {
    return shuffle(array);
  }



    render() {
      let mappedBoxes = this.state.boxes.map(box => (
        <BoxCard  id={box.id} 
          isShowing={box.cardState !== CardState.HIDING} 
          backgroundColor={box.backgroundColor} 
          onClick={()=>this.onClick(box.id)}
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
