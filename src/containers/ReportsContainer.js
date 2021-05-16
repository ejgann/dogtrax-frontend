import React from 'react'
// import Dog from '../components/Dog'
import ReportForm from '../components/ReportForm'
import Reports from '../components/Reports'

class ReportsContainer extends React.Component {
    render() {
        return (
            <div>
                <ReportForm dog={this.props.dog}/><br/>
                <Reports reports={this.props.dog && this.props.dog.reports}/>
            </div>
        )
    }
}

export default ReportsContainer;