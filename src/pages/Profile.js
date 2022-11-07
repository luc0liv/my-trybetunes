import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  state = {
    loading: false,
    name: '',
    email: '',
    description: '',
    image: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    const { name, email, description, image } = user;
    this.setState({
      name,
      email,
      description,
      image,
      loading: false,
    });
  }

  render() {
    const { name, email, description, image, loading } = this.state;
    const loadingElement = <p>Carregando...</p>;
    return (
      <div>
        <Header />
        <h1 data-testid="page-profile">Profile</h1>
        {loading ? (
          loadingElement
        ) : (
          <section>
            <div>
              <img src={ image } alt={ name } data-testid="profile-image" />
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

export default Profile;
