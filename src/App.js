import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import { getUser, updateUser } from './services/userAPI';

class App extends React.Component {
  state = {
    loading: false,
    name: '',
    email: '',
    description: '',
    image: '',
  };

  async componentDidMount() {
    this.getLoggedUser();
  }

  handler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  saveUser = async (props) => {
    const { history } = props;
    const { name, email, description, image } = this.state;
    await updateUser({ name, email, description, image });
    history.push('/profile');
  };

  getLoggedUser = async () => {
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
  };

  render() {
    return (
      <Switch>
        <Route
          path="/profile/edit"
          render={ (props) => (
            <ProfileEdit { ...this.state } handleChange={ this.handler } saveUser={ () => this.saveUser(props) } />
          ) }
        />
        <Route path="/profile" render={ () => <Profile { ...this.state } /> } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/search" component={ Search } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ PageNotFound } />
      </Switch>
    );
  }
}

export default App;
