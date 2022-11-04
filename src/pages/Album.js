import React, { Component } from 'react';
import Header from '../components/Header';
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
        <h2 data-testid="album-name">{album}</h2>
        <div>
          { musicList.map((music, index) => <p key={ index }>{music.trackName}</p>)}
        </div>
      </div>
    );
  }
}

export default Album;
