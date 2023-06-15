import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import logo from '../assets/images/logo.png';

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
    const flex = 'flex flex-col items-center justify-center w-full';
    const gradient = `bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] 
    from-fuchsia-300 via-teaGreen to-blue`;
    const sectionClass = `${flex} p-2 md:p-6 h-screen ${gradient}`;
    const composition = 'gap-y-4 bg-white bg-opacity-30 px-10 py-8 rounded-lg md:w-2/6';
    const formClass = `${flex} ${composition}`;
    const buttonBase = 'w-full p-2 font-semibold rounded';
    const buttonEnabled = 'bg-darkPurple text-blue';
    const buttonDisabled = 'bg-blue text-black';

    return (
      <section data-testid="page-login" className={ sectionClass }>
        <div className="flex items-center justify-around w-6/12 mb-6">
          <h1 className="font-bold text-4xl text-darkPurple">Trybetunes</h1>
          <img src={ logo } alt="Trybetunes logo" className="w-8" />
        </div>
        <form className={ formClass }>
          <h2 className="font-bold text-2xl text-pink">Login</h2>
          <input
            className="rounded w-full p-2 placeholder-pink text-pink"
            type="text"
            name="name"
            data-testid="login-name-input"
            value={ name }
            placeholder="Seu nome aqui"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ () => this.createUserRequest(name) }
            className={ `${isButtonDisabled
              ? buttonDisabled
              : buttonEnabled} ${buttonBase}` }
          >
            Entrar
          </button>
        </form>
        {loading && <Loading /> }
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
