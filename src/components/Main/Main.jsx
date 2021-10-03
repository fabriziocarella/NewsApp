import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "../Home/Home";
import Form from "../Form/Form";
import ListNews from "../ListNews/ListNews";
import Error from "../Error/Error";

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      redirect: false
    }
  }
  // we pass to Form passNew function that updates Main state once Form submits a new creating [old+new]
  // then "new" props pass this new state to list in order to print it
  passNew = (newToPass) => {
    this.setState({
      news: [...this.state.news, newToPass],
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <>
          <Redirect from='/form' to='/list' />
          <Route path="/list" component={() => <ListNews new={this.state.news} />} />
          {this.setState({ redirect: false })}
        </>)
    }
    return (
      <main className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/form" component={() => <Form newPassed={this.passNew} />} />
          <Route path="/list" component={() => <ListNews new={this.state.news} />} />
          <Route component={Error} />
        </Switch>
      </main>)
  }
}
export default Main;
