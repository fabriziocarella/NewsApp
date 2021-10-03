import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/form">Post a New</Link></li>
          <li><Link to="/list">News</Link></li>
        </ul>
      </nav>)
  }
}

export default Nav;
