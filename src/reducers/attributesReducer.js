export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_ATTRIBUTES": {
            state = {...action.payload};
            return state;
        }
        case "CLEAR_ATTRIBUTES": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};