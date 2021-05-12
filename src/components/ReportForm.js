import React, { Component } from 'react'
import {connect} from 'react-redux'

class ReportForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Date:</label>

                    <label>Pee?</label>

                    <label>Poop?</label>

                    <label>Comments:</label>

                </form>
            </div>
        )
    }
}
// date, pee, poop, comments

export default connect(null)(ReportForm);