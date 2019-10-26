import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InfoBar from '../infobar/infobar';
import axios from "axios";

class MatProcurmentForm extends React.Component {

    state = {
        project_name : "",
        work_assigned : "",
        dead_line : "",
        material : "",
        quantity : ""
    };

    handleClick = e => {
        e.preventDefault();
        console.log(e);
        console.log(this.state);
        const materialProcurement = {
          project_name: this.state.project_name,
          work_assigned: this.state.work_assigned,
          dead_line: this.state.dead_line,
          material: this.state.material,
          quantity: this.state.quantity
        };
        axios
          .post("/api/material", materialProcurement)
          .then(response => console.log(response))
          .catch(error => console.log(error));
      };
    
    // componentDidMount() {
    // }

    handleInputChange = event => {
        event.preventDefault();
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <React.Fragment>
                <InfoBar title = "Add Material" />
                <Container>
                    <Form.Group controlId="project_name"> 
                        <Form.Label>Project</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleInputChange} 
                        placeholder="Enter Project Name" />
                    </Form.Group>
                    <Form.Group controlId="work_assigned"> 
                        <Form.Label>Work Assigned</Form.Label>
                        <Form.Control 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group controlId="dead_line"> 
                        <Form.Label>Dead Line</Form.Label>
                        <Form.Control 
                        type="date"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="material"> 
                        <Form.Label>Material</Form.Label>
                        <Form.Control 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="Enter Material" />
                    </Form.Group>
                    <Form.Group controlId="quantity"> 
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control 
                        type="number"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleClick} >Add Material</Button>
                </Container>
            </React.Fragment>
        )
    }
}
export default MatProcurmentForm;