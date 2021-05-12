import React from 'react'
import {Redirect} from 'react-router-dom';
import ReportsContainer from '../containers/ReportsContainer';


const Dog = (props) => {

    let dog = props.dogs[props.match.params.id - 1]
console.log(dog);

    return (
        <div className ="DogCard">

          <h2> {dog ? dog.name : null} </h2>
          Age: <p> {dog ? dog.age : null} </p>
          Gender: <p> {dog ? dog.gender : null} </p>
          Breed: <p> {dog ? dog.breed : null} </p>
          Notes: <p> {dog ? dog.notes : null} </p>
          <br></br>
            <ReportsContainer dog={dog}/>
        </div>
    )
} 

export default Dog;