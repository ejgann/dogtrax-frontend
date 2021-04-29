import React from 'react';
import {connect} from 'react-redux';
import DogsContainer from './containers/DogsContainer'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1>DogTrax</h1>
        <DogsContainer />
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
