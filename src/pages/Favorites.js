import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="page-favorites">Favorites</h1>
      </div>
    );
  }
}

export default Favorites;
