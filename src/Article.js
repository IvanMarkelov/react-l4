import { Component } from "react";
import { Button, Card, Elevation, H2, Label } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

export default class Article extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { article, isOpen, onButtonClick } = this.props;

    return (
      <div>
        <Card elevation={Elevation.TWO}>
          <H2 >
            {article.title}
          </H2>
          <Label>{isOpen && article.description}</Label>
          <Button onClick={onButtonClick}>{isOpen ? "Close" : "Open"}</Button>
        </Card>
      </div>
    );
  }
}
