import React from "react";
import { Button } from 'react-bootstrap';
import ReportsContainer from "./ReportsContainer";
import EditDog from "../components/EditDog";
import ReportForm from "../components/ReportForm";
import Dog from "../components/Dog";

class DogContainer extends React.Component {
    state = {
      isEditFormVisible: false,
      isAddReportFormVisible: false
    };

    toggleEdit = () => {
        this.setState({isEditFormVisible: !this.state.isEditFormVisible})
    }

    toggleAddReport = () => {
      this.setState({isAddReportFormVisible: !this.state.isAddReportFormVisible })
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
        <Button type="submit" variant="outline-primary" onClick={this.toggleEdit}>Edit Dog's Information</Button> {'  '} 
        <Button type="submit" variant="outline-primary" onClick={this.toggleAddReport}>Add a Report</Button>

        { this.state.isEditFormVisible ? (
        <EditDog dog={dog} />) : null }

        { this.state.isAddReportFormVisible ? (
          <ReportForm dog={dog}  />) : null }
        
        <br></br>
        <br></br>
        <ReportsContainer dog={dog} />
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default DogContainer;
