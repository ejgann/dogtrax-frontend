import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container, Jumbotron} from 'react-bootstrap';
import DogsContainer from './containers/DogsContainer'
import ReportsContainer from './containers/ReportsContainer'
import './App.css';
import NavBar from './components/NavBar'


class App extends React.Component {
  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Container >
            <Jumbotron>
              <h1>DogTrax</h1>
            </Jumbotron>
          </Container>

          <Container>
            <DogsContainer />
          </Container>
        </div>
      </Router>
    );
  }
}


export default App;

