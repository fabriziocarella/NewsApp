import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: this.props.info
    }
  }
  render() {
    const { title, content, description, url, urlToImage } = this.props.info
    return (
      <div className="card">
        <a href={url} target="_blank" className="card--title">{title}</a>
        <p className="card--description">{description}</p>
        <p className="card--content">{content}</p>
        <img src={urlToImage} alt={title} />
        <button className="button" onClick={this.props.remove}>Delete this!</button>
      </div>)
  }
}

export default Card;
