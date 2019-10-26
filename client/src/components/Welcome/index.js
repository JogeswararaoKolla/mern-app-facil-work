import React from "react";
import InfoBar from "../infobar/infobar.js";

function Welcome(props) {
  console.log(props);
  return (
    <div>
      <InfoBar />
      <h1>
        {props.location.state.userName} {props.location.state.role}{" "}
      </h1>
    </div>
  );
}

export default Welcome;
