import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./style.css";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            role: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: , role')
        console.log(this.state.username)
        console.log(this.state.firstName)
        console.log(this.state.role)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/api/users/', {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            role: this.state.role
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('Succesful Sign-up ' + this.state.role)
                    this.setState({ //redirect to login page
                        redirectTo: '/'
                    })
                } else {
                    console.log('Try again!...Please?')
                }
            }).catch(error => {
                console.log('Signup error: ')
                console.log(error)
            })
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
                                            <input className="form-input"
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
                                            <input className="form-input"
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
                                            <input className="form-input"
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
                                            <input className="form-input"
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
                                            <input className="form-input"
                                                type="text"
                                                id="role"
                                                name="role"
                                                placeholder="Role"
                                                value={this.state.role}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Sign up </button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>






                // <div className="SignupForm">
                //     <h4>Sign up</h4>
                //     <form className="form-horizontal">
                //         <div className="form-group">
                //             <div className="col-1 col-ml-auto">
                //                 <label className="form-label" htmlFor="username">Username</label>
                //             </div>
                //             <div className="col-3 col-mr-auto">
                //                 <input className="form-input"
                //                     type="text"
                //                     id="username"
                //                     name="username"
                //                     placeholder="Username"
                //                     value={this.state.username}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //         </div>
                //         <div className="form-group">
                //             <div className="col-1 col-ml-auto">
                //                 <label className="form-label" htmlFor="firstName">First Name </label>
                //             </div>
                //             <div className="col-3 col-mr-auto">
                //                 <input className="form-input"
                //                     type="text"
                //                     id="firstName"
                //                     name="firstName"
                //                     placeholder="First Name"
                //                     value={this.state.firstName}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //         </div>
                //         <div className="form-group">
                //             <div className="col-1 col-ml-auto">
                //                 <label className="form-label" htmlFor="lastName">Last Name</label>
                //             </div>
                //             <div className="col-3 col-mr-auto">
                //                 <input className="form-input"
                //                     type="text"
                //                     id="lastName"
                //                     name="lastName"
                //                     placeholder="Last Name"
                //                     value={this.state.lastName}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //         </div>
                //         <div className="form-group">
                //             <div className="col-1 col-ml-auto">
                //                 <label className="form-label" htmlFor="role">Role </label>
                //             </div>
                //             <div className="col-3 col-mr-auto">
                //                 <input className="form-input"
                //                     type="text"
                //                     id="role"
                //                     name="role"
                //                     placeholder="Role"
                //                     value={this.state.role}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //         </div>
                //         <div className="form-group">
                //             <div className="col-1 col-ml-auto">
                //                 <label className="form-label" htmlFor="password">Password: </label>
                //             </div>
                //             <div className="col-3 col-mr-auto">
                //                 <input className="form-input"
                //                     placeholder="password"
                //                     type="password"
                //                     name="password"
                //                     value={this.state.password}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //         </div>
                //         <div className="form-group">
                //             <div className="col-7"></div>
                //             <button
                //                 className="btn btn-primary col-1 col-mr-auto"
                //                 onClick={this.handleSubmit}
                //                 type="submit"
                //             >Sign up</button>
                //             <button
                //                 className="btn btn-primary col-1 col-mr-auto"
                //                 type="submit">
                //                 <a href="/"> I already have an account </a>
                //             </button>
                //         </div>
                //     </form>
                // </div>
            )
        }
    }
}

export default Signup;