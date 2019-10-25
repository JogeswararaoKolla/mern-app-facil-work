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
import Welcome from "./components/Welcome";
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";
import ManagerInputForm from "./components/ManagerInput/index.js";
import MatProcurmentForm from "./components/matprocurment-form/matprocurment-form";

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
                        exact path="/timesheet" 
                        component={TimeSheet} />
                        <Route 
                        exact path="/add-timesheet" 
                        component={TimeSheetForm} />
                        <Route 
                        exact path="/add-material" 
                        component={MatProcurmentForm} />
                        <Route 
                        exact path="/manager-input" 
                        component={ManagerInputForm} />
                        <Route 
                        exact path="/" 
                        component={LoginForm} />
                        <Route 
                        exact path="/sign-up" 
                        component={Signup} />
                        <Route 
                        exact path="/welcome" 
                        component={Welcome} />
                    </Container>
                </Router>
            </div>


        )
    }
}

export default App;
