import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardHolder from "./CardHolder";
import LeadForm from "./LeadForm";
export default class Index extends Component {
  state = {
    HHBleads: [],
    HBleads: [],
    IntLeads: []
  };
  API = "http://localhost:3000/leads";

  componentDidMount() {
    fetch(this.API)
      .then(r => r.json())
      .then(data => this.leadsFilter(data));
  }

  leadsFilter = data => {
    let HHBleads = data.filter(lead => lead.status === "Haven't Heard Back");
    let HBleads = data.filter(lead => lead.status === "Heard Back");
    let IntLeads = data.filter(lead => lead.status === "Interviewed");
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
    return (
      <div>
        <LeadForm></LeadForm>
        <h1>Your Job Leads</h1>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Container>
              Haven't Heard Back
              <CardHolder />
            </Container>
          </Grid>

          <Grid item xs={4}>
            <Container>
              Heard Back
              <CardHolder />
            </Container>
          </Grid>

          <Grid item xs={4}>
            <Container>
              Interviewed
              <CardHolder />
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
