export default function reducer(state={colours:[], types:[], events:[]}, action) {
    switch(action.type) {
        case "ADD_FILTER_COLOURS": {
            state = {...state, colours:[...state.colours, action.payload]};
            return state;
        }
        case "ADD_FILTER_TYPES": {
            state = {...state, types:[...state.types, action.payload]};
            return state;
        }
        case "ADD_FILTER_EVENTS": {
            state = {...state, events:[...state.events, action.payload]};
            return state;
        }
        case "REMOVE_FILTER_COLOURS": {
            state = {...state, colours:state.colours.filter(colour => colour !== action.payload)};
            return state;
        }
        case "REMOVE_FILTER_TYPES": {
            state = {...state, types:state.types.filter(type => type !== action.payload)};
            return state;
        }
        case "REMOVE_FILTER_EVENTS": {
            state = {...state, events:state.events.filter(event => event !== action.payload)};
            return state;
        }
        case "CLEAR_FILTER": {
            state = {colours:[], types:[], events:[]};
            return state;
        }
        default:
            return state;
    }
};