import React from "react";
import { connect } from "react-redux";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { addReport } from "../actions/addReport";

class ReportForm extends React.Component {
  state = {
    date: "",
    pee: "",
    poop: "",
    comments: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReport(this.state, this.props.dog.id);
    this.props.toggleAddReport();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <h4>Add a Report</h4>
            <Form.Group controlId="formReportDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={this.state.date}
                name="date"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formReportPee">
                  <Form.Label>Did Dog Pee?</Form.Label>
                  <Form.Control
                    as="select"
                    size="sm"
                    value={this.state.pee}
                    name="pee"
                    onChange={this.handleChange}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formReportPoop">
                  <Form.Label>Did Dog Poop?</Form.Label>
                  <Form.Control as="select" size="sm">
                    value={this.state.pee}
                    name='poop' onChange={this.handleChange}
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formReportComments">
              <Form.Label>Notes from our walk</Form.Label>
              <Form.Control
                placeholder="Comments"
                name="comments"
                value={this.state.comments}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addReport })(ReportForm);
