import React from 'react';
import {Route, Link} from 'react-router-dom';
import {CardDeck, Card, Image} from 'react-bootstrap';
import Dog from './Dog';
// functional component since only going to render a list of dogs

const Dogs = (props) => {
    // going to access this list from DogsContainer

    return (
        <div >
            <h2>Dogs</h2>
        {props.dogs.map(dog => 
            <CardDeck style={{width: '900', display: 'inline', flexDirection: 'row'}}>
                <Card bg='light' key={dog.id} style={{margin: '10px', flex: 1, float: 'left'}}>
                    {/* <Card.Header>{dog.name}</Card.Header> */}
                    <Card.Body>
                        <Card.Text>
                        <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )}
        </div>


                
        // iterating over dogs in store; for each dog, want to create a dog component and must accept a dog as props
    )
    
}

export default Dogs