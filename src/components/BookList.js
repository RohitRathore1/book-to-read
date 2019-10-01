import React, { Component } from 'react';
import '../css/BookList.css';

class BookList extends Component {

  render() {
    return (
      this.props.books.map((book, index) => {
        return (
        <div className="book-list__book-container" key={book.title}>
          <span className="book-list__book-item book-list__book-item--title">{book.title}</span>
          <span className="book-list__book-item book-list__book-item--author">{book.author}</span>
          <span className="book-list__book-item">pages: {book.pages}</span>
          <span className="book-list__book-item">read: {book.read}</span>
          <button
            className="book-list__book-item book-list__btn"
            onClick={this.props.handleBookReadToggle(index)}>
            toggle read
          </button>
          <button
            className="book-list__book-item book-list__btn book-list__btn--delete"
            onClick={this.props.handleBookDelete(index)}>
            &#128465;
          </button>
        </div>
        )
      })

    )
  }
}

export default BookList
