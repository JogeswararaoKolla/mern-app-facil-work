import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function ManagerProjects(props) {
  const [data, setData] = useState([]);
  const [loadflag, setLoadflag] = useState(false);
  const [workerdata, setWorkerdata] = useState([]);

  useEffect(() => {
    axios.get("/api/manager").then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }, [loadflag]);

  useEffect(() => {
    axios.get("/api/worker/name/" + props.userName).then(response => {
      console.log(response.data);
      setWorkerdata(response.data);
    });
  }, [loadflag]);

  const handleDelete = id => {
    axios.delete("/api/manager/id/" + id).then(response => {
      console.log(response);
      setLoadflag(!loadflag);
      console.log(loadflag);
    });
  };

  const handleWorkerDelete = id => {
    axios.delete("/api/worker/id/" + id).then(response => {
      console.log(response);
      setLoadflag(!loadflag);
      console.log(loadflag);
    });
  };

  return (
    <React.Fragment>
      <Container>
        <Link
          to={{
            pathname: "/manageraddproject",
            state: {
              userName: props.userName,
              firstName: props.firstName,
              lastName: props.lastName
            }
          }}
        >
          <Button variant="secondary">Add a Project</Button>
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
                    <Button
                      variant="secondary"
                      onClick={() => handleDelete(project._id)}
                    >
                      Delete
                    </Button>
                    <Link
                      to={{
                        pathname: "/manageraddworker",
                        state: {
                          userName: props.userName,
                          projectName: project.projectName,
                          firstName: props.firstName,
                          lastName: props.lastName
                        }
                      }}
                    >
                      <Button className="btn btn-secondary m-2">
                        Add Worker
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
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
              <th>Worker Name</th>
              <th>Work Description</th>
              <th>Labour Hours</th>
              <th>Remarks</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {workerdata.map(work => {
              return (
                <tr key={work._id}>
                  <td>{work.projectName}</td>
                  <td>{work.workerName}</td>
                  <td>{work.workerDescription}</td>
                  <td>{work.labourHours}</td>
                  <td>{work.remarks}</td>
                  <td>
                    {work.status}
                    <Button
                      variant="secondary"
                      onClick={() => handleWorkerDelete(work._id)}
                    >
                      Delete
                    </Button>
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
