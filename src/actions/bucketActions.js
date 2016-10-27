import * as firebase from 'firebase';
import * as helpers from '../lib/helpers';

export function loadBucketSuccess(data) {
    return {
        type: 'UPDATE_BUCKET',
        payload: data
    }
}

export function clearBucket() {
    return function(dispatch) {
        dispatch({
            type: 'CLEAR_BUCKET',
            payload: {}
        });
    }
}

export function getBucketForVisitor(visitor) {
    return function(dispatch) {
        const getBucketForVisitor = (floristsArray) => {
            const floristsArrayLength = floristsArray.length;
            let counter = 0;
            let bucket = {};
            floristsArray.forEach((floristKey)=> {
                const floristRef = firebase.database().ref('florists').child(floristKey);
                floristRef.once('value', (snap)=> {
                    bucket = {...bucket, [floristKey]:snap.val()};
                    counter++;
                    if (floristsArrayLength === counter) {
                        dispatch(loadBucketSuccess(bucket));
                    }
                });
            })
        };

        const allFloristsLocations = firebase.database().ref('settings_delivery');
        allFloristsLocations.once('value', (snap)=> {
            const floristsNerby = helpers.getFloristsNerby(snap.val(), visitor);
            getBucketForVisitor(floristsNerby);
        });
    }
}