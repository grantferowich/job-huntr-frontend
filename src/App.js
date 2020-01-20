import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Login from "./components/Login.js";
import Index from "./components/Index.js";
class App extends React.Component {
  state = {
    loggedIn: false,
    currentName: "",
    currentId: ""
  };

  handleLogin = (name, id) => {
    this.setState({ loggedIn: true, currentName: name, currentId: id }, () =>
      console.log(this.state)
    );
  };

  changeDisplay() {
    return;
  }
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <h1>Job Huntr</h1>
        </AppBar>
        {this.state.loggedIn === true ? (
          <div>
            <Index />
          </div>
        ) : (
          <div>
            <Login handleLogin={this.handleLogin} />
          </div>
        )}
        ;
      </div>
    );
  }
}

export default App;
