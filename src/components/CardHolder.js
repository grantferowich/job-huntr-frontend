import React, { Component } from "react";
import LeadCard from "./LeadCard";

export default class CardHolder extends Component {
  render() {
    return this.props.leads.map(lead => (
      <div className="CardHolder">
        <LeadCard lead={lead} />
      </div>
    ));
  }
}
