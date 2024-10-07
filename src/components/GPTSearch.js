import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="-z-10 absolute">
        <img alt="background image" src={BG_IMAGE} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
