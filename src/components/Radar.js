import React, { Component } from "react";

export default class Radar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>Car speed is: </label>
        <label
          style={
            this.props.carSpeed > 90 ? { color: "red" } : { color: "black" }
          }
        >
          {this.props.carSpeed <= 90 ? "normal" : "TOO HIGH!"}
        </label>
      </div>
    );
  }
}
