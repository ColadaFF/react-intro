import React from "react";
import axios from "axios";

class BreedSelect extends React.Component {
  state = {
    loading: true,
    data: {},
    error: null
  };

  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(
      response => {
        const { data } = response;
        this.setState({
          loading: false,
          data
        });
      },
      error => {
        this.setState({
          loading: false,
          error
        });
      }
    );
  }

  render() {
    const { loading, data, error } = this.state;
    const { value, onChange } = this.props;
    if (loading) {
      return <h1>Loading ...</h1>;
    } else {
      if (error) {
        return <h1>Error ...</h1>;
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
    }
  }
}

export default BreedSelect;
