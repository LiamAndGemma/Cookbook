import React from 'react';
import { Helmet } from 'react-helmet'
import logo from './logo.svg';
import './App.css';

import firebaseConfig from './config/firebase'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(firebaseConfig)

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  return (
    <>
      <Helmet>
        <title>The Bear Cookbook</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </>
  );
}

export default App;
