import React, { Component } from 'react';
import BookLayout from './BookLayout';

class FetchBooks extends Component {
  state = {
    books: ''
  }
  componentDidMount() {
    fetch('http://localhost:3001/simplonBook/')
      .then(data => data.json())
      .then(books => this.setState({ books }))
  }

  render() {
    return (
      <div>

        {this.state.books &&
          this.state.books.map((book, i) => <BookLayout key={i} book={book}/>)
        }
      </div>
    )
  }
}

export default FetchBooks;