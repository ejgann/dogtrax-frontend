import React from 'react';
// import {connect} from 'react-redux';
import { Container, Jumbotron, Image } from 'react-bootstrap';
import DogsContainer from './containers/DogsContainer'
import ReportsContainer from './containers/ReportsContainer'
import './App.css';


class App extends React.Component {
  render() {

    return (
      <div className="App">
        {/* <Container className="container"> */}
          <Container >
            <Jumbotron>
              <h1>DogTrax</h1>
              
            </Jumbotron>
          </Container>

          <Container>
            <DogsContainer />
          </Container>
      </div>
    );
  }
}


export default App;

