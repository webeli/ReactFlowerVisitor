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
    apiKey: "AIzaSyCm577yx4uU0TW5g_uFQH3wg_fUjAHUp88",
    authDomain: "flowerpower-c349a.firebaseapp.com",
    databaseURL: "https://flowerpower-c349a.firebaseio.com",
    storageBucket: "flowerpower-c349a.appspot.com",
    messagingSenderId: "29712322543"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);