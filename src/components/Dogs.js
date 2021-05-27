import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {sortDogs} from '../actions/sortDogs';

const Dogs = (props) => {



  return (
    <div>
      <h2>Dog Clients</h2>
      <select onChange={(e) => props.sortDogs(e.target.value)}>
        <option value="name">
          Sort by name
        </option>
        <option value="age">
          Sort by age
        </option>
      </select>
      {props.dogs.map((dog) => (
        <li key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>  - {dog.age}
        </li>
      ))}
    </div>

);
};

// iterating over dogs in store; for each dog, want to create a dog component and must accept a dog as props
export default connect(null, {sortDogs})(Dogs);