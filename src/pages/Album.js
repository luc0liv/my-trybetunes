import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  state = {
    musicList: [],
    artist: '',
    album: '',
    loading: false,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const musicList = await getMusics(id);
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
    this.setState({
      musicList,
      artist: musicList[0].artistName,
      album: musicList[0].collectionName,
      loading: false,
    });
  }

  compareForFaves = (songs, id) => songs.some((song) => song.trackId === id);

  addOrRemoveSong = async ({ target }, song) => {
    this.setState({ loading: true });
    if (target.checked) {
      await addSong(song);
    } else {
      await removeSong(song);
    }
    this.setState({ loading: false });
  };

  render() {
    const { musicList, artist, album, loading } = this.state;
    const faveList = JSON.parse(localStorage.getItem('favoriteSongs'));
    return (
      <div>
        <Header />
        <h1 data-testid="page-album">Album</h1>
        <h2 data-testid="artist-name">{artist}</h2>
        <h3 data-testid="album-name">{album}</h3>
        <div>
          {loading && <p>Carregando...</p>}
          {musicList.map(
            (music, index) => index >= 1 && (
              <MusicCard
                key={ music.trackId }
                previewUrl={ music.previewUrl }
                trackName={ music.trackName }
                trackId={ music.trackId }
                onCheck={ (event) => this.addOrRemoveSong(event, music) }
                checked={ this.compareForFaves(faveList, music.trackId) }
              />
            ),
          )}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
