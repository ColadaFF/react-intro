import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import BreedContainer from "./breed-container";
import Details from "./details";

const Title = props => {
  return <h1>{props.label}</h1>;
};

const Home = () => {
  return (
    <div>
      <Title label="Adoptame!" />
      <BreedContainer />
    </div>
  );
};

const App = () => {
  // <h1>Hello World</h1>
  return (
    <Router>
      <Home path="/" />
      <Details path="/details/:id" />
    </Router>
  );
};

const RootElement = document.getElementById("root");

render(<App />, RootElement);
