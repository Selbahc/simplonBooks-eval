import React, { Component } from 'react';

class BookForm extends Component {
  render() {
    return (
      <form action="http://localhost:3001/simplonBook/add" method="post" className="form-group">
        <label className="form-label" htmlFor="titre">Titre</label>
        <input 
          className="form-input" 
          type="text" 
          id="titre" 
          name="titre" />

        <label className="form-label" htmlFor="auteur">Auteur</label>
        <input 
          className="form-input" 
          type="text" 
          id="auteur" 
          name="auteur" />

        <label className="form-label" htmlFor="publication">Publication</label>
        <input 
          className="form-input" 
          type="text" 
          id="publication" 
          name="annee_de_publication" />

        <label className="form-label" htmlFor="pages">Pages</label>
        <input 
          className="form-input" 
          type="text" 
          id="pages" 
          name="pages" />

        <label className="form-label" htmlFor="creation">Creation</label>
        <input 
          className="form-input" 
          type="text" 
          id="creation" 
          name="date_de_creation" />
             
        <button className="btn btn-primary" type="submit">Add a Book</button>
      </form>
    )
  }
}

export default BookForm;