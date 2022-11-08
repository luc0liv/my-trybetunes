import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

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
    const formClass = `${flex} gap-y-4`;
    return (
      <section data-testid="page-login" className={ sectionClass }>
        <h1 className="font-bold text-4xl mb-6 text-darkPurple">Login</h1>
        <form className={ formClass }>
          <input
            className="rounded w-full md:w-2/4 p-2 placeholder-pink text-pink"
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
            className={ `w-full 
            md:w-2/4 bg-darkPurple p-2 text-blue font-semibold rounded` }
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
