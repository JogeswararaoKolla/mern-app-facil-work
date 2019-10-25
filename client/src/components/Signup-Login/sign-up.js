<<<<<<< HEAD
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./style.css";
=======
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
>>>>>>> 7b07a87acbd86a9c039c68c42c22b54ad041dbd4

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      role: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: , role");
    console.log(this.state.username);
    console.log(this.state.firstName);
    console.log(this.state.role);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/api/users/", {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        role: this.state.role
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("Succesful Sign-up " + this.state.role);
          this.setState({
            //redirect to login page
            redirectTo: "/"
          });
        } else {
<<<<<<< HEAD
          console.log("Try again!...Please?");
=======
            return (
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-4">
                            <div class="card">
                                <article class="card-body">
                                    <a href="/" type="submit" class="float-right btn btn-outline-primary">Login </a>
                                    <h4 class="card-title mb-4 mt-1">Sign-up </h4>
                                    <form>
                                        <div class="form-group">
                                            <div>
                                                <label htmlFor="username">Username: </label>
                                            </div>
                                            <input className="form-control"
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label htmlFor="firstName">First Name: </label>
                                            </div>
                                            <input className="form-control"
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label htmlFor="lastName">Last Name: </label>
                                            </div>
                                            <input className="form-control"
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label htmlFor="password">Password: </label>
                                            </div>
                                            <input className="form-control"
                                                type="text"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label content="center" htmlFor="role">Role: </label>
                                            </div>
                                            <select class="form-control">
                                                <option>Worker</option>
                                                <option>Manager</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign up </button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            )
>>>>>>> 7b07a87acbd86a9c039c68c42c22b54ad041dbd4
        }
      })
      .catch(error => {
        console.log("Signup error: ");
        console.log(error);
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-sm-4">
              <div class="card">
                <article class="card-body">
                  <a
                    href="/"
                    type="submit"
                    class="float-right btn btn-outline-primary"
                  >
                    Login{" "}
                  </a>
                  <h4 class="card-title mb-4 mt-1">Sign-up </h4>
                  <form>
                    <div class="form-group">
                      <div>
                        <label htmlFor="username">Username: </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <div>
                        <label htmlFor="firstName">First Name: </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <div>
                        <label htmlFor="lastName">Last Name: </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <div>
                        <label htmlFor="password">Password: </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <div>
                        <label content="center" htmlFor="role">
                          Role:{" "}
                        </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        id="role"
                        name="role"
                        placeholder="Role"
                        value={this.state.role}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                        onClick={this.handleSubmit}
                      >
                        Sign up{" "}
                      </button>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Signup;
