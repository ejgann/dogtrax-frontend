import React from 'react'
// import Dog from '../components/Dog'
// import ReportForm from '../components/ReportForm'
import Reports from '../components/Reports'

class ReportsContainer extends React.Component {
    render() {
        return (
            <div>
                <Reports reports={this.props.dog && this.props.dog.reports}/>
                {/* <ReportForm dog={this.props.dog}/><br/> */}
            </div>
        )
    }
}

export default ReportsContainer;