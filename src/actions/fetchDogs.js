export function fetchDogs() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/dogs')
    .then(resp => resp.json())
    .then(dogs => dispatch({
        type: 'FETCH_DOGS',
        payload: dogs
    }))
    }
}



// fetchDogs creates an actionObject, which is dispatched to reducer which will then create new version of state based on the action that is sent