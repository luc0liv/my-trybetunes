import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="page-profile">Profile</h1>
      </div>
    );
  }
}

export default Profile;
