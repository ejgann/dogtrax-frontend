// container should render other components, pass them any necessary data
// typically class components since often need to have state, lifecycle methods, etc, which are only available in class components

import React from 'react'
import {connect} from 'react-redux';
import {fetchDogs} from '../actions/fetchDogs'
import DogForm from '../components/DogForm'
import Dogs from '../components/Dogs'

class DogsContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchDogs()
    }
    
    render() {
        return (
            <div>
                <DogForm />
                <Dogs />
            </div>

        )
    }


}

const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}

export default connect(mapStateToProps, {fetchDogs})(DogsContainer)
// since the goal is to show a list of dogs, we want to map State to props
// React doesn't expect/need mapStateToProps to function. It simply takes the first argument for connect() and knows that that means we want to connect to the Redux store and map whatever is brought in from props. The specifics are outlined in the mapStateToProps function above

// including {fetchDogs} inside connect arguments is equivalent to mapDispatchToProps