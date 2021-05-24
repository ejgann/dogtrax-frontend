export const addDog = (data) => {
  // the latest version of state from DogForm is what is being sent back to the database

  return (dispatch) => {
    // passing in dispatch as an argument to function provided by thunk
    // dispatching data to reducer
    // because of thunk, can bring dispatch into addDog
    fetch("http://localhost:3000/api/v1/dogs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dog) => dispatch({ type: "ADD_DOG", payload: dog }));
    // want to dispatch the data that is being created
    // dispatch object being sent to reducer must contain the 'type:'; payload is the created dog object, which updates the store
  };
};
