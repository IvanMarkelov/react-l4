import React, { Component } from "react";
import "./App.css";

class Modal extends Component {
  closeModal = (e) => {
    if (e.target.dataset.closer) {
      this.props.closeHandler();
    }
  };

  render() {
    const { children, closeHandler } = this.props;

    return (
      <div onClick={this.closeModal}>
        <div onClick={this.closeModal}>
          {children}
        </div>
      </div>
    );
  }
}

class ModalRandomUser extends Modal {
  state = {
    randomUserData: null,
  };

  fetchRandomUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((randomUserData) => this.setState({ randomUserData }));
  };

  componentDidMount() {
    this.fetchRandomUser();
  }

  render() {
    if (!this.state.randomUserData) return null;

    const { picture } = this.state.randomUserData.results[0];

    return (
      <div onClick={this.closeModal}>
        <div onClick={this.closeModal}>
          <img src={picture.large} alt="" />
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  render() {
    return <div className="App">
      <ModalRandomUser />
    </div>;
  }
}

export default App;
