  

import React, {Component} from 'react';
import '../styles/NavBar.css';

class Navbar extends Component {
  handleClick = () => {
    console.log('NAV CLICK HEARD')
    this.props.onNewGame();
  }

  render() {
    return (
      <header>
        <h2><a>Memory Game</a></h2>
        <nav>
          <li><a onClick={this.handleClick}>New Game</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;

