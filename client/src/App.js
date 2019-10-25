import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
import Signup from "./components/Signup-Login/sign-up";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/user/').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                {this.state.loggedIn &&
                    <p>Welcome to Facil Work, {this.state.username}!</p>
                }
                <Router>
                    <Container>
                        <Route
                            exact path="/home"
                            component={Home} />
                        <Route
                            exact path="/"
                            omponent={LoginForm} />
                        <Route
                            exact path="/sign-up"
                            component={Signup} />
                    </Container>
                </Router>
            </div>


        )
    }
}

export default App;