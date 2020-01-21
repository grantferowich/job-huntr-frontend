import React, { Component } from "react";
import LeadCard from "./LeadCard";

export default class CardHolder extends Component {
  render() {
    return (
      <div className="CardHolder">
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
      </div>
    );
  }
}
