import React from "react";
import { connect } from "react-redux";
import { editDog } from "../actions/editDog";
import { Form, Button } from "react-bootstrap";

class EditDog extends React.Component {
  state = {
    name: this.props.dog.name,
    age: this.props.dog.age,
    gender: this.props.dog.gender,
    breed: this.props.dog.breed,
    notes: this.props.dog.notes,
  };


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let dog = { ...this.state, id: this.props.dog.id };
    this.props.editDog(dog);
    this.props.toggleEdit();
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <h4>Edit Dog's Information</h4>
          <Form.Group controlId="editDogName">
            <Form.Label>Dog's Name</Form.Label>
            <Form.Control
              name="name"
              type="input"
              defaultValue={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="editDogAge">
            <Form.Label>Dog's Age</Form.Label>
            <Form.Control
              name="age"
              type="input"
              defaultValue={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="editDogGender">
            <Form.Label>Dog's Gender</Form.Label>
            <Form.Control
              name="gender"
              defaultValue={this.state.gender}
              as="select"
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="editDogBreed">
            <Form.Label>Dog's Breed</Form.Label>
            <Form.Control
              name="breed"
              type="input"
              defaultValue={this.state.breed}
              onChange={this.handleChange}
              placeholder="example:  Golden Retriever"
            />
          </Form.Group>
          <Form.Group controlId="editDogNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              name="notes"
              as="textarea"
              rows={3}
              defaultValue={this.state.notes}
              onChange={this.handleChange}
              placeholder="example:  Sparky is aggressive toward other dogs."
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { editDog })(EditDog);
