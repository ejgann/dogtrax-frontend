import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import DogsContainer from './containers/DogsContainer'
import './App.css';
import Homepage from './components/Homepage'
// import NavBar from './components/NavBar'


class App extends React.Component {
  render() {

    return (
      <Router>
        <div>
            {/* <NavBar /> */}
            <Homepage />
            <br></br>
          <Container >
            <DogsContainer />
          </Container>
          {/* <Container >
            <Jumbotron>
              <h1>DogTrax</h1>
            </Jumbotron>
          </Container> */}

          {/* <Container>
            
          </Container> */}
        </div>
      </Router>
    );
  }
}


export default App;

