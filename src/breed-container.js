import React, { Fragment, useState } from "react";
import BreedSelect from "./breed-select";
import BreedCounter from "./breed-counter";
import BreedImages from "./breed-images";

const BreedContainer = () => {
  const [selected, changeSelected] = useState(""); // [0=state, 1=setState]
  const [counter, changeCounter] = useState("3"); // [0=state, 1=setState]

  const onChangeSelected = e => {
    changeSelected(e.target.value);
  };

  const onChangeCounter = e => {
    changeCounter(e.target.value);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-10">
          <BreedSelect value={selected} onChange={onChangeSelected} />
        </div>
        <div className="col-2">
          <BreedCounter value={counter} onChange={onChangeCounter} />
        </div>
      </div>
      <BreedImages breed={selected} count={counter} />
    </Fragment>
  );
};

export default BreedContainer;
