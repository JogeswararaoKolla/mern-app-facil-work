import React from "react";
import NavbarHeader from "../navbar/navbar.js";

function Welcome(props) {
  console.log(props);
  return (
    <div>
      <NavbarHeader />
      <h1>
        {props.location.state.userName} {props.location.state.role}{" "}
      </h1>
    </div>
  );
}

export default Welcome;
