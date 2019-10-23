import React, { Component } from "react";

import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
// import Jumbotron from "./components/Jumbotron";
import Signup from "./components/Signup-Login/sign-up";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './router';


class App extends Component {
    state = {
        firstName: "",
        role: ""
    }

    render() {
        return (

            <Router>
                <Container>
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/sign-up" component={Signup} />
                    <Route exact path="/welcome" component={Welcome} />
                </Container>
            </Router>

          <Routes />

        )
    }
}

export default App;