import React, { Component } from "react";
import "./App.css";
import ArticleList from "./ArticleList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        {id: 1, title: "Title 1", description: "Description 1"},
        {id: 2, title: "Title 2", description: "Description 2"},
        {id: 3, title: "Title 3", description: "Description 3"},
        {id: 4, title: "Title 4", description: "Description 4"},
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
