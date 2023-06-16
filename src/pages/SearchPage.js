import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Search from '../components/Search';
import AlbumCard from '../components/AlbumCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class SearchPage extends Component {
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
        <div className="flex flex-col items-center justify-center px-2">
          {loading ? (
            <Loading />
          ) : (
            <Search
              artist={ artist }
              onButtonClick={ () => this.searchAlbums(artist) }
              onInputChange={ this.handleChange }
              isButtonDisabled={ isButtonDisabled }
            />
          )}
          {albums.length >= 1 ? (
            <section>
              <p className="font-semibold text-sm px-4">{message}</p>
              <ul className="flex flex-wrap gap-4 w-full p-4 justify-start">
                {albums.map((album) => (
                  <AlbumCard
                    key={ album.collectionId }
                    url={ `album/${album.collectionId}` }
                    testId={ `link-to-album-${album.collectionId}` }
                    albumName={ album.collectionName }
                    image={ album.artworkUrl100 }
                  />
                ))}
              </ul>
            </section>
          ) : (
            <p className="mt-2 text-sm text-pink">Nenhum álbum foi encontrado</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
