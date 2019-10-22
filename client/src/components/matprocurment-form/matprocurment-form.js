import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InfoBar from '../infobar/infobar';
import NavbarHeader from '../navbar/navbar';

class MatProcurmentForm extends React.Component {
    render(){
        return(
            <React.Fragment>
                <NavbarHeader />
                <InfoBar title = "Add Material" />
                <Container>
                    <Form.Group controlId="project_name"> 
                        <Form.Label>Project</Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Name" />
                    </Form.Group>
                    <Form.Group controlId="work_assigned"> 
                        <Form.Label>Work Assigned</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group controlId="dead_line"> 
                        <Form.Label>Dead Line</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="material"> 
                        <Form.Label>Material</Form.Label>
                        <Form.Control type="text" placeholder="Enter Material" />
                    </Form.Group>
                    <Form.Group controlId="work_assigned"> 
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Material</Button>
                </Container>
            </React.Fragment>
        )
    }
}
export default MatProcurmentForm;