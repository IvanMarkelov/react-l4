import React, { Component } from "react";

function ImageCounter(props) {
  return (
    <div>
        <p>Counter: {props.count}</p>
      <img style={{maxWidth: "200px"}} src={"img/" + props.imageUrl} onClick={props.onCount} />
    </div>
  );
}

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = (e) => {
    let size;
    this.state.count % 2 === 0 ? (size = "50px") : (size = "200px");
    e.target.style.maxWidth = size;
    this.setState({ count: +this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <ImageCounter
          imageUrl={this.props.imageUrl}
          count={this.state.count}
          onCount={this.handleClick}
        />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}
