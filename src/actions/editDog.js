export const editDog = (dog) => {
  //console.log(dog);
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch(`http://localhost:3000/api/v1/dogs/${dog.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(dog),
    })
      .then((response) => response.json())
      .then((dog) => {
          console.log('d')
          return dispatch({ type: "EDIT_DOG", payload: dog })
      });
    console.log('e')
  };
};
