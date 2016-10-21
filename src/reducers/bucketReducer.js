export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_BUCKET": {
            state = {...action.payload};
            return state;
        }
        case "CLEAR BUCKET": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};