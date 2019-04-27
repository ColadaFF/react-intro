import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const BreedImages = ({ breed, count }) => {
  const [state, setState] = useState({ loading: true, error: null, data: [] });
  const setData = response =>
    setState({ loading: false, data: response.data.message });
  const setError = error => setState({ loading: false, error });

  useEffect(() => {
    if (breed !== "") {
      const url = `https://dog.ceo/api/breed/${breed}/images/random/${count}`;
      axios.get(url).then(setData, setError);
    }
  }, [breed, count]);

  const images = state.data.map(url => {
    const split = url.split("/");
    const id = `${split[4]}-${split[5]}`;
    return (
      <Link to={`/details/${id}`}>
        <img src={url} key={url} />
      </Link>
    );
  });
  return <div className="jumbotron">{images}</div>;
};

export default BreedImages;
