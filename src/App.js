import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Learn React", active: true },
        { name: "Drink Tea", active: false },
      ],
    };
    console.log(this.state.data);
  }

  updateState() {
    console.log(this.state.data);
    const result = this.state.data.map((el) => {
      if (el.name === "Learn React") {
        return {...el, active: false};
      }
      return el;
    });
    console.log(result);
  }

  render() {
    this.updateState();
    return <div className="App"></div>;
  }
}

export default App;
