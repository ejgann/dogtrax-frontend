import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchDogs } from "../actions/fetchDogs";
import Dogs from "../components/Dogs";
import DogContainer from "./DogContainer";
import DogForm from "../components/DogForm";

class DogsContainer extends React.Component {
  
  componentDidMount() {
    this.props.fetchDogs();
  }

// search stuff
state = {   
  query: ''
};

handleChange = (event) => {
  this.setState({query: event.target.value})
};
dynamicSearch = () => {
  return this.props.dogs.filter(dog => dog.name.toLowerCase().includes(this.state.query.toLowerCase()))
}


// end search stuff



  render() {

    return (
      <div>
{/* search stuff */}
        <h2>Search Among Dogs</h2>
          <input type="text" value={this.state.query} placeholder="Search..." 
              onChange={this.handleChange} />
            <p>Search Results:</p>
            <Dogs dogs = {this.dynamicSearch()} />
{/* end search stuff */}

        <Switch>
          <Route path="/dogs/new" component={DogForm} />
          <Route
            path="/dogs/:id"
            render={(routerProps) => (
              <DogContainer {...routerProps} dogs={this.props.dogs} />
            )}
          />
          <Route
            path="/dogs"
            render={(routerProps) => (
              <Dogs {...routerProps} dogs={this.props.dogs} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

export default connect(mapStateToProps, { fetchDogs })(DogsContainer);
// since the goal is to show a list of dogs, we want to map State to props
// React doesn't expect/need mapStateToProps to function. It simply takes the first argument for connect() and knows that that means we want to connect to the Redux store and map whatever is brought in from props. The specifics are outlined in the mapStateToProps function above

// including {fetchDogs} inside connect arguments is equivalent to mapDispatchToProps
