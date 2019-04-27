import React, { useEffect, useState } from "react";
import Query from "./query";
import { Link } from "@reach/router";

const BreedImages = ({ breed, count }) => {
  if (breed === "") {
    return null;
  }
  const url = `https://dog.ceo/api/breed/${breed}/images/random/${count}`;

  return (
    <Query url={url}>
      {({ data, loading, error }) => {
        if (loading || error) {
          return null;
        }
        const images = data.message.map(url => {
          const split = url.split("/");
          const id = `${split[4]}-${split[5]}`;
          return (
            <Link to={`/details/${id}`} key={url}>
              <img src={url} />
            </Link>
          );
        });
        return <div className="jumbotron">{images}</div>;
      }}
    </Query>
  );
};

export default BreedImages;
