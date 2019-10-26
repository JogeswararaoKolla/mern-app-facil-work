import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

class ManagerAddWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: "",
      workerDescription: "",
      workerDeadLine: "",
      labourHours: "",
      remarks: "",
      userslist: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/users/")
      .then(response => {
        console.log(response.data);
        this.setState({
          userslist: response.data
            .filter(userObj => userObj.role === "worker")
            .map(worker => worker.userName)
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

  handleClick = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="workerId">
              <Form.Label>Worker Name:</Form.Label>
              <Form.Control
                as="select"
                name="worker"
                value={this.state.worker}
                onChange={this.handleInputChange}
                placeholder="Enter Worker Name"
              >
                <option></option>
                <option>default</option>
                {this.state.userslist.map(user => (
                  <option> {user}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="workerDescriptionId">
              <Form.Label>Work Description</Form.Label>
              <Form.Control
                type="text"
                name="workerDescription"
                value={this.state.workerDescription}
                onChange={this.handleInputChange}
                placeholder="Enter Work Description"
              />
            </Form.Group>
            <Form.Group controlId="workerDeadLineId">
              <Form.Label>Work Deadline</Form.Label>
              <Form.Control
                type="date"
                name="workerDeadLine"
                value={this.state.workerDeadLine}
                onChange={this.handleInputChange}
                placeholder="Enter Work Deadline"
              />
            </Form.Group>
            <Form.Group controlId="labourHoursId">
              <Form.Label>Labour Hours</Form.Label>
              <Form.Control
                type="text"
                name="labourHours"
                value={this.state.labourHours}
                onChange={this.handleInputChange}
                placeholder="Enter Labour Hours"
              />
            </Form.Group>
            <Form.Group controlId="remarksId">
              <Form.Label>Remarks </Form.Label>
              <Form.Control
                type="text"
                name="remarks"
                value={this.state.remarks}
                onChange={this.handleInputChange}
                placeholder="Enter remarks here"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClick}>
              Add worker
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ManagerAddWorker;