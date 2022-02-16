import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
//import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBawPxICL7C2D95sFAIKoi8ypDw2H0tCsY",
  authDomain: "cart-a0dd7.firebaseapp.com",
  projectId: "cart-a0dd7",
  storageBucket: "cart-a0dd7.appspot.com",
  messagingSenderId: "1043973469677",
  appId: "1:1043973469677:web:45cf38ce06e04115c4e3e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//serviceWorker.unregister();


