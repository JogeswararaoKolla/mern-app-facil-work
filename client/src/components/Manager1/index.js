import React, { useState, useEffect } from "react";
import { Container } from "../Grid";
import "./style.css";
import Table from "react-bootstrap/Table";
import InfoBar from "../infobar/infobar";
import NavbarHeader from "../navbar/navbar";
import axios from "axios";
import moment from "moment";

function Manager1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/manager").then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <InfoBar title="Manager Dash Board" />
      <Container>
        <h3>Manager - Project View</h3>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Project</th>
              <th>Deadline</th>
              <th>Worker</th>
              <th>hours_alloted</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map(project => {
              return (
                <tr>
                  <td>{project.project_name}</td>
                  <td>{moment(project.dead_line).format("MM-DD-YYYY")}</td>
                  <td>{project.worker}</td>
                  <td>{project.hours_alloted}</td>
                  <td>{project.status}</td>
                  <td>{project.work_assigned}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default Manager1;
