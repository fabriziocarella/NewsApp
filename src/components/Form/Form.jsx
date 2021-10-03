import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],

    }
  }
  addNew = (event) => {
    event.preventDefault();
    // Retreive all input's values and add them to "newToAdd" 
    // and sends it through props (newPassed) (callback function passNew) to Main (updates the state)
    // so Main can send it to List comp.
    const author = event.target.elements.author.value
    const title = event.target.elements.title.value
    const description = event.target.elements.description.value
    const url = event.target.elements.url.value
    const urlToImage = event.target.elements.urlToImage.value

    if (author && title && description && url && urlToImage) {
      const newToAdd = { author, title, description, url, urlToImage }
      this.props.newPassed(newToAdd)
    }
  }

  render() {
    return (
      <div className="form">
        <h1>Post a new!</h1>
        <form className="form--inside" onSubmit={this.addNew}>
          <label>Author: <input type="text" name="author" placeholder="Author's name" /></label>
          <label>Title: <input type="text" name="title" placeholder="Title" /></label>
          <label>Description: <input type="text" name="description" placeholder="Description" /></label>
          <label>URL New: <input type="text" name="url" placeholder="URL" /></label>
          <label>URL Img: <input type="url" name="urlToImage" placeholder="URL Image" /></label>
          <input type="submit" value="Add a New!" className="button" />
        </form>
      </div>
    );
  }
}

export default Form;
