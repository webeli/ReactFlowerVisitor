import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const routingMiddleWare = routerMiddleware(browserHistory);

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk, routingMiddleWare)
    )
);