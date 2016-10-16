export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_PRODUCTS": {
            state = {...state, ...action.payload};
            return state;
        }
        case "CLEAR_PRODUCTS": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};