import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchDogs } from "../actions/fetchDogs";
import Dogs from "../components/Dogs";
import DogContainer from "./DogContainer";
import DogForm from "../components/DogForm";
import { Form, FormControl, Button } from 'react-bootstrap';


class DogsContainer extends React.Component {
  
  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({query: event.target.value})
  }

  dynamicSearch = () => {
    return this.props.dogs.filter(dog => {
      return dog.name.toLowerCase().includes(this.state.query.toLowerCase())
    })
  }
  
  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormControl type="text" value={this.state.query} placeholder="Search for a Dog..." className="mr-sm-2" onChange={this.handleChange} />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <br></br>

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
              <Dogs {...routerProps} dogs={this.dynamicSearch()} />
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
