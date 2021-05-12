import React from 'react'

const Reports = (props) => {
    console.log(props);
    
    return (
        <div>
            <h3>Reports</h3>
            {/* if a dog has a report in props, then we will map over it to render the report. If don't include the 'props.reports &&', first time it renders as 'undefined'. */}
                {props.reports && props.reports.map(report =>
                <li key={report.id}>
                    {report.date} - {report.pee} - {report.poop} - {report.comments}
                </li>)}
        </div>
    )
}

export default Reports;