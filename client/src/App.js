import React, { Component } from "react";
import Routes from './router';

class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
          <Routes />
        )
    }
}

export default App;