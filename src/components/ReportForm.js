import React, { Component } from 'react'
import {connect} from 'react-redux'

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
    
    render() {
        return (
            <div>
                <form>
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

                </form>
            </div>
        )
    }
}
// date, pee, poop, comments

export default connect(null)(ReportForm);