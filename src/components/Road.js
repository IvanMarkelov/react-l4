import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Radar from "./Radar";
import Vehicle from "./Vehicle";

export default class Road extends Component {
  constructor(props) {
    super(props);

    this.state = {
        carSpeed: 0,
    }
  }

  handleCarSpeed = (speed) => (this.setState({carSpeed: speed}));

  render() {
    return (
      <Fragment>
        <Vehicle onChangeSpeed={this.handleCarSpeed} />
        <Radar carSpeed={this.state.carSpeed} />
      </Fragment>
    );
  }
}
