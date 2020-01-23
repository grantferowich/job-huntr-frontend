import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Signin from "./components/Signin.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
class App extends React.Component {
  state = {
    loggedIn: false,
    currentName: "",
    currentId: ""
  };

  handleLogin = (user) => {
    console.log(user)
    this.setState({ loggedIn: true, currentName: user.user.user.name, currentId: user.user.user.id }, () =>
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
            <Dashboard />
          </div>
        ) : (
          <div>
            <Login handleLogin={this.handleLogin} />
            <Signin handleLogin={this.handleLogin}/>
          </div>
        )}
        ;
      </div>
    );
  }
}

export default App;
