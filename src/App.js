import './App.css';
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'


export class App extends Component {
  constructor(props) {
    super(props)
    // State created for a fake user -> Start empty "" -> name: actualName
    this.state = {
      user: {
        name: ""
      }
    }
  }
  login = (name) => this.setState({ user: { name } })
  logout = () => this.setState({ user: { name: "" } })

  render() {
    // Pass object value to provider in order to use it for Context and provide it to Header
    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }
    return (
      <div className="app">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Header />
            <Main />
          </userContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
