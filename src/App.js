import React, { Component } from "react";
import Product from "./Product";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  render() {
    //return <div className="App">{[1, 2, 3, 4, 5]}</div>;
    return (
      <div className="App">
        {/* {[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div>]} */}
      
        <Product />
      
      </div>
    );
  }
}

export default App;
