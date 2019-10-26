import React from "react";
import ManagerProjects from "../components/ManagerProjects.js";
import InfoBar from "./infobar/infobar.js";
function ManagerContainer(props) {
  return (
    <React.Fragment>
      <InfoBar
        title={props.location.state.role}
        managername={
          props.location.state.firstName + " " + props.location.state.lastName
        }
      />
      <ManagerProjects userName={props.location.state.userName} />
    </React.Fragment>
  );
}

export default ManagerContainer;
