function dogReducer(state = { dogs: [] }, action) {
  switch (action.type) {
    case "FETCH_DOGS":
      return { dogs: action.payload };
    // this is returning the new redux state
    // want the array from the fetch request to be returned

    case "ADD_DOG":
      return { ...state, dogs: [...state.dogs, action.payload] };
    // spread operator maintains all existing dogs currently in state
    // dogs key value pair incorporates all existing dogs in state while adding the newly created dog
    case "ADD_REPORT":
      let dogs = state.dogs.map((dog) => {
        if (dog.id === action.payload.dog_id) {
          return { ...dog, reports: [...dog.reports, action.payload] };
        } else {
          return dog;
        }
      });
      return { ...state, dogs: dogs };

    // utilizing original dogs array coming in at top from state
    // iterating through them, checking if dog id from backend matches current dog id in iteration
    // if it matches, want to replace that dog; if not, return existing dog

    // ALTERNATIVELY...
    // going into a dog's reports and replacing the reports

    case "EDIT_DOG":
      let updatedDogs = state.dogs.map((dog) => {
        if (dog.id === action.payload.id) {
          return action.payload;
        } else {
          return dog;
        }
      });
      return { ...state, dogs: updatedDogs };

    default:
      return state;
  }
}

export default dogReducer;
