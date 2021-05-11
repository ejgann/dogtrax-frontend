function dogReducer(state = {dogs: []}, action) {
    switch (action.type) {
        case 'FETCH_DOGS':
            return {dogs: action.payload}
            // this is returning the new redux state
            // want the array from the fetch request to be returned

        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, action.payload]}
// spread operator maintains all existing dogs currently in state
// dogs key value pair incorporates all existing dogs in state while adding the newly created dog


        default:
            return state
    }
}

export default dogReducer;
