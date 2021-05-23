import React from 'react';
import {connect} from 'react-redux';
import {addDog} from '../actions/addDog';
import { Form, Container, FormGroup, FormControl, Button } from 'react-bootstrap';

// will be a controlled form (i.e. state), which needs to be a class component
class DogForm extends React.Component {
    
    state = {
        name: '', age: '', gender: 'female', breed: '', notes: ''
    }


    // have to add state (locally here, instead of in Redux store) so this form below is a controlled form
    // if want to edit this info, makes sense to have redux store state instead


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state);
        // when someone submits a new dog form, we are sending the dog information contained in state (captured in the controlled form) to our action addDog

        

        this.setState({
            name: '', age: '', gender: '', breed: '', notes: ''
        })
        // sets state back to initial state after form is submitted
    }

    
    render() {
        return (
            <div>
                <Form>
                    <h4>Add a New Dog Client</h4>
                    <Form.Group controlId="newDogName">
                        <Form.Label>Dog's Name</Form.Label>
                        <Form.Control type="input" />
                    </Form.Group>
                    <Form.Group controlId="newDogAge">
                        <Form.Label>Dog's Age</Form.Label>
                        <Form.Control type="input" />
                    </Form.Group>
                    <Form.Group controlId="newDogBreed">
                        <Form.Label>Dog's Breed</Form.Label>
                        <Form.Control type="input" placeholder="example:  Golden Retriever"/>
                    </Form.Group>
                    <Form.Group controlId="newDogNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="example:  Sparky is aggressive toward other dogs." />
                    </Form.Group>
                    <Button variant="primary">Update</Button>
                </Form>

            </div>
 
        )
    }
}

export default connect(null, {addDog})(DogForm);