import React, { Component } from "react";

class BookLayout extends Component {
  handleEditClick = () => {
    this.setState({editing: true});
  }

  render() {
    return (
    <div className="card">
        <div className="card-header">
          <div className="card-title h5">{this.props.book.titre}</div>
          <div className="card-subtitle text-gray">{this.props.book.auteur}</div>
        </div>
        <div className="card-body">
          Livre écrit en <b>{this.props.book.date_de_creation}</b> et publié pour la première fois en <b>{this.props.book.annee_de_publication}</b>.
          Ce livre contient environ <b>{this.props.book.pages}</b> pages.
        </div>
        <div className="card-footer">
          <button className="btn"><i className="icon icon-edit"></i></button>
          <a href={`http://localhost:3001/simplonBook/${this.props.book._id}/delete`}>
            <button type='submit' className="btn btn-primary"><i className="icon icon-delete"></i></button>
          </a>
        </div>
    </div>
    )
  }
}

export default BookLayout;