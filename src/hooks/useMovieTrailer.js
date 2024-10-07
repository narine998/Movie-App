import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await data.json();
      const trailer =
        json.results.find((video) => video.type === "Trailer") ||
        json.results[0];
      dispatch(addVideoTrailer(trailer));
    };
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
