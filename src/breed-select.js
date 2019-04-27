import React from "react";
import Query from "./query";

class BreedSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Query url="https://dog.ceo/api/breeds/list/all">
        {({ loading, data, error }) => {
          console.log({ loading, data, error });
          if (loading || error) {
            return null;
          }
          const keys = Object.keys(data.message);
          const breedOptions = keys.map(breed => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            );
          });
          return (
            <select
              id="breed-select"
              className="form-control"
              value={value}
              onChange={onChange}
            >
              <option value="">Choose...</option>
              {breedOptions}
            </select>
          );
        }}
      </Query>
    );
  }
}

export default BreedSelect;
