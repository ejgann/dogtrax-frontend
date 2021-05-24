import React from "react";
import { Button } from 'react-bootstrap';
import ReportsContainer from "./ReportsContainer";
import EditDog from "../components/EditDog";
import Dog from "../components/Dog";

class DogContainer extends React.Component {
    state = { isEditFormVisible: false };

    toggleEdit = () => {
        this.setState({isEditFormVisible: !this.state.isEditFormVisible})
    }
  
    render() {
    // let dog = props.dogs[props.match.params.id - 1]
    let dog = this.props.dogs.filter(
      (dog) => dog.id == this.props.match.params.id
    )[0];

    

    console.log(dog);

    return (
      <div>
        <Dog dog={dog} />
        <Button type="submit" variant="outline-primary" onClick={this.toggleEdit}>Edit Dog's Information</Button>

        { this.state.isEditFormVisible ? (
        <EditDog dog={dog} />) : null }
        
        <br></br>
        <ReportsContainer dog={dog} />
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default DogContainer;
