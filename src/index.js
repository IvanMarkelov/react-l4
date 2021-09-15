import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const data = [
  { id: 1, imageUrl: "marcusfenix.jpg", title: "Markus", subtitle: "Warrior" },
  {
    id: 2,
    imageUrl: "dom.jpg",
    title: "Dom",
    subtitle: "Document Object Model",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App heroes={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
