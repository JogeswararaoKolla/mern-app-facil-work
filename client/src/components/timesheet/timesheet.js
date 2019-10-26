import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import InfoBar from '../infobar/infobar';


function TimeSheet() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/timesheet").then(response => {
          console.log(response.data);
          setData(response.data);
        });
      }, []);

    return(
        <React.Fragment>
            <InfoBar title="Time Sheet" />
            <Container>
                <h3>Worker 1</h3>
                <a href="/add-timesheet">Add Work</a>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Project</th>
                        <th>Work Assigned</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(project => {
                        return (
                            <tr>
                                <td>{project.project_name}</td>
                                <td>{project.worked_assigned}</td>
                                <td>{moment(project.start_date).format("MM-DD-YYYY")}</td>
                                <td>{moment(project.end_date).format("MM-DD-YYYY")}</td>
                                <td>{project.hours_worked}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default TimeSheet;