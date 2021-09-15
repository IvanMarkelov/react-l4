import React, { Component } from "react";
import "./App.css";
import Hero from "./Hero";

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   heroes: [
    //     { imageUrl: "marcusfenix.jpg", title: "Markus", subtitle: "Warrior" },
    //     {
    //       imageUrl: "dom.jpg",
    //       title: "Dom",
    //       subtitle: "Document Object Model",
    //     },
    //   ],
    // };
  }

  render() {
    return (
      <div className="App">
        {this.props.heroes.map((hero) => {
          return (
            <Hero key={hero.id}
              imageUrl={hero.imageUrl}
              title={hero.title}
              subtitle={hero.subtitle}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
