import React from "react";
import { Link } from "react-router-dom";

const Dogs = (props) => {
  return (
    <div>
      <h2>Dog Clients</h2>
      {props.dogs.map((dog) => (
        <li key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
        </li>
      ))}
    </div>

);
};

// iterating over dogs in store; for each dog, want to create a dog component and must accept a dog as props
export default Dogs;
