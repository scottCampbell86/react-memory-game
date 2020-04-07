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
    noClick : false,
    boxes : [
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
    ]
  }

  onClick = (id) => {
    const mapBoxState = (boxes, idsToChange, newBoxState) => {
      return boxes.map(box => {
        if (idsToChange.includes(box.id)) {
          return {
            ...box, 
            cardState: newBoxState
          }
        }
        return box
      })
    }

  const foundBox = this.state.boxes.find(box => box.id === id);

  if (this.state.boxes.noClick || foundBox.cardState !== CardState.HIDING) {
    return;
  }

  let noClick = false;
    
  let boxes = mapBoxState(this.state.boxes, [id], CardState.SHOWING);
  
  const showingBoxes =  boxes.filter((box) => box.cardState === CardState.SHOWING);
  
  const ids = showingBoxes.map(box => box.id);
  
  if (showingBoxes.length === 2 &&
      showingBoxes[0].backgroundColor === showingBoxes[1].backgroundColor) {
    boxes = mapBoxState(boxes, ids, CardState.MATCHING);
  } else if (showingBoxes.length === 2) {
    let hidingBoxes = mapBoxState(boxes, ids, CardState.HIDING);
    
    noClick = true;
    
    this.setState({boxes, noClick}, () => {
      setTimeout(() => {
        this.setState({boxes: hidingBoxes, noClick: false});
      }, 1300);
    });
    return;
  }
  
  this.setState({boxes, noClick});
}



    render() {
      const shuffleBoxes = (array) => {
        return shuffle(array);
      }
      let mappedBoxes = this.state.boxes.map(box => (
        <BoxCard  id={box.id} 
          showing={box.cardState !== this.state.boxes.CardState.HIDING} 
          backgroundColor={box.backgroundColor} 
          onClick={()=>this.onClick(box.id)}
        />
      ))
      let mappedAndShuffled = shuffleBoxes(mappedBoxes)
      return (
        <div>
          {mappedAndShuffled}
        </div>
      )
    }
}
