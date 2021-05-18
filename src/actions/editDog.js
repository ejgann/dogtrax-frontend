export const editDog = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/dogs/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dog => dispatch({type: 'EDIT_DOG', payload: dog}))
    }
}