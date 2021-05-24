import React from "react";

const Reports = (props) => {
  return (
    <div>
      {/*if a dog has a report in props, then we will map over it to render the report. If don't include the 'props.reports &&', first time it renders as 'undefined'. */}
      <h3>Reports</h3>
      {props.reports &&
        props.reports.map((report) => (
          <li key={report.id}>
            {report.date} - {report.pee === true ? "Yes" : "No"} -{" "}
            {report.poop === true ? "Yes" : "No"} - {report.comments}
          </li>
        ))}
    </div>
  );
};

export default Reports;
