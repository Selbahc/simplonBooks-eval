import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css';

import './App.css';

import BookForm from './components/BookForm';
import FetchBooks from './components/FetchBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchBooks />
        <BookForm />
      </div>
    );
  }
}

export default App;
