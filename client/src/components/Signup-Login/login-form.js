import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
        event.preventDefault()
        console.log('handleSubmit')

        axios.get(`/api/users/name/${this.state.username}`)
            .then(response => {
                console.log('login response: ')
                console.log(response)
                // if (response.status === 200) {
                //     // update App.js state
                //     this.props.updateUser({
                //         loggedIn: true,
                //         username: response.data.username
                //     })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/welcome'
                })
                // }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{ pathname: this.state.redirectTo }}
          userDetails={this.state}
        />
        // <Welcome userDetails={this.state} />
      );
    } else {
      return (
        <div class="container ">
          <div class="row d-flex justify-content-center">
            <div class="col-sm-4">
              <div class="card">
                <article class="card-body">
                  <a
                    href="/sign-up"
                    type="submit"
                    class="float-right btn btn-outline-primary"
                  >
                    Sign up{" "}
                  </a>
                  <h4 class="card-title mb-4 mt-1">Log in </h4>
                  <form>
                    <div class="form-group">
                      <div>
                        <label htmlFor="username">Username: </label>
                      </div>
                      <input
                        className="form-input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <div>
                        <label content="center" htmlFor="password">
                          Password:{" "}
                        </label>
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
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                        onClick={this.handleSubmit}
                      >
                        Login{" "}
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

export default LoginForm;
