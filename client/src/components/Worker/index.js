import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css";

function Worker() {
    return (
        <div>
            <Container>
                <Col size="md-8">
                    <Row>
                        <h1>Hello</h1>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Worker;