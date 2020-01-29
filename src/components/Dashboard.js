import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardHolder from "./CardHolder";
import LeadForm from "./LeadForm";
import NavBar from "./NavBar.js";

import Typography from "@material-ui/core/Typography";
import LeadSpec from "./LeadSpec";

export default class Index extends Component {
  state = {
    HHBleads: [],
    HBleads: [],
    IntLeads: [],
    clicked: false,
    clickedLead: null
  };

  API = "https://backend-jobhuntr.herokuapp.com/leads";

  newFetch = () => {
    fetch(this.API)
      .then(r => r.json())
      .then(data => this.leadsFilter(data));
  };

  componentDidMount() {
    // console.log("currentId:", this.props.currentId);
    fetch(this.API)
      .then(r => r.json())
      .then(data => this.leadsFilter(data));
  }

  handleHomeClick = () => {
    this.setState({
      clicked: false
    });
  };
  handleCardClick = lead => {
    this.setState(
      {
        clicked: !this.state.clicked,
        clickedLead: lead
      },
      () => console.log(this.state)
    );
  };

  leadsFilter = data => {
    let userLeads = data.filter(lead => lead.user_id === this.props.currentId);

    let HHBleads = userLeads.filter(
      lead => lead.status === "Haven't Heard Back"
    );
    let HBleads = userLeads.filter(lead => lead.status === "Heard Back");
    let IntLeads = userLeads.filter(lead => lead.status === "Interviewed");
    this.setState(
      {
        HHBleads: HHBleads,
        HBleads: HBleads,
        IntLeads: IntLeads
      },
      () => console.log(this.state)
    );
  };

  render() {
    return this.state.clicked === false ? (
      <div>
        <NavBar
          handleCardClick={this.handleHomeClick}
          handleLogout={this.props.handleLogout}
          loggedIn={true}
          currentName={this.props.currentName}
        />
        <LeadForm
          currentId={this.props.currentId}
          newFetch={this.newFetch}
        ></LeadForm>
        <Typography variant="heading2" component="h2" align="center">
          Your Job Leads
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Container>
              <Typography variant="heading3" component="h3">
                Haven't Heard Back
              </Typography>
              <CardHolder
                key={1}
                handleCardClick={this.handleCardClick}
                leads={this.state.HHBleads}
              />
            </Container>
          </Grid>

          <Grid item xs={4}>
            <Container>
              <Typography variant="heading3" component="h3">
                Heard Back
              </Typography>
              <CardHolder
                key={2}
                handleCardClick={this.handleCardClick}
                leads={this.state.HBleads}
              />
            </Container>
          </Grid>

          <Grid item xs={4}>
            <Container>
              <Typography variant="heading3" component="h3">
                Interviewed
              </Typography>
              <CardHolder
                key={3}
                handleCardClick={this.handleCardClick}
                leads={this.state.IntLeads}
              />
            </Container>
          </Grid>
        </Grid>
      </div>
    ) : (
      <div>
        <NavBar
          handleCardClick={this.handleHomeClick}
          handleLogout={this.props.handleLogout}
          currentName={this.props.currentName}
          loggedIn={true}
        />
        <LeadSpec lead={this.state.clickedLead} newFetch={this.newFetch} />
      </div>
    );
  }
}
