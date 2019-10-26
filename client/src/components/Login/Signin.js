import React, { Component } from "react";
import { Container, Form, Button, Row, Col, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      message: "",
      redirectTo: null,
      userObject: {}
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .get("/api/users/name/" + this.state.userName)
      .then(response => {
        console.log(response.data);
        if (response.data.length) {
          if (response.data[0].password === this.state.password) {
            console.log(response.data[0].password);
            this.setState({ userObject: response.data[0] });
            console.log(this.state);
            this.setState({ redirectTo: "/managerprojects" });
            // window.location.replace("/welcome");
            // window.locaiton.replace  replaces the current path of the Applicaiton URL
          } else {
            this.setState({ message: "password not matching" });
          }
        } else {
          this.setState({ message: "User not exits" });
        }
      })
      .catch(error => {
        console.log("API GET /api/users/name  Route Error");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{ pathname: this.state.redirectTo, state: this.state.userObject }}
        />
      );
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
                <p className="text" style={{ color: "red" }}>
                  {this.state.message}
                </p>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
                <p className="pt-2">
                  Don't have account click <a href="/signup">here</a>
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

export default Signin;
