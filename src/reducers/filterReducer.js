export default function reducer(state={colours:[], types:[], events:[]}, action) {
    switch(action.type) {
        case "UPDATE_FILTER_COLOURS": {
            state = {...state, colours:[...state.colours, action.payload]};
            return state;
        }
        case "UPDATE_FILTER_TYPES": {
            state = {...state, types:[...state.types, action.payload]};
            return state;
        }
        case "UPDATE_FILTER_EVENTS": {
            state = {...state, events:[...state.events, action.payload]};
            return state;
        }
        case "CLEAR_FILTER": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};