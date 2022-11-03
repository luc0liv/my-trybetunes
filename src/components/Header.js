import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    loading: false,
    userName: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      loading: false,
      userName: user.name,
    });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        {
          loading
            ? <p>Carregando...</p>
            : <p data-testid="header-user-name">{ userName }</p>
        }
      </header>
    );
  }
}

export default Header;
