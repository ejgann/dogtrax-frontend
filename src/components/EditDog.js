import React from 'react';
import {connect} from 'react-redux';
import {editDog} from '../actions/editDog';

class EditDog extends React.Component {
    state = {
        name: '',
        age: '',
        gender: '',
        breed: '',
        notes: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let dog = {...this.state, id: this.props.dog.id}
        this.props.editDog(dog)
        this.setState({
            name: '',
            age: '',
            gender: '',
            breed: '',
            notes: ''
        })
    }
    
    
    render() {
        return (
            <div>
                <h4>Edit Dog's Information</h4>
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

    // EditDog.defaultProps = {
    //     dogs: {}
    // }

}

export default connect(null, {editDog})(EditDog);