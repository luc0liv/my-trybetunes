/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { artist, isButtonDisabled, onButtonClick, onInputChange } = this.props;
    return (
      <form className="flex flex-wrap items-center justify-between w-full sm:w-4/12 md:w-5/12 bg-teaGreen py-6 px-8 rounded-lg mt-6 gap-2">
        <input
          className="bg-gray-100 placeholder:text-pink font-semibold py-2 px-4 rounded-md flex-auto w-full lg:w-4/6"
          placeholder="Nome do artista"
          value={ artist }
          onChange={ onInputChange }
          data-testid="search-artist-input"
        />
        <button
          className="bg-darkPurple py-2 px-6 rounded-md font-semibold text-white text-sm flex-auto w-full lg:w-3/12"
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
