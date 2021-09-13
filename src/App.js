import React, { Component } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasklist: [
        "Тестовое задание 1",
        "Тестовое задание 2",
        "Тестовое задание 3",
        "Тестовое задание 4",
        "Тестовое задание 5",
      ],
      textField: "",
      removeDisabled: false,
    };
  }

  updateTextField = (e) =>  this.setState({ textField: e.target.value });
  addTask = () =>
    this.setState({
      tasklist: [...this.state.tasklist, this.state.textField],
      removeButtonDisabled: false,
    });

  removeTask = (e) => {
    let tempTasklist = this.state.tasklist;
    tempTasklist.pop();
    this.setState({
      tasklist: tempTasklist,
    });
    if (tempTasklist.length === 0) {
      this.setState({
        removeButtonDisabled: true,
      });
    }
  };

  crossOutTheTask = (e) => {
  
    if (e.target.previousSibling.className!=="crossed-out") {
      e.target.previousSibling.className="crossed-out";
      e.target.textContent="Отменить";
    } else {
      e.target.previousSibling.className="";
      e.target.textContent="Выполнить";
    } 
  }

  render() {
    return (
      <div className="App">
        <ul style={{listStyle: "none"}}>
          {this.state.tasklist.map((task, index) => {
            return (
              <li key={task + index}>
                <Card interactive={true} elevation={Elevation.TWO}>
                  <h3>{task}</h3>
                  <button onClick={this.crossOutTheTask}>Выполнить</button>
                </Card>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={this.state.textField}
          onChange={this.updateTextField}
        />
        <button onClick={this.addTask}>Добавить задачу</button>
        <button
          disabled={this.state.removeDisabled}
          onClick={this.removeTask}
        >
          Убрать задачу
        </button>
      </div>
    );
  }
}

export default App;
