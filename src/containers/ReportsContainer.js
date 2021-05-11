import React, { Component } from 'react'
import Dog from '../components/Dog';
import ReportForm from '../components/ReportForm';
import Reports from '../components/Reports';

class ReportsContainer extends Component {
    render() {
        return (
            <div>
                <ReportForm />
                <Reports reports={this.props.dog && this.props.dog.reports}/>
            </div>
        )
    }
}

export default ReportsContainer;