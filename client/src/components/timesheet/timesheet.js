import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import InfoBar from '../infobar/infobar';


class TimeSheet extends React.Component {

    render(){
        return(
            <React.Fragment>
                <InfoBar title="Time Sheet" />
                <Container>
                    <h3>Worker 1</h3>
                    <a href="/add-timesheet">Add Work</a>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Project</th>
                            <th>Work Assigned</th>
                            <th>Allotted Hours</th>
                            <th>Hours Worked</th>
                            <th>Current Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                    </Table>
                    <h3>Worker 2</h3>
                    <a href="/add-timesheet">Add Work</a>
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
                        <tbody>
                            <tr>
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
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

export default TimeSheet;