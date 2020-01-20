import React, { Component } from "react";
import Card from "./Card";

export default class CardHolder extends Component {
  render() {
    return (
      <div className="CardHolder">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
