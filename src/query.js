import React, { useState, useEffect } from "react";
import axios from "axios";

const Query = props => {
  const { url, children } = props;
  const [state, setState] = useState({
    loading: true,
    error: undefined,
    data: undefined
  });

  const setData = response => setState({ loading: false, data: response.data });
  const setError = error => setState({ loading: false, error });

  useEffect(() => {
    if (url !== "") {
      axios.get(url).then(setData, setError);
    }
  }, [url]);

  return children(state);
};

export default Query;
