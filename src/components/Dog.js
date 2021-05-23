import React from 'react'
import {Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReportsContainer from '../containers/ReportsContainer';
import EditDog from './EditDog';


const Dog = (props) => {

    let dog = props.dog

    return (
        <div>
                <h2> {dog ? dog.name : null} </h2>
                    Age: <p> {dog ? dog.age : null} </p>
                    Gender: <p> {dog ? dog.gender : null} </p>
                    Breed: <p> {dog ? dog.breed : null} </p>
                    Notes: <p> {dog ? dog.notes : null} </p>
            
        </div>
    )
} 

export default Dog;