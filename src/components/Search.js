import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { artist, isButtonDisabled, onButtonClick, onInputChange } = this.props;
    return (
      <form>
        <input
          placeholder="Nome do artista"
          value={ artist }
          onChange={ onInputChange }
          data-testid="search-artist-input"
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ isButtonDisabled }
          onClick={ onButtonClick }
        >
          Procurar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  artist: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

export default Search;
