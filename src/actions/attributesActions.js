export function loadAttributesSuccess(data) {
    return {
        type: 'UPDATE_ATTRIBUTES',
        payload: data
    }
}

export function clearAttributes() {
    return {
        type: 'CLEAR_ATTRIBUTES',
        payload: {}
    }
}

export function getAttributes() {
    return function(dispatch, getState) {
        const state = getState();
        const bucket = state.bucket;

        Object.keys(bucket).forEach((florist)=>{
            let productsArrayAttributes = [];
            if (bucket[florist].products) {
                productsArrayAttributes = Object.keys(bucket[florist].products).map((product) => {
                    return {...bucket[florist].products[product].attributes};
                });
            }


        });
        //dispatch(loadAttributesSuccess(attributesObj));
    }
}