import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="page-search">Search</h1>
      </div>
    );
  }
}

export default Search;
