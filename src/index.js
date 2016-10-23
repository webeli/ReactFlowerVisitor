import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import MyApp from './components/MyApp';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCm577yx4uU0TW5g_uFQH3wg_fUjAHUp88",
    authDomain: "flowerpower-c349a.firebaseapp.com",
    databaseURL: "https://flowerpower-c349a.firebaseio.com",
    storageBucket: "flowerpower-c349a.appspot.com",
    messagingSenderId: "29712322543"
};
firebase.initializeApp(config);

const App = () => (
    <MuiThemeProvider>
        <MyApp />
    </MuiThemeProvider>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);