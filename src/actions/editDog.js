export const editDog = (dog) => {
console.log(dog)
    return (dispatch) => {

        fetch(`http://localhost:3000/api/v1/dogs/${dog.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(dog)
        })        
        .then(response => response.json())
        .then(dog => dispatch({type: 'EDIT_DOG', payload: dog}))
    }
}