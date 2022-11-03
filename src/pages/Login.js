import React, { Component } from 'react';

class Login extends Component {
  state = {
    name: '',
    isButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const MIN_CHARACTERS = 3;
    this.setState({
      name: target.value,
    }, () => {
      this.setState((prevState) => ({
        isButtonDisabled: prevState.name.length <= MIN_CHARACTERS,
      }));
    });
  };

  render() {
    const { name, isButtonDisabled } = this.state;
    return (
      <section data-testid="page-login">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

// Login.propTypes = {
//   name: PropTypes.string.isRequired,
//   isButtonDisabled: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

export default Login;
