export const addDog = (data) => {
    // the latest version of state from DogForm is what is being sent back to the database

    return (dispatch) => {
// passing in dispatch as an argument to function provided by thunk 
// dispatching data to reducer
// because of thunk, can bring dispatch into addDog
    fetch('http://localhost::3000/api/v1/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })        

    }
}