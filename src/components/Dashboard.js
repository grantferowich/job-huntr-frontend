import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardHolder from "./CardHolder";
export default class Index extends Component {
  render() {
    return (
      <div>
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
