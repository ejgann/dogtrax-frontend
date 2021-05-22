import React from 'react'
import {Redirect} from 'react-router-dom';
import ReportsContainer from '../containers/ReportsContainer';
import EditDog from './EditDog';


const Dog = (props) => {

    // let dog = props.dogs[props.match.params.id - 1]
    let dog = props.dogs.filter(dog => dog.id == props.match.params.id)[0]
    
    console.log(dog)

    return (
        <div>

                <h2> {dog ? dog.name : null} </h2>
                    Age: <p> {dog ? dog.age : null} </p>
                    Gender: <p> {dog ? dog.gender : null} </p>
                    Breed: <p> {dog ? dog.breed : null} </p>
                    Notes: <p> {dog ? dog.notes : null} </p>
                 <br></br>
                 <button>Edit</button>
                 <br></br>
                <EditDog dog={dog}/>
                <br></br>
                <ReportsContainer dog={dog}/>
                <br></br>

        </div>
    )
} 

export default Dog;