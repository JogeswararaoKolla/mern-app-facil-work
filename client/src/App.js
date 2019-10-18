import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import Worker from "./components/Worker"

class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
           <Container>
               <Nav />
               <Jumbotron />
               <Row>
                   <Col size="md-12">
                       <Worker />
                   </Col>
               </Row>
           </Container>
            
        )
    }
}

export default App;