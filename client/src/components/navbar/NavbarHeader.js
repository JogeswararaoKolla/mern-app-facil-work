import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavbarHeader(props) {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Facil-work</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>{props.title + " " + props.managername}</Nav.Item>
            <Nav.Item>Sigin as {props.userName}</Nav.Item>
            <NavDropdown title="options" id="basic-nav-dropdown">
              <NavDropdown.Item>Timesheets</NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/">Logout</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarHeader;
