import React, { Component } from "react";
import { Container, Form, Button, Row, Col, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      password: "",
      role: "",
      message: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .get("/api/users/name/" + this.state.userName)
      .then(response => {
        console.log(response.data);
        if (response.data.length) {
          this.setState({ message: "User Name already exists!" });
        } else {
          axios
            .post("/api/users/", {
              userName: this.state.userName,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              password: this.state.password,
              role: this.state.role
            })
            .then(response => {
              console.log(response);
              alert("User Signup Sucessful");
              this.setState({
                redirectTo: "/"
              });
            })
            .catch(error => {
              console.log("API POST /api/users/ Route Error");
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log("API GET /api/users/name  Route Error");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container>
          <Jumbotron>
            <h1 className="text-center">Welcome to Facil Work !</h1>
          </Jumbotron>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="userNameId">
                  <Form.Label>User Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    placeholder="userName"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="firstNameId">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="lastNameId">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="passwordId">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="roleId">
                  <Form.Label>Role:</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                  >
                    <option>Worker</option>
                    <option>Manager</option>
                  </Form.Control>
                </Form.Group>
                <p className="text" style={{ color: "red" }}>
                  {this.state.message}
                </p>
                <Button variant="primary" type="submit">
                  Signup
                </Button>
                <p className="pt-2">
                  Already have account click <a href="/">here</a>
                </p>
              </Form>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Signup;
