import React from "react";
import { Container } from "../Grid";
import "./style.css";
import Table from 'react-bootstrap/Table';
import InfoBar from '../infobar/infobar';
import NavbarHeader from '../navbar/navbar';

class Manager1 extends React.Component {

    render(){
        return(
            <React.Fragment>
                <NavbarHeader />
                <InfoBar title="Manager Dash Board" />
                <Container>
                    <h3>Manager - Project View</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>                            
                            <th>Project</th>
                            <th>Deadline</th>
                            <th>Material</th>
                            <th>Status</th>
                            <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                <td>Project 1</td>
                                <td>Do template</td>
                                <td>5</td>
                                <td>In progress</td>
                                <td>Text</td>
                            </tr>
                            <tr>                                
                                <td>Project 2</td>
                                <td>Do template 2</td>
                                <td>5</td>
                                <td>Complete</td>
                                <td>Text</td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* <h3>Worker 2</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Project</th>
                            <th>Work Assigned</th>
                            <th>Allotted Hours</th>
                            <th>Worked Hours</th>
                            <th>Current Status</th>
                            </tr>
                        </thead>
                        <tbody> */}
                            {/* <tr>
                                <td>10/11/2019</td>
                                <td>Project 1</td>
                                <td>Do template</td>
                                <td>5</td>
                                <td>7</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>10/15/2019</td>
                                <td>Project 2</td>
                                <td>Do template 2</td>
                                <td>5</td>
                                <td>7</td>
                                <td>Completed</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </Container>
            </React.Fragment>
        )
    }
}

export default Manager1;