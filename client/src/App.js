import React, { Component } from "react";
import Routes from './router';
import Manager1 from './components/Manager1';


class App extends Component {
    state = {
        companyName: "",
        workerName: "",
        date: ""
    }

    render() {
        return (
             <Routes/>
        )
    }
}

export default App;