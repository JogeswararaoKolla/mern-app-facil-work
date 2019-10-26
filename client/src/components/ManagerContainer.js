import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ManagerProjects from "../components/ManagerProjects.js";
function ManagerContainer(props) {
  return (
    <React.Fragment>
      <ManagerProjects userName={props.location.state.userName} />
    </React.Fragment>
  );
}

export default ManagerContainer;
