import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function ManagerProjects(props) {
  const [data, setData] = useState([]);
  const [loadflag, setLoadflag] = useState(false);

  useEffect(() => {
    axios.get("/api/manager").then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }, [loadflag]);

  const handleDelete = id => {
    axios.delete("/api/manager/id/" + id).then(response => {
      console.log(response);
      setLoadflag(!loadflag);
      console.log(loadflag);
    });
  };

  return (
    <React.Fragment>
      <Container>
        <h3>Manager - Projects View</h3>
        <Link
          to={{
            pathname: "/manageraddproject",
            state: { userName: props.userName }
          }}
        >
          <Button>Add a Project</Button>
        </Link>
        <Table
          style={{ fontFamily: "sanserif" }}
          striped
          bordered
          hover
          variant="light"
        >
          <thead style={{ backgroundColor: "gray" }}>
            <tr>
              <th>Project</th>
              <th>Deadline</th>
              <th>Hours Alloted</th>
              <th>Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(project => {
              return (
                <tr key={project._id}>
                  <td>{project.projectName}</td>
                  <td>{moment(project.deadLine).format("MM-DD-YYYY")}</td>
                  <td>{project.hoursAlloted}</td>
                  <td>{project.status}</td>
                  <td>{project.workDescription}</td>
                  <td>
                    <Button onClick={() => handleDelete(project._id)}>x</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default ManagerProjects;
