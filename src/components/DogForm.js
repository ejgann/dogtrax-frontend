import React from 'react';
import {connect} from 'react-redux';
import {addDog} from '../actions/addDog';

// will be a controlled form (i.e. state), which needs to be a class component
class DogForm extends React.Component {
    
    state = {
        name: '', age: '', gender: '', breed: '', notes: ''
    }
    // dropdown yes/no
    // form data

    // have to add state (locally here, instead of in Redux store) so this form below is a controlled form
    // if want to edit this info, makes sense to have redux store state instead


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state);
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Dog's Name:</label> <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br></br>

                    <label>Dog's Age:</label> <input type='text' placeholder='Age' value={this.state.age} name='age' onChange={this.handleChange}/><br></br>

                    <label>Dog's Gender:</label> <select value={this.state.gender} name='gender' onChange={this.handleChange}>
                        <option value=''></option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        </select><br></br>

                    <label>Dog's Breed:</label> <input type='text' placeholder='Breed' value={this.state.breed} name='breed' onChange={this.handleChange} />
                    <br></br>

                    <label>Special Notes:</label> <textarea placeholder='Notes' value={this.state.notes} name='notes' onChange={this.handleChange}></textarea>

                    <br></br>

                    <input type="submit"/><br></br>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDog})(DogForm);