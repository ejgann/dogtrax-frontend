import React from 'react';
import {connect} from 'react-redux';
import { Container, Jumbotron } from 'react-bootstrap';
import DogsContainer from './containers/DogsContainer'
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Container className="container">
          <Jumbotron>
            <h1>DogTrax</h1>
          </Jumbotron>
          <DogsContainer />
          </Container>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     dogs: state.dogs
//   }
// }

// export default connect(mapStateToProps, {fetchDogs})(App);
export default connect()(App);
