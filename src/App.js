import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import { getUser, updateUser } from './services/userAPI';
import validateDisabledButton from './helpers/validation';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  state = {
    loading: false,
    name: '',
    email: '',
    description: '',
    image: '',
    isButtonDisabled: true,
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.setState((prevState) => ({
          isButtonDisabled: validateDisabledButton(prevState),
        }));
      },
    );
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
    const { isButtonDisabled } = this.state;
    return (
      <Switch>
        <Route
          path="/profile/edit"
          render={ (props) => (
            <ProfileEdit
              { ...this.state }
              isButtonDisabled={ isButtonDisabled }
              handleChange={ this.handleChange }
              saveUser={ () => this.saveUser(props) }
            />
          ) }
        />
        <Route path="/profile" render={ () => <Profile { ...this.state } /> } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/search" component={ SearchPage } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ PageNotFound } />
      </Switch>
    );
  }
}

export default App;
