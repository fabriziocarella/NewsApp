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
      <div>
        <h1>Post a new!</h1>
        <form onSubmit={this.addNew}>
          <label>Author:</label>
          <input type="text" name="author" placeholder="Author's name" />
          <label>Title:</label>
          <input type="text" name="title" placeholder="Title" />
          <label>Description:</label>
          <input type="text" name="description" placeholder="Description" />
          <label>URL New:</label>
          <input type="url" name="url" placeholder="URL New" />
          <label>URL Img:</label>
          <input type="url" name="urlToImage" placeholder="URL Image" />
          <input type="submit" value="Add a New!" />
        </form>
      </div>
    );
  }
}

export default Form;
