import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  // state = {
  //   name: '',
  //   isButtonDisabled: true,
  // };

  // handleChange = ({ target }) => {
  //   console.log(target.value);
  // };

  render() {
    // const { name, isButtonDisabled } = this.state;
    return (
      <Switch>
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/search" component={ Search } />
        {/* <Route
          exact
          path="/"
          render={ () => (<Login
            name={ name }
            isButtonDisabled={ isButtonDisabled }
            handleChange={ this.handleChange }
          />) }
        /> */}
        <Route path="/" component={ Login } />
        <Route path="*" component={ PageNotFound } />
      </Switch>
    );
  }
}

export default App;
