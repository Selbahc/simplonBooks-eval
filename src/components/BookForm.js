import React, { Component } from 'react';

class BookForm extends Component {
  render() {

    let defaultData = {
      titre: '',
      auteur: '',
      publication: '',
      pages: '',
      creation: '',
      submit: 'Add a book'
    }
    if (this.props.book) {
      defaultData = {
        titre: this.props.book.titre,
        auteur: this.props.book.auteur,
        publication: this.props.book.annee_de_publication,
        pages: this.props.book.pages,
        creation: this.props.book.date_de_creation,
        submit: 'Save changes'
      }
    }

    return (
      <div>
        <label className="form-label" htmlFor="titre">Titre</label>
        <input 
          className="form-input" 
          type="text" 
          id="titre" 
          name="titre" 
          defaultValue={defaultData.titre}/>

        <label className="form-label" htmlFor="auteur">Auteur</label>
        <input 
          className="form-input" 
          type="text" 
          id="auteur" 
          name="auteur" 
          defaultValue={defaultData.auteur}/>

        <label className="form-label" htmlFor="publication">Publication</label>
        <input 
          className="form-input" 
          type="text" 
          id="publication" 
          name="annee_de_publication" 
          defaultValue={defaultData.publication}/>

        <label className="form-label" htmlFor="pages">Pages</label>
        <input 
          className="form-input" 
          type="text" 
          id="pages" 
          name="pages" 
          defaultValue={defaultData.pages}/>

        <label className="form-label" htmlFor="creation">Creation</label>
        <input 
          className="form-input" 
          type="text" 
          id="creation" 
          name="date_de_creation" 
          defaultValue={defaultData.creation}/>
             
        <button className="btn btn-primary" type="submit">{defaultData.submit}</button>
      </div>
    )
  }
}

export default BookForm;