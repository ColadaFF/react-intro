import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import BreedContainer from "./breed-container";

const Title = props => {
  return <h1>{props.label}</h1>;
};

const App = () => {
  // <h1>Hello World</h1>
  return (
    <div>
      <Title label="Adoptame!" />
      <BreedContainer />
      <Pet name="Luna" animal="Dog" breed="Basset" />
    </div>
  );
};

const RootElement = document.getElementById("root");

render(<App />, RootElement);
