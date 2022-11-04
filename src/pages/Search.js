import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state = {
    artist: '',
    isButtonDisabled: true,
    // loading: false,
  };

  handleChange = ({ target }) => {
    const MIN_CHARACTERS = 2;
    this.setState(
      {
        artist: target.value,
      },
      () => {
        this.setState((prevState) => ({
          isButtonDisabled: prevState.artist.length < MIN_CHARACTERS,
        }));
      },
    );
  };

  render() {
    const { artist, isButtonDisabled } = this.state;
    return (
      <div>
        <Header />
        <h1 data-testid="page-search">Search</h1>
        <form>
          <input
            placeholder="Nome do artista"
            value={ artist }
            onChange={ this.handleChange }
            data-testid="search-artist-input"
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isButtonDisabled }
          >
            Procurar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
