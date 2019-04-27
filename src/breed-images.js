import React, { useEffect, useState } from "react";
import axios from "axios";

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
    return <img src={url} key={url} />;
  });
  return <div className="jumbotron">{images}</div>;
};

export default BreedImages;
