import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InfoBar from '../infobar/infobar';
import NavbarHeader from '../navbar/navbar';

class TimeSheetForm extends React.Component {

    render() {
        return(
            <React.Fragment>
                <NavbarHeader />
                <InfoBar title = "Add Work" />
                <Container>
                    <Form.Group controlId="project_name"> 
                        <Form.Label>Project</Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Name" />
                    </Form.Group>

                    <Form.Group controlId="work_assigned"> 
                        <Form.Label>Work Assigned</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group controlId="allotted_hours"> 
                        <Form.Label>Alloted Hours</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group controlId="hours_worked"> 
                        <Form.Label>Hours Worked</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group controlId="allotted_hours"> 
                        <Form.Label>Alloted Hours</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select">
                        <option>Pending</option>
                        <option>Complete</option>
                        <option>In Progress</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">Add to Time Sheet</Button>
                </Container>
            </React.Fragment>
        )
    }
}

export default TimeSheetForm;