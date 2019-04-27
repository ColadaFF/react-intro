import React from "react";

const BreedCount = props => {
  const { value, onChange } = props;
  return (
    <select
      id="breed-select-count"
      className="form-control"
      value={value}
      onChange={onChange}
    >
      <option value="3">3</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  );
};

export default BreedCount;
