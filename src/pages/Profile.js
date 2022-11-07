import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Profile extends Component {
  render() {
    const { name, email, description, image, loading } = this.props;

    return (
      <div>
        <Header />
        <h1 data-testid="page-profile">Profile</h1>
        {loading ? (
          <Loading />
        ) : (
          <section>
            <div>
              <img src={ image } alt={ name } data-testid="profile-image" width={ 200 } />
              <p>{name}</p>
              <p>{email}</p>
              <p>{description}</p>
            </div>
            <div>
              <Link to="/profile/edit">Editar perfil</Link>
            </div>
          </section>
        )}
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Profile;
