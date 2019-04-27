import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const Title = props => {
  return <h1>{props.label}</h1>;
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
