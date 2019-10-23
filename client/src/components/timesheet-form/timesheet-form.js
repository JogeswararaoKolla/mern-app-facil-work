import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InfoBar from "../infobar/infobar";

class TimeSheetForm extends React.Component {
  state = {
    project_name: "",
    work_assigned: "",
    start_date: "",
    end_date: "",
    hours_worked: 0
  };
  handleClick = e => {
    e.preventDefault();
    console.log(e);
    console.log(this.state);
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // Input Element needs value and OnChange Attribute
  render() {
    return (
      <React.Fragment>
        <InfoBar title="Add Work" />
        <Container>
          <Form.Group controlId="project_name">
            <Form.Label>Project</Form.Label>
            <Form.Control
              type="text"
              name="project_name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Enter Project Name"
            />
          </Form.Group>

          <Form.Group controlId="work_assigned">
            <Form.Label>Work Assigned</Form.Label>
            <Form.Control
              type="text"
              name="work_assigned"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Enter Description"
            />
          </Form.Group>

          {/* <Form.Group controlId="allotted_hours">
            <Form.Label>Alloted Hours</Form.Label>
            <Form.Control type="number" />
          </Form.Group> */}

          <Form.Group controlId="start_date">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="start_date"
              value={this.state.start_date}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="end_date">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              value={this.state.end_date}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="hours_worked">
            <Form.Label>Hours Worked</Form.Label>
            <Form.Control
              type="number"
              name="hours_worked"
              value={this.state.hours_worked}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option>Pending</option>
              <option>Complete</option>
              <option>In Progress</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleClick}>
            Add to Time Sheet
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default TimeSheetForm;
