import React, { Component } from "react";

export default class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 0,
    };
  }

  changeSpeed = (e) => this.setState({ speed: e.target.value });

  render() {
    return (
      <div>
        <label>Set Car Speed:</label>
        <input
          value={this.state.speed}
          onChange={(e) => {
            this.changeSpeed(e);
            this.props.onChangeSpeed(e.target.value);
          }}
          type="range"
          min="0"
          max="200"
        />
        <output>{this.state.speed} km/h</output>
      </div>
    );
  }
}
