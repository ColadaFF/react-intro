import React from "react";

const Details = props => {
  const id = props.id.split("-");
  const imageUrl = `https://images.dog.ceo/breeds/${id[0]}/${id[1]}`;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron">
          <h1>{id[0]}</h1>
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default Details;
