import React, { Fragment, useState } from "react";
import BreedSelect from "./breed-select";
import BreedImages from "./breed-images";

const BreedContainer = () => {
  const [selected, changeSelected] = useState(""); // [0=state, 1=setState]
  const onChange = e => {
    changeSelected(e.target.value);
  };
  return (
    <Fragment>
      <BreedSelect value={selected} onChange={onChange} />
      <BreedImages breed={selected} />
    </Fragment>
  );
};

export default BreedContainer;
