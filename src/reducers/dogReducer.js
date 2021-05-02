function dogReducer(state = {dogs: []}, action) {
    switch (action.type) {
        case 'FETCH_DOGS':
        return {dogs: action.payload}
        // this is returning the new redux state
        // want the array from the fetch request to be returned

        default:
            return state
    }
}

export default dogReducer;
