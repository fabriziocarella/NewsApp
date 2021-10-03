import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Button from '@mui/material/Button';

import { userContext } from '../../context/userContext';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>News App</h1>
        <Nav />
        {/* Here we consume user + logout function -> if name has a value -> it will show a welcome message + logout button */}
        <userContext.Consumer>
          {({ user, logout }) =>

            user.name ?
              <>
                <p>Welcome, {user.name}!</p>
                <Button onClick={() => logout()}>Logout</Button>
              </> : ""
          }
        </userContext.Consumer>
      </header>
    )
  }
}

export default Header;
