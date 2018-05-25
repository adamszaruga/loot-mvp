import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth } from './firebase.js';
import './App.css';

import Navbar from './navbar.js';
import Dashboard from './Dashboard.js';

const uiConfig = {
      signInSuccessUrl: 'https://google.com',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: 'https://google.com',
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null // <-- add this line
    }
  }
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(
        (user) => this.setState({
          isSignedIn: !!user,
          user
        })
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user}/>
        {
          this.state.isSignedIn ?
          <Dashboard />              
          :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />                    
        } 
      </div>
    );
  }
}

export default App;
