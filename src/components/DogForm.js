import React from "react";
import { connect } from "react-redux";
import { addDog } from "../actions/addDog";
import { Form, Button } from "react-bootstrap";

// will be a controlled form (i.e. state), which needs to be a class component
class DogForm extends React.Component {
  state = {
    name: "",
    age: "",
    gender: "female",
    breed: "",
    notes: ""
  };

  // have to add state (locally here, instead of in Redux store) so this form below is a controlled form
  // if want to edit this info, makes sense to have redux store state instead

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDog(this.state);

    this.setState({
      name: "",
      age: "",
      gender: "",
      breed: "",
      notes: ""
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <h4>Add a New Dog Client</h4>
          <Form.Group controlId="newDogName">
            <Form.Label>Dog's Name</Form.Label>
            <Form.Control type="input" value={this.state.name} name="name" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="newDogAge">
            <Form.Label>Dog's Age</Form.Label>
            <Form.Control type="input" value={this.state.age} name="age" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="newDogGender">
            <Form.Label>Dog's Gender</Form.Label>
            <Form.Control as="select" size="sm" value={this.state.gender} name="gender" onChange={this.handleChange}>
              <option></option>
              <option>Female</option>
              <option>Male</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="newDogBreed">
            <Form.Label>Dog's Breed</Form.Label>
            <Form.Control
              type="input" value={this.state.breed} name="breed" onChange={this.handleChange}
              placeholder="example:  Golden Retriever"
            />
          </Form.Group>
          <Form.Group controlId="newDogNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea" value={this.state.notes} name="notes" onChange={this.handleChange}
              rows={3}
              placeholder="example:  Sparky is aggressive toward other dogs."
            />
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addDog })(DogForm);
