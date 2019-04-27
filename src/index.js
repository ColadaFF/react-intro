import React from "react";
import { render } from "react-dom";

const Title = props => {
  return <h1>{props.label}</h1>;
};

const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

const App = () => {
  // <h1>Hello World</h1>
  return (
    <div>
      <Title label="Adoptame!" />
      <Pet name="Luna" animal="Dog" breed="Basset" />
    </div>
  );
};

const RootElement = document.getElementById("root");

render(<App />, RootElement);
