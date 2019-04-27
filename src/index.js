import React from "react";
import { render } from "react-dom";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.breed),
    React.createElement("h2", {}, props.animal)
  ]);
};

const App = () => {
  // <h1>Hello World</h1>
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adoptar!"),
    React.createElement(Pet, { name: "Luna", breed: "Basset", animal: "Dog" }),
    React.createElement(Pet, { name: "Chester", breed: "Cold", animal: "Cat" })
  ]);
};

const RootElement = document.getElementById("root");

render(React.createElement(App), RootElement);
