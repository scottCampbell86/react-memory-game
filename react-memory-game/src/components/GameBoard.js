import React, { Component } from 'react';
import '../styles/GameBoard.css'
import BoxCard from './BoxCard';
import shuffle from 'shuffle-array';
import NavBar from './NavBar'


export default class GameBoard extends Component {
  state = {
    boxes : [
      {id: 0, backgroundColor: 'red', isFlipped: false, matching: false},
      {id: 1, backgroundColor: 'red', isFlipped: false, matching: false},
      {id: 2, backgroundColor: 'navy', isFlipped: false, matching: false},
      {id: 3, backgroundColor: 'navy', isFlipped: false, matching: false},
      {id: 4, backgroundColor: 'green', isFlipped: false, matching: false},
      {id: 5, backgroundColor: 'green', isFlipped: false, matching: false},
      {id: 6, backgroundColor: 'yellow', isFlipped: false, matching: false},
      {id: 7, backgroundColor: 'yellow', isFlipped: false, matching: false},
      {id: 8, backgroundColor: 'black', isFlipped: false, matchingd: false},
      {id: 9, backgroundColor: 'black', isFlipped: false, matching: false},
      {id: 10, backgroundColor: 'purple', isFlipped: false, matching: false},
      {id: 11, backgroundColor: 'purple', isFlipped: false, matching: false},
      {id: 12, backgroundColor: 'pink', isFlipped: false, matching: false},
      {id: 13, backgroundColor: 'pink', isFlipped: false, imatching: false},
      {id: 14, backgroundColor: 'lightskyblue', isFlipped: false, matching: false},
      {id: 15, backgroundColor: 'lightskyblue', isFlipped: false, matching: false}
    ],
  }

  isFlipped = (id) => {
    let flipBox = id;
    console.log({flipBox})
    this.state.boxes.map(box => {
      if(flipBox === box.id) {
        this.setState({
          ...box, isFlipped: true
        })
      }
    })
  }

  handleNewGame = () => {
    let newBoxes = this.state.boxes.map(box => ({
      ...box,
      isFlipped: false
    }));
    let newShuffBoxes = shuffle(newBoxes);
    this.setState({boxes: newShuffBoxes});
  }

  handleClick = (id) => {
    this.isFlipped(id);
    //console.log(`CARD CLICK HEARD: BOX ID:${id}`)
    const boxId = id
    //console.log({boxId})
    const mapBoxState = (arrayOfBoxes, idsToChange, newIdState) => {
      return arrayOfBoxes.map(box => {
        if (idsToChange.includes(boxId)) {
          return {
            ...box, 
            matching: newIdState
          }
        }
        console.log({box})
        return box
      })
    }

    const foundBox = this.state.boxes.find(box => box.id === boxId);
    
    if (this.state.isFlipped || foundBox.matching !== this.state.isFlipped) {
      return;
  }

  let trueMatch = true;

  let falseMatch = false;
  
  let boxesVar = mapBoxState(this.state.boxes, [boxId], this.state.isFlipped);
  
  const isFlippedBoxes =  boxesVar.filter((box) => box.isFlipped);
  
  const isFlippedBoxIds = isFlippedBoxes.map(box => box.id);
  
  if (isFlippedBoxes.length === 2 &&
      isFlippedBoxes[0].backgroundColor === isFlippedBoxes[1].backgroundColor) {
    boxesVar = mapBoxState(boxesVar, isFlippedBoxIds, trueMatch);
  } else if (isFlippedBoxes.length === 2) {
    let hidingBoxes = mapBoxState(boxesVar, isFlippedBoxIds, falseMatch);

    
    this.setState({hidingBoxes}, () => {
      setTimeout(() => {
        this.setState({boxes: hidingBoxes, isFlipped: false});
      }, 1300);
    });
    return;
    }
    this.setState({boxes: boxesVar, isFlipped: false})
  }

    render() {
      
      const shuffleBoxes = (array) => {
        return shuffle(array);
      }
      const mappedBoxes = this.state.boxes.map((box) => (
        <BoxCard  
          id={box.id} 
          isFlipped={box.isFlipped} 
          backgroundColor={box.backgroundColor} 
          onClick={()=>this.handleClick(box.id)}
        />
      ))
      const mappedAndShuffled = shuffleBoxes(mappedBoxes)
      return (
        <div>
          <NavBar onNewGame={()=>this.handleNewGame}/>
          <div>
            {mappedAndShuffled}
          </div>
        </div>
        
      )
    
  }
}
