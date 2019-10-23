import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Tasks extends Component {
  // Setting our component's initial state
  state = {
    task: [],
    worker: "",
    deadline: "",
    hours: "",
    remarks: ""
  };

  // When the component mounts, load all tasks and save them to this.state.tasks
  componentDidMount() {
    this.loadTasks();
  }

  // Loads all tasks and sets them to this.state.tasks
  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ tasks: res.data, task: "", worker: "", deadline: "", hours: "", remarks: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a task from the database with a given id, then reloads tasks from the db
  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveTask method to save the task data
  // Then reload tasks from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.task && this.state.deadline) {
      API.saveTask({
        task: this.state.task,
        worker: this.state.worker,
        deadline: this.state.deadline,
        hours: this.state.hours,
        remarks: this.state.remarks       
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a task</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.task}
                onChange={this.handleInputChange}
                name="task"
                placeholder="Task (required)"
              />
              <Input
                value={this.state.worker}
                onChange={this.handleInputChange}
                name="worker"
                placeholder="Worker"
              />
              <Input
                value={this.state.deadline}
                onChange={this.handleInputChange}
                name="deadline"
                placeholder="Deadline (required)"
              />
               <Input
                value={this.state.hours}
                onChange={this.handleInputChange}
                name="hours"
                placeholder="Hours alloted"
              />


              <TextArea
                value={this.state.renarks}
                onChange={this.handleInputChange}
                name="remarks"
                placeholder="Remarks (Optional)"
              />
              <FormBtn
                disabled={!(this.state.task && this.state.deadline)}
                onClick={this.handleFormSubmit}
              >
                Submit Task
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Tasks List</h1>
            </Jumbotron>
            {this.state.tasks.length ? (
              <List>
                {this.state.tasks.map(task => {
                  return (
                    <ListItem key={task._id}>
                      <a href={"/tasks/" + task._id}>
                        <strong>
                          Tasks List
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
