export function updateFilterColours(value, checked) {
    return function(dispatch) {
        if (checked) {
            dispatch({
                type: 'ADD_FILTER_COLOURS',
                payload: value
            });
        } else {
            dispatch({
                type: 'REMOVE_FILTER_COLOURS',
                payload: value
            });
        }
    }
}
export function updateFilterTypes(value, checked) {
    return function(dispatch) {
        if (checked) {
            dispatch({
                type: 'ADD_FILTER_TYPES',
                payload: value
            });
        } else {
            dispatch({
                type: 'REMOVE_FILTER_TYPES',
                payload: value
            });
        }
    }
}
export function updateFilterEvents(value, checked) {
    return function(dispatch) {
        if (checked) {
            dispatch({
                type: 'ADD_FILTER_EVENTS',
                payload: value
            });
        } else {
            dispatch({
                type: 'REMOVE_FILTER_EVENTS',
                payload: value
            });
        }
    }
}
export function clearFilter() {
    return function(dispatch) {
        dispatch({
            type: 'CLEAR_FILTER',
            payload: {}
        });
    }
}