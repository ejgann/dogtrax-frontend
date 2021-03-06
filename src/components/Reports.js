import React from "react";
import { Table } from "react-bootstrap";

const Reports = (props) => {
  return (
    <div>
      {/*if a dog has a report in props, then we will map over it to render the report. If don't include the 'props.reports &&', first time it renders as 'undefined'. */}
      <h3>Reports</h3>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Pee?</th>
                <th>Poop?</th>
                <th>Comments</th>
              </tr>
            </thead>

            <tbody>
      {props.reports &&
        props.reports.map((report) => (
              <tr key={report.id}>
                <td>{new Date(report.date).toLocaleDateString()}</td>
                <td>{report.pee === true ? "Yes" : "No"}</td>
                <td>{report.poop === true ? "Yes" : "No"}</td>
                <td>{report.comments}</td>
              </tr>
            ))} 
            </tbody>
          </Table>
    </div>
  );
};

export default Reports;
