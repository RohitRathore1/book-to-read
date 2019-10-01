import React, { Component } from 'react';
import '../css/BookNewModal.css';
import BookForm from './BookForm';

class BookNewModal extends Component {

  render() {
    return (
      <div className="newbook">
        <input type="checkbox" className="newbook__checkbox" id="modal-toggle" />

        <label htmlFor="modal-toggle" className="newbook__button">
          <span className="newbook__icon">&nbsp;</span>
        </label>

        <div className="newbook__background">&nbsp;</div>

        <div className="newbook__form-container">
          <BookForm handleBookCreate={this.props.handleBookCreate} />
        </div>
      </div>
    );
  }

}

export default BookNewModal
