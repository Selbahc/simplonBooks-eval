import React, { Component } from "react";
import BookForm from './BookForm';

class BookLayout extends Component {
  state = {
    editing: false
  }
  
  handleEditClick = () => {
    this.state.editing ? this.setState({editing: false}) : this.setState({editing: true});
  }

  render() {
    return (
    <div className="card column col-4">
        <div className="card-header">
          <div className="card-title h5">{this.props.book.titre}</div>
          <div className="card-subtitle text-gray">{this.props.book.auteur}</div>
        </div>
        <div className="card-body">
          Livre écrit en <b>{this.props.book.date_de_creation}</b> et publié pour la première fois en <b>{this.props.book.annee_de_publication}</b>.
          Ce livre contient environ <b>{this.props.book.pages}</b> pages.
        </div>
        <div className="card-footer">
          <button onClick={() => this.handleEditClick()} className="btn"><i className="icon icon-edit"></i></button>
          <a href={`http://localhost:3001/simplonBook/${this.props.book._id}/delete`}>
            <button type='submit' className="btn btn-primary"><i className="icon icon-delete"></i></button>
          </a>
        </div>

        {this.state.editing &&
        <form action={`http://localhost:3001/simplonBook/${this.props.book._id}/update`} method="post" className="form-group">
          <BookForm book={this.props.book}/>
        </form>
        }
    </div>
    )
  }
}

export default BookLayout;