import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    musicList: [],
    artist: '',
    album: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    this.setState({
      musicList,
      artist: musicList[0].artistName,
      album: musicList[0].collectionName,
    });
  }

  render() {
    const { musicList, artist, album } = this.state;
    return (
      <div>
        <Header />
        <h1 data-testid="page-album">Album</h1>
        <h2 data-testid="artist-name">{artist}</h2>
        <h3 data-testid="album-name">{album}</h3>
        <div>
          { musicList.map((music, index) => (
            index >= 1 && <MusicCard
              key={ music.trackId }
              previewUrl={ music.previewUrl }
              trackName={ music.trackName }
            />
          ))}
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
