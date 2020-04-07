import React, { Component } from 'react';
import '../src/styles/App.css';
import GameBoard from '../src/components/GameBoard'

export default class App extends Component {
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    )
  }
}
