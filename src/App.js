import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",

      {},
      name
    ),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Jerry",
      animal: "Dog",
      breed: "Bichon",
    }),
    React.createElement(Pet, {
      name: "Lucky",
      animal: "Dog",
      breed: "Bichon",
    }),
    React.createElement(Pet, {
      name: "Oliver",
      animal: "Dog",
      breed: "Wheaton Terrier",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
