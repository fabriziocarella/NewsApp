import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: this.props.info
    }
  }
  render() {
    const { title, content, description, publishedAt, url, urlToImage } = this.props.info
    return (
      <div>
        <a href={url} target="_blank"><h1>{title}</h1></a>
        <button onClick={this.props.remove}>Delete new!</button>
        <p>{description}</p>
        <p>{content}</p>
        <p>{publishedAt}</p>
        <img src={urlToImage} alt={title} />
      </div>)
  }
}

export default Card;
