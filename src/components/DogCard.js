import React from 'react';
import ReportsContainer from '../containers/ReportsContainer';
import EditDog from './EditDog';
import {Card} from 'react-bootstrap';

const DogCard = (props) => {

    let dog = props.dog.id
    // let dog = props.dogs[props.match.params.id - 1]

    return (
        <>
            <Card>
            <Card.Title> {dog ? dog.name : null} </Card.Title>
            <Card.Body>
                Age: <p> {dog ? dog.age : null} </p>
                Gender: <p> {dog ? dog.gender : null} </p>
                Breed: <p> {dog ? dog.breed : null} </p>
                Notes: <p> {dog ? dog.notes : null} </p>
                    <br></br>
                    <ReportsContainer dog={dog}/>
                    <br></br>
                    <EditDog dog={dog}/>
            </Card.Body>
            </Card>
        </>
)
}

export default DogCard;