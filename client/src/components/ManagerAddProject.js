import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InfoBar from "../components/infobar/infobar.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

class ManagerAddProject extends React.Component {
  state = {
    projectName: "",
    workDescription: "",
    deadLine: "",
    hoursAlloted: ""
  };
  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props);
    axios
      .post("/api/manager", {
        ...this.state,
        userName: this.props.location.state.userName
      })
      .then(response => {
        console.log(response.data);
        alert("Project created!");
        this.setState({
          projectName: "",
          workDescription: "",
          deadLine: "",
          hoursAlloted: ""
        });
      })
      .catch(error => console.log(error));
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
        <Container>
          <Jumbotron>
            <h3 className="text-center">Manager add Project View</h3>
          </Jumbotron>
          <Form.Group controlId="projectNameId">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="projectName"
              value={this.state.projectName}
              onChange={this.handleInputChange}
              placeholder="Enter Project Name"
            />
          </Form.Group>

          <Form.Group controlId="workDescriptionId">
            <Form.Label>Work Description</Form.Label>
            <Form.Control
              type="text"
              name="workDescription"
              value={this.state.workDescription}
              onChange={this.handleInputChange}
              placeholder="Enter Description"
            />
          </Form.Group>

          <Form.Group controlId="deadLineId">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              name="deadLine"
              value={this.state.deadLine}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="hoursAllotedId">
            <Form.Label>Hours Alloted</Form.Label>
            <Form.Control
              type="number"
              name="hoursAlloted"
              value={this.state.hoursAlloted}
              onChange={this.handleInputChange}
              placeholder="Enter man hours estimated to complete task"
            />
          </Form.Group>

          <Button variant="secondary" type="submit" onClick={this.handleClick}>
            Add to Project list
          </Button>
          <Link
            to={{
              pathname: "/managerprojects",
              state: {
                userName: this.props.location.state.userName,
                firstName: this.props.location.state.firstName,
                lastName: this.props.location.state.lastName,
                role: this.props.location.state.role
              }
            }}
          >
            <Button className="btn btn-secondary m-2">Projects</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default ManagerAddProject;
