import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Home </a>
      <a className="navbar-brand" href="/projects">Projects </a>
      <a className="navbar-brand" href="/login">Login </a>
    </nav>
  );
}

export default Nav;