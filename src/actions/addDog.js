export const addDog = (data) => {
    // our latest version of state from DogForm is what we are sending back to the database

    return (dispatch) => {
// passing in dispatch as an argument to function provided by thunk 
// dispatching data to reducer
// because of thunk, we can bring dispatch into addDog
    fetch('http://localhost::3000/api/v1/dogs', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })        

    }
}