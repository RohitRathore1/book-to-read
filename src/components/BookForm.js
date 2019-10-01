import React, { Component } from 'react';
import '../css/BookForm.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: '',
      read: "yes"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const { title, author, pages, read } = this.state;

    this.props.handleBookCreate(event, title, author, pages, read)

    this.setState({
      title: '',
      author: '',
      pages: '',
      read: "yes"
    });
  }

  render() {
    return (
      <form className="newbook__form" onSubmit={
        (event) => this.handleSubmit(event)
      }>
        <div>
          <h2 className="newbook__form-header">
            Add new book
          </h2>
        </div>

        <input type="text"
               name="title"
               className="newbook__form-input newbook__form-input--1"
               id="form-title"
               value={this.state.title}
               onChange={this.handleChange}
               placeholder="Book title"
               required
               minLength="3"
               maxLength="25" /><br />
        <label className="newbook__form-label newbook__form-label--1">Title</label><br />

        <input type="text"
               name="author"
               className="newbook__form-input newbook__form-input--2"
               id="form-author"
               value={this.state.author}
               onChange={this.handleChange}
               placeholder="Author"
               required
               minLength="3"
               maxLength="15" /><br />
        <label className="newbook__form-label newbook__form-label--2">Author</label><br />

        <input type="number"
               name="pages"
               className="newbook__form-input newbook__form-input--3"
               id="form-pages"
               value={this.state.pages}
               onChange={this.handleChange}
               placeholder="Pages"
               required
               min="10"
               max="9999" /><br />
        <label className="newbook__form-label newbook__form-label--3">Pages</label><br />

        <input type="radio"
               id="readYes"
               value="yes"
               className="newbook__form-radio"
               checked={this.state.read === 'yes'}
               onChange={this.handleChange}
               name="read" />
        <label className="newbook__form-radio-header">already read:</label>

        <label className="newbook__form-radio-label--yes" htmlFor="readYes">
          <span className="newbook__form-radio-btn--yes"></span>
          Yes
        </label>

        <input type="radio"
               id="readNo"
               value="no"
               className="newbook__form-radio"
               checked={this.state.read === 'no'}
               onChange={this.handleChange}
               name="read" />
        <label className="newbook__form-radio-label--no" htmlFor="readNo">
        <span className="newbook__form-radio-btn--no"></span>
          No
        </label>

        <input type="submit" value="Submit" className="newbook__form-btn" />
      </form>
    );
  }
}

export default BookForm
