import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="page-album">Album</h1>
      </div>
    );
  }
}

export default Album;
