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

export default Dogs;
