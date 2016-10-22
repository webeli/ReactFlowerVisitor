import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import attributes from './attributesReducer';
import bucket from './bucketReducer';
import filter from './filterReducer';
import products from './productsReducer';

export default combineReducers({
    routing: routerReducer,
    attributes,
    bucket,
    filter,
    products
});