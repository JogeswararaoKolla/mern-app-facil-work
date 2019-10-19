import React, { Component } from "react";
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Signup from "./components/Signup-Login/sign-up";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
            <Router>
                <Container>
                    <Nav />
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/sign-up" component={Signup} />
                    <Route exact path="/welcome" component={Welcome} />
                </Container>
            </Router>
        )
    }
}

export default App;