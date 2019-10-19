import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

class NavbarHeader extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" className="justify-content-center">
                    <Navbar.Brand href="#home">FACIL WORK</Navbar.Brand>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavbarHeader;