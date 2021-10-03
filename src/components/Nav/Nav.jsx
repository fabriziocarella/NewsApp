import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <nav className={this.props.clase}>
        <ul className="nav--ul">
          <li className="nav--ul--a"><Link to="/home">Home</Link></li>
          <li className="nav--ul--a"><Link to="/form">Post a New</Link></li>
          <li className="nav--ul--a"><Link to="/list">News</Link></li>
        </ul>
      </nav>)
  }
}

export default Nav;
