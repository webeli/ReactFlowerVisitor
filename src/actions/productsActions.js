export function loadProductsSuccess(data) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: data
    }
}

export function clearProducts() {
    return {
        type: 'CLEAR_PRODUCTS',
        payload: []
    }
}

export function getProducts() {
    return function(dispatch, getState) {
        const state = getState();
        const bucket = state.bucket;
        let productsArray = [];
        Object.keys(bucket).map((florist)=>{
            if (bucket[florist].products) {
                const floristName = bucket[florist].settings_account.name;
                const floristFee = bucket[florist].settings_account.deliveryfee;
                const floristAdress = bucket[florist].settings_account.adress;
                const newProducts = Object.keys(bucket[florist].products).map((product) => {
                    return {
                        ...bucket[florist].products[product],
                        productKey:product,
                        floristKey:florist,
                        floristName:floristName,
                        floristFee:floristFee,
                        floristAdress:floristAdress
                    }
                });
                productsArray = [...productsArray, ...newProducts];
            }
        });
        dispatch(loadProductsSuccess(productsArray));
    }
}