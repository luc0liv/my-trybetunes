import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends Component {
  render() {
    const { url, testId, albumName, image } = this.props;
    const container = `flex flex-col items-center 
    justify-center w-full md:w-2/12 flex-auto p-4 gap-y-2`;
    const textStyle = 'font-bold text-center text-xs';
    const bgStyle = 'bg-fuchsia-200 rounded-md';

    return (
      <Link
        to={ url }
        data-testid={ testId }
        className={ `${container} ${bgStyle} ${textStyle}` }
      >
        {albumName}
        <img src={ image } alt={ albumName } />
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  url: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AlbumCard;
