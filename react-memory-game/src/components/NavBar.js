  

import React, {Component} from 'react';
import '../styles/NavBar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a>Memory Game</a></h2>
        <nav>
          <li><a>New Game</a></li>
          {/* <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li> */}
        </nav>
      </header>
    );
  }
}

export default Navbar;

