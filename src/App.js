import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard.js";
import NavBar from "./components/NavBar.js";

class App extends React.Component {
  state = {
    loggedIn: false,
    currentName: "",
    currentId: ""
  };

  handleLogin = user => {
    if (user.jwt) {
      this.setState({
        loggedIn: true,
        currentName: user.user.user.name,
        currentId: user.user.user.id
      });
    } else {
      alert("Invalid email or password");
    }
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false,
      currentName: "",
      currentId: ""
    })
  }
  

 

  render() {
    return (
      <Router>
        <div>
          <NavBar
            loggedIn={this.state.loggedIn}
            handleLogout={this.handleLogout}
          />
          {this.state.loggedIn === true ? (
            <div>
              <Dashboard currentId={this.state.currentId} />
            </div>
          ) : (
            <div>
              <Route
                exact
                path="/"
                render={props => (
                  <Signup {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route
                exact
                path="/signin"
                render={props => (
                  <Signin {...props} handleLogin={this.handleLogin} />
                )}
              />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
