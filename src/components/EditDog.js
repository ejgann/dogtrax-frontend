import React from 'react';
import {connect} from 'react-redux';
import {editDog} from '../actions/editDog';
import { Form, Container, FormGroup, FormControl, Button } from 'react-bootstrap';

class EditDog extends React.Component {
    
    state = {
        name: '',
        age: '',
        gender: '',
        breed: '', 
        notes: ''
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let dog = {...this.state, id: this.props.dog.id}
        this.props.editDog(dog)
        this.setState({
            name: '',
            age: '',
            gender: '',
            breed: '',
            notes: ''
        })
    }

    
    render() {
        return (
            <div>
                <Form>
                    <h4>Edit Dog's Information</h4>
                    <Form.Group controlId="editDogName">
                        <Form.Label>Dog's Name</Form.Label>
                        <Form.Control type="input" />
                    </Form.Group>
                    <Form.Group controlId="editDogAge">
                        <Form.Label>Dog's Age</Form.Label>
                        <Form.Control type="input" />
                    </Form.Group>
                    <Form.Group controlId="editDogBreed">
                        <Form.Label>Dog's Breed</Form.Label>
                        <Form.Control type="input" placeholder="example:  Golden Retriever"/>
                    </Form.Group>
                    <Form.Group controlId="editDogNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="example:  Sparky is aggressive toward other dogs." />
                    </Form.Group>
                    <Button variant="primary">Update</Button>
                </Form>

            </div>
        )
    }


}

export default connect(null, {editDog})(EditDog);