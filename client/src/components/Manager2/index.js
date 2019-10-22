import React from "react";
import { Container } from "../Grid";
import "./style.css";
import Table from 'react-bootstrap/Table';
import InfoBar from '../infobar/infobar';
import NavbarHeader from '../navbar/navbar';

class Manager2 extends React.Component {

    render(){
        return(
            <React.Fragment>
                <NavbarHeader />
                <InfoBar title="Manager Dash Board" />
                <Container>
                    <h3>Manager - Team Member View</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>                            
                            <th>Worker</th>
                            <th>Work</th>
                            <th>Deadline</th>
                            <th>Labor hours</th>
                            <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                <td>John Doe</td>
                                <td>Room 113 walls</td>
                                <td>10/26/2018</td>
                                <td>8</td>
                                <td>Current</td>
                            </tr>                            
                        </tbody>
                    </Table>                        
                </Container>
            </React.Fragment>
        )
    }
}

export default Manager2;