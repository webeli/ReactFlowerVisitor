export function updateFilterColours(value) {
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_FILTER_COLOURS',
            payload: value
        });
    }
}
export function updateFilterTypes(value) {
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_FILTER_TYPES',
            payload: value
        });
    }
}
export function updateFilterEvents(value) {
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_FILTER_EVENTS',
            payload: value
        });
    }
}