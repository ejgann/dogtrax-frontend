import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addReport } from '../actions/addReport';
import Dog from './Dog';

class ReportForm extends Component {
    state = {
        form: {date: '', pee: '', poop: '', comments: ''},
        selectOption: ''
    }

    handleOptionChange = (event) => {
        this.setState({
            selectOption: event.target.value
        });
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // addReport(this.state, this.props.id)
    }
    
    render() {
        return (
            <div>
                <h2>Write a New Report for {this.props.dog.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Date:</label>

                    <br></br>
                    Pee?
                    <br></br>
                    <label>Yes</label>{' '}
                        <input
                            type='radio'
                            name='pee'
                            value={this.state.pee}
                            checked={this.state.selectOption === 'yes'}
                            onChange={this.handleOptionChange} />
                            {' '}
                        <label>No</label>{' '}
                        <input
                            type='radio'
                            name='pee'
                            value={this.state.pee}
                            checked={this.state.selectOption === 'no'}
                            onChange={this.handleOptionChange} />
                    <br></br>
                    Poop?
                    <br></br>
                    <label>Yes</label>{' '}
                        <input 
                            type='radio'
                            name='poop'
                            value={this.state.poop}
                            checked={this.state.selectOption === 'yes'}
                            onChange={this.handleOptionChange} />
                            {' '}
                    <label>No</label>{' '}
                        <input
                            type='radio'
                            name='poop'
                            value={this.state.poop}
                            checked={this.state.selectOption === 'no'}
                            onChange={this.handleOptionChange} />
                    <br></br>
                    <label>Comments:</label>{' '}
                        <textarea placeholder='Comments' 
                        name='comments'
                        value={this.state.comments} 
                        onChange={this.handleChange}></textarea>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
// date, pee, poop, comments

export default connect(null)(ReportForm);