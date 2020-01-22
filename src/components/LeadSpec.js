import React, { Component } from 'react'

export default class LeadSpec extends Component {
    render() {
        return (
            <div>
    <h1>{this.props.lead.title}</h1>
    <h2>{this.props.lead.company}</h2>
            </div>
        )
    }
}
