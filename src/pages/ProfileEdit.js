import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  render() {
    const {
      name,
      email,
      description,
      image,
      loading,
      handleChange,
      saveUser,
      isButtonDisabled,
    } = this.props;

    return (
      <div>
        <Header />
        <h1 data-testid="page-profile-edit" className="bg-orange-600">Editar perfil</h1>
        { loading ? <Loading />
          : (
            <form>
              <label htmlFor="username">
                <input
                  type="text"
                  onChange={ handleChange }
                  id="username"
                  name="name"
                  value={ name }
                  data-testid="edit-input-name"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="text"
                  onChange={ handleChange }
                  id="email"
                  name="email"
                  value={ email }
                  data-testid="edit-input-email"
                />
              </label>
              <label htmlFor="description">
                <input
                  type="text"
                  onChange={ handleChange }
                  id="description"
                  name="description"
                  value={ description }
                  data-testid="edit-input-description"
                />
              </label>
              <label htmlFor="image">
                <input
                  type="text"
                  onChange={ handleChange }
                  id="image"
                  name="image"
                  value={ image }
                  data-testid="edit-input-image"
                />
              </label>
              <button
                type="button"
                data-testid="edit-button-save"
                onClick={ saveUser }
                disabled={ isButtonDisabled }
              >
                Salvar
              </button>
            </form>)}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

export default ProfileEdit;
