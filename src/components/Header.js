import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
    const gradient = 'bg-gradient-to-r from-teaGreen to-blue via-fuchsia-300';
    const headerStyle = `${gradient} p-6 text-darkPurple font-semibold`;
    return (
      <header
        data-testid="header-component"
        className={ `${headerStyle} shadow-sm` }
      >
        <nav className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="flex justify-between items-center w-full md:w-2/6">
            <Link to="/search" data-testid="link-to-search" className="hover:opacity-60">
              Search
            </Link>
            <Link
              to="/favorites"
              data-testid="link-to-favorites"
              className="hover:opacity-60"
            >
              Favorites
            </Link>
            <Link
              to="/profile"
              data-testid="link-to-profile"
              className="hover:opacity-60"
            >
              Profile
            </Link>
          </div>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <p data-testid="header-user-name" className="text-darkPurple text-sm">
                {userName}
              </p>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
