import * as firebase from 'firebase';

export function loadProductsSuccess(data) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: data
    }
}

export function getProducts() {
    return function(dispatch) {
        const codeRef = firebase.database().ref('products');
        codeRef.on('value', (snap) => {
            dispatch(loadProductsSuccess(snap.val()));
        });
    }
}