import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css";

function Worker() {
    render() {
        return (
            <React.Fragment>
                <NavbarHeader />
                <InfoBar title="Worker" />
                <Container>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Work Assigned</th>
                                <th>Deadline</th>
                                <th>Material</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Phoenix Hospital</td>
                                <td>6 new rooms</td>
                                <td>11/23/19</td>
                                <td>Steel, metal, concrete</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Chandler Sidewalk</td>
                                <td>300 ft</td>
                                <td>11/15/19</td>
                                <td>Concrete, assfault</td>
                                <td>35</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}



export default Worker;