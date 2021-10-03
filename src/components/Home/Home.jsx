import React, { Component } from "react";

import { userContext } from '../../context/userContext';


class Home extends Component {
  constructor(props) {
    super(props)
    this.name = React.createRef()
  }
  // Handles the form and updates the name state -> sends it to Header through Main
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(`Username added: ${this.name.current.value}`);
  }
  render() {
    return (
      <div className="home">
        <h2>Add your username</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" ref={this.name} placeholder="Username" />
          <userContext.Consumer>
            {({ user, login }) =>
              <input type="submit" className="button" value="Add!" onClick={() => login(this.name.current.value)} />
            }
          </userContext.Consumer>

        </form>
      </div>)
  }
}

export default Home;
