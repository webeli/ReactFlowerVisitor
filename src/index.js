import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBeThZ8uvX1LcLq3rCyKhPRCBsS8Aa8Ud4",
    authDomain: "editor-8d808.firebaseapp.com",
    databaseURL: "https://editor-8d808.firebaseio.com",
    storageBucket: "editor-8d808.appspot.com",
    messagingSenderId: "95238276998"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);