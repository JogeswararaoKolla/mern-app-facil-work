import React from "react";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import moment from "moment";

class InfoBar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    var now = moment().format("MM-DD-YYYY");
    return (
      <React.Fragment>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link as="h5">Date: {now} </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="h5">{this.props.title}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="h5">{this.props.managername}</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
      </React.Fragment>
    );
  }
}

export default InfoBar;
