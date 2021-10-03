import React, { Component } from "react";
import axios from "axios";
import { userContext } from '../../context/userContext';

import Card from '../Card'

class ListNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Through "new" props from Main, we assign and update the state with the news we created.
      news: this.props.new
    }
  }
  async componentDidMount() {
    
    const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
    const data = await resp.data.articles;
    // Once we retreive the data we want from the API, we add it up to our current state
    let newState = this.state.news.concat(data)
    this.setState({
      news: newState
    })
  }
  // Remove an specific new updating the state if their index matches
  removeNew = (i) => {
    const remainNews = this.state.news.filter((param, j) => j !== i);
    this.setState({ news: remainNews })
  }
  // Paints all the news that exist in it's current state 
  // and also passes the remove function through "remove" props
  paintNews = () => {
    return this.state.news.map((newToPaint, i) => <Card info={newToPaint} key={i} remove={() => this.removeNew(i)} />)
  }
  render() {
    return (
      <section className="listNews">
        <h3>News List</h3>
        <p className="listNews--p">Here you can find all the news related to entertainment category!</p>
        <article className="listNews--card">
          {this.paintNews()}
        </article>
      </section>)
  }
}
export default ListNews;