import React from "react";
import { Table } from "react-bootstrap";

const Reports = (props) => {
  return (
    <div>
      {/*if a dog has a report in props, then we will map over it to render the report. If don't include the 'props.reports &&', first time it renders as 'undefined'. */}
      <h3>Reports</h3>
      {props.reports &&
        props.reports.map((report) => (
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
              <tr key={report.id}>
                {/* <td>{new Intl.DateTimeFormat("en-US", {
                  year: "numeric", month: "long", day: "2-digit"}).format({report.date})}</td> */}
                <td>{report.date}</td>
                <td>{report.pee === true ? "Yes" : "No"}</td>
                <td>{report.poop === true ? "Yes" : "No"}</td>
                <td>{report.comments}</td>
              </tr>
            </tbody>
          </Table>
        ))}
    </div>
  );
};

export default Reports;
