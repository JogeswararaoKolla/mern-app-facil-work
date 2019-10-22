import React, { Component } from "react";
<<<<<<< HEAD
import Routes from './router';
import Manager1 from './components/Manager1';

=======
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Signup from "./components/Signup-Login/sign-up";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
>>>>>>> 8aa5418670a1dcc63b334d6af75a714b4bb31b45

class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
<<<<<<< HEAD
             <Routes/>
=======
            <Router>
                <Container>
                    <Nav />
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/sign-up" component={Signup} />
                    <Route exact path="/welcome" component={Welcome} />
                </Container>
            </Router>
>>>>>>> 8aa5418670a1dcc63b334d6af75a714b4bb31b45
        )
    }
}

export default App;