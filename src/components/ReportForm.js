import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addReport } from '../actions/addReport';
import Dog from './Dog';


class ReportForm extends Component {
    state = {
        date: '', pee: '', poop: '', comments: ''
    }

    
    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addReport(this.state, this.props.dog.id)
        this.setState({
            date: '', pee: '', poop: '', comments: ''
        })
    }
    
    render() {
        return (
            <div>
                <h4>Write a New Report</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Date:</label>
                    <br></br>
                    <br></br>
                    <label>Did dog pee?</label> <select value={this.state.pee} name='pee' onChange={this.handleChange}>
                        <option value=''></option>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                        </select>

                        <br></br>
                        <br></br>

                        <label>Did dog poop?</label> <select value={this.state.poop} name='poop' onChange={this.handleChange}>
                        <option value=''></option>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                        </select>
                    <br></br>
                    <label>Comments:</label>{' '}
                        <textarea placeholder='Comments' 
                        name='comments'
                        value={this.state.comments} 
                        onChange={this.handleChange}></textarea>
                    <br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addReport})(ReportForm);