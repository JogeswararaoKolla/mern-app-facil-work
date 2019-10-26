import React from 'react';
import InfoBar from '../infobar/infobar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


function MatProcure() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/material").then(response => {
          console.log(response.data);
          setData(response.data);
        });
      }, []);
    
    return(
        <React.Fragment>
            <InfoBar title = "Material Procurement" />
            <Container>
            <a href="/add-material">Add Material</a>
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Project</th>
                        <th>Work Assigned</th>
                        <th>Deadline</th>
                        <th>Material</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(project => {
                        return (
                            <tr>
                                <td>{project.project_name}</td>
                                <td>{project.worked_assigned}</td>
                                <td>{moment(project.dead_line).format("MM-DD-YYYY")}</td>
                                <td>{project.material}</td>
                                <td>{project.quantity}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default MatProcure;