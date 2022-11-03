import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    name: '',
    isButtonDisabled: true,
    loading: false,
  };

  handleChange = ({ target }) => {
    const MIN_CHARACTERS = 3;
    this.setState(
      {
        name: target.value,
      },
      () => {
        this.setState((prevState) => ({
          isButtonDisabled: prevState.name.length < MIN_CHARACTERS,
        }));
      },
    );
  };

  createUserRequest = async (name) => {
    const { history } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      loading: false,
    });
    history.push('/search');
  };

  render() {
    const { name, isButtonDisabled, loading } = this.state;
    const loadingElement = <p>Carregando...</p>;
    return (
      <section data-testid="page-login">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            name="name"
            data-testid="login-name-input"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ () => this.createUserRequest(name) }
          >
            Entrar
          </button>
        </form>
        {loading && loadingElement }
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
