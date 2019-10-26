import React from "react";
import ManagerProjects from "../components/ManagerProjects.js";
import NavbarHeader from "./navbar/NavbarHeader.js";
import { Jumbotron, Container } from "react-bootstrap";
function ManagerContainer(props) {
  return (
    <React.Fragment>
      <NavbarHeader
        title={props.location.state.role}
        managername={
          props.location.state.firstName + " " + props.location.state.lastName
        }
        userName={props.location.state.userName}
      />
      <Container>
        <Jumbotron>
          <h2 className="text-center">Manager Projects Dashboard</h2>
        </Jumbotron>
        <ManagerProjects
          userName={props.location.state.userName}
          firstName={props.location.state.firstName}
          lastName={props.location.state.lastName}
        />
      </Container>
    </React.Fragment>
  );
}

export default ManagerContainer;
