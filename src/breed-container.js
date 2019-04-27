import React, { useState } from "react";
import BreedSelect from "./breed-select";

const BreedContainer = () => {
  const [selected, changeSelected] = useState(""); // [state, setState]
  const onChange = e => {
    changeSelected(e.target.value);
  };
  return <BreedSelect value={selected} onChange={onChange} />;
};

export default BreedContainer;
