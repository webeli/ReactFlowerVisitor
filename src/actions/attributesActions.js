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

        let productsArrayAttributes = [];
        Object.keys(bucket).forEach((florist)=>{
            if (bucket[florist].products) {
                const currentFloristAttributes = Object.keys(bucket[florist].products).map((product) => {
                    return {...bucket[florist].products[product].attributes};
                });
                productsArrayAttributes.push(...currentFloristAttributes);
            }
        });

        let colours = {};
        let types = {};
        let events = {};
        productsArrayAttributes.forEach((prodAttributes)=> {
            colours = Object.assign({}, colours, prodAttributes.colours);
            types = Object.assign({}, types, prodAttributes.types);
            events = Object.assign({}, events, prodAttributes.events);
        });
        dispatch(loadAttributesSuccess({colours:colours, types:types, events:events}));
    }
}