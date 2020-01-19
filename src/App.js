import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Login from "./components/Login.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <h1>Job Huntr</h1>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;
