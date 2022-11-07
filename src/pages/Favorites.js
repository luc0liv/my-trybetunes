import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  state = {
    loading: false,
    favoriteSongs: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
      loading: false,
    });
  }

  removeFaveSong = async (song, index) => {
    const { favoriteSongs } = this.state;
    this.setState({ loading: true });
    await removeSong(song);
    favoriteSongs.splice(index, 1);
    this.setState(
      { loading: false },
      () => this.setState((prev) => ({ ...prev, favoriteSongs })),
    );
  };

  compareForFaves = (songs, id) => songs.some((song) => song.trackId === id);

  render() {
    const { loading, favoriteSongs } = this.state;
    const loadingElement = <p>Carregando...</p>;
    return (
      <div>
        <Header />
        <h1 data-testid="page-favorites">Favorites</h1>
        { loading ? loadingElement : favoriteSongs.map((song, index) => (
          <MusicCard
            key={ song.trackId }
            previewUrl={ song.previewUrl }
            trackName={ song.trackName }
            trackId={ +song.trackId }
            onCheck={ () => this.removeFaveSong(song, index) }
            checked={ this.compareForFaves(favoriteSongs, song.trackId) }
          />
        )) }
      </div>
    );
  }
}

export default Favorites;
