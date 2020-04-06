import React, { Component } from 'react';
import '../src/styles/App.css';
import NavBar from '../src/components/NavBar';
import GameBoard from '../src/components/GameBoard'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <GameBoard />
      </div>
    )
  }
}
