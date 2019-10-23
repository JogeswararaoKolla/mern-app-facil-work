import React from "react";

function Welcome(props) {
  console.log(props.userDetails);
  return (
    <div>
      <h1>Welcome {props.userDetails.username}</h1>
    </div>
  );
}

export default Welcome;
