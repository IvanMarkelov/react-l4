import React, { Component } from "react";
import "./App.css";
import Road from "./components/Road";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  render() {
    return <div className="App">
      <Road />
    </div>;
  }
}

export default App;
