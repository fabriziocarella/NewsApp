import React, { Component } from "react";
import Nav from "../Nav/Nav";

import { userContext } from '../../context/userContext';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h2 className="header--h2">News App</h2>
        <Nav clase="header--nav"/>
        {/* Here we consume user + logout function -> if name has a value -> it will show a welcome message + logout button */}
        <userContext.Consumer>
          {({ user, logout }) =>
            user.name ?
              <div className="header--user">
                <p>Welcome, {user.name}!</p>
                <button className="button" onClick={() => logout()}>Logout</button>
              </div> : ""
          }
        </userContext.Consumer>
      </header>
    )
  }
}

export default Header;
