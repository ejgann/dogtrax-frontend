import React from 'react';
import Dog from './Dog';
// functional component since only going to render a list of dogs

const Dogs = (props) => {
    // going to access this list from DogsContainer

    return (
        <div>
            <h2>Dogs</h2>
            {props.dogs.map(dog => 
                <div key={dog.id}><Dog dog={dog} /></div>)}
        </div>
        // iterating over dogs in store; for each dog, want to create a dog component and must accept a dog as props
    )
    
}

export default Dogs