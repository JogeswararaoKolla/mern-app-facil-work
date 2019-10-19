import React, { Component } from "react";
import { Container, Row, Col } from "./components/Grid";
import Login from "./components/Signup-Login/login-form";

class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
           <Container>
               <Row>
                   <Col size="md-6">
                       <Login />
                    </Col>
               </Row>
           </Container>
        )
    }
}

export default App;