import React, { Component } from "react";
import "./App.css";
import Article from "./Article";

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null,
    };
  }

  handleClick = (openArticleId) =>
    this.setState({
      openArticleId:
        this.state.openArticleId === openArticleId ? null : openArticleId,
    });

  render() {
    const articleElements = this.props.articles.map((article, index) => (
      <li style={{ padding: "10px" }} key={article.id}>
        <Article
          article={article}
          isOpen={this.state.openArticleId === article.id}
          onButtonClick={this.handleClick.bind(this, article.id)}
        />
      </li>
    ));

    return (
      <div className="ArticleList">
        <ul style={{ listStyle: "none" }}>{articleElements}</ul>
      </div>
    );
  }
}

export default ArticleList;
