import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InfoBar from "../infobar/infobar";
import axios from "axios";

class ManagerInputForm extends React.Component {
  state = {
    project_name: "",
    work_assigned: "",
    worker: "",
    dead_line: "",
    hours_alloted: "",
    userslist: []
  };
  handleClick = e => {
    e.preventDefault();
    console.log(e);
    console.log(this.state);
  };

  componentDidMount() {
    axios
      .get("/api/users/")
      .then(response => {
        this.setState({
          userslist: response.data.map(userObj => userObj.username)
        });
      })
      .catch(error => console.log(error));
  }

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
        <InfoBar title="Manager Input View" />
        <Container>
          <Form.Group controlId="project_name">
            <Form.Label>Project Name</Form.Label>
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
              value={this.state.work_assigned}
              onChange={this.handleInputChange}
              placeholder="Enter Description"
            />
          </Form.Group>

          <Form.Group controlId="worker">
            <Form.Label>Worker</Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="worker"
              value={this.state.worker}
              onChange={this.handleInputChange}
              placeholder="Enter Team Member"
            >
              {this.state.userslist.map(user => (
                <option> {user}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              name="dead_line"
              value={this.state.dead_line}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="hours_alloted">
            <Form.Label>Hours Alloted</Form.Label>
            <Form.Control
              type="number"
              name="hours_alloted"
              value={this.state.hours_alloted}
              onChange={this.handleInputChange}
              placeholder="Enter man hours estimated to complete task"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleClick}>
            Add to Project list
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default ManagerInputForm;
