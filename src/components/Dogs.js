import React from 'react';
// functional component since only going to render a list of dogs

const Dogs = (props) => {
    // going to access this list from DogsContainer

    return (
        <div>
            <h2>Dogs</h2>
            {props.dogs.map(dog => <li key={dog.id}>{dog.name} - age: {dog.age} - gender: {dog.gender} - breed: {dog.breed} - {dog.notes}</li>)}
        </div>
    )
    
}

export default Dogs