import React from "react";
import { TMDB_IMG_PATH } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt={title} src={TMDB_IMG_PATH + posterPath} />
    </div>
  );
};

export default MovieCard;
