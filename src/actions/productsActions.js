import * as firebase from 'firebase';

export function loadProductsSuccess(data) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: data
    }
}

export function clearProducts() {
    return {
        type: 'CLEAR_PRODUCTS',
        payload: {}
    }
}

export function arePointsNear(checkPoint, centerPoint, km) {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
}

export function getProducts(data) {
    return function(dispatch) {

        dispatch(clearProducts());

        const settings_delivery = firebase.database().ref('settings_delivery');
        settings_delivery.on('child_added', (snap) => {
            const florist = {lat:snap.val().latitude, lng:snap.val().longitude};
            const visitor = {lat:data.latitude, lng:data.longitude};
            const km = snap.val().radius;

            if (arePointsNear(visitor, florist, km)) {
                const floristRef = firebase.database().ref('florists').child(snap.key);
                floristRef.once('value', (snap) => {
                    //var floristData = {[snap.key]: snap.val()};
                    const products = snap.val().products;
                    const florist = snap.val().settings_account;

                    const newObj = Object.keys(products).map( (product) => {
                        return {...products[product], floristName:florist.name, deliveryfee:florist.deliveryfee}
                    });

                    dispatch(loadProductsSuccess(newObj));
                });
            }
        });
    }
}