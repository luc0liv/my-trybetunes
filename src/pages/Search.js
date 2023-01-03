import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Button from '../components/Button';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  state = {
    artist: '',
    isButtonDisabled: true,
    albums: [],
    loading: false,
    message: '',
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

  searchAlbums = async (artist) => {
    this.setState({
      loading: true,
    });
    const reqAlbums = await searchAlbumsAPI(artist);
    this.setState(
      {
        loading: false,
        albums: reqAlbums,
      },
      () => {
        this.setState((prevState) => ({
          message: `Resultado de álbuns de: ${prevState.artist}`,
          artist: '',
        }));
      },
    );
  };

  render() {
    const { artist, isButtonDisabled, loading, albums, message } = this.state;

    return (
      <div>
        <Header />
        <h1 data-testid="page-search">Search</h1>
        {loading ? (
          <Loading />
        ) : (
          <form>
            <input
              placeholder="Nome do artista"
              value={ artist }
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
            <Button
              name="Procurar"
              testId="search-artist-button"
              isButtonDisabled={ isButtonDisabled }
              onButtonClick={ () => this.searchAlbums(artist) }
              customClass="search"
            />
          </form>
        )}
        {albums.length >= 1 ? (
          <p>{message}</p>
        ) : (
          <p>Nenhum álbum foi encontrado</p>
        )}
        <ul>
          {albums.map((album) => (
            <Link
              key={ album.collectionId }
              to={ `album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              {album.collectionName}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
